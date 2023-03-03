let stepActive = 1;
let columnHistories = [];
let listOfParamaters = [];
let columnIndexFocused = null;

$('#label-total-column').html('0'); 
$('.step-2-container').hide();

function getTxtColumns(txtColumns) {
    columnHistories = $(txtColumns).val().split(/\r?\n/);
    columnHistories = columnHistories.filter(n => n);

    columnHistories = columnHistories.map(function(column) {
        return {
            'name' : column,
            'expression' : null,
            'expression_template' : null,
            'parameter_names' : null
        };
    });

    $('#label-total-column').html(columnHistories.length);
    generateList();
}

function generateList() {
    columnHistories.forEach(function(columnHistory, index){
        console.log(columnHistory);
        $('#columns-data').append(tableRowHistoryWidget(columnHistory, index));
    });

    $('.table-validator').DataTable();   
}

function tableRowHistoryWidget(history, index) {
    return `<tr>
        <td style="width: 50px;">${index+1}</td>
        <td style="width: 200px;">
            <input type="text" class="form-control" value="${history.name}">
        </td>
        <td class="expression-${index}">
            <button class="btn btn-success" id="btn-expression" onclick="showModalExpression(${index})">Select</button>
        </td>
    </tr>`
}

function showModalExpression(indexColumn) {
    columnIndexFocused = indexColumn;
    $('#modal-expression').modal('show');
}

listValidators.forEach((validator, validatorIndex) => {
    let parameters = validator.parameter.map( param => param.field ).join(', ');

    let validatorRow = `<tr>
        <td>${validatorIndex + 1}</td>
        <td>${validator.name}</td>
        <td>${parameters}</td> 
        <td>
            <button onclick='selectExpression(${validatorIndex})' class="btn btn-warning btn-xs"><i class="fa"></i>Pilih</button>
            <!-- <button onclick='showModalExpression(${validatorIndex})' class="btn btn-info btn-xs"><i class="fa fa-eye"></i>Expression</button> -->
        </td>
    </tr>`
    
    $('#data-json').append(validatorRow);
});

function selectExpression(validatorIndex) {
    let validator = listValidators[validatorIndex];

    columnHistories[columnIndexFocused].expression_template = validator.expression;
    columnHistories[columnIndexFocused].parameter_names = validator.parameter.map(param => param.field);

    let parametersHtml = '';
    validator.parameter.forEach(function(parameter) {
        let indexOpener = validator.expression.indexOf(`__${parameter.field}__`);
        let indexCloser = validator.expression.indexOf(`__${parameter.field}_end__`);
        indexOpener += `__${parameter.field}__`.length;

        if (parameter.type != 'checkbox') {
            validator.expression =  validator.expression.substring(0, indexOpener) + (parameter.value ?? '') + validator.expression.substring(indexCloser);
        }

        parametersHtml += `
            <label for="">${parameter.field}</label>
            <input type="${parameter.type}" name="${parameter.field}" value="${parameter.value ?? ''}" data-index="${columnIndexFocused}" onchange="changeParamValue(this)"><br>`;
    });
    
    columnHistories[columnIndexFocused].expression = validator.expression;

    let expressionContent = `<div class="expression-container">
            <b for="">${validator.name}</b>
            <br>
            ${parametersHtml}
        </div>`;
    $('.expression-'+columnIndexFocused).html(expressionContent);
    
    $('#modal-expression').modal('hide');
}

function changeParamValue(input) {
    let indexColumn = $(input).data('index');
    let paramName = $(input).attr('name');
    let expression = columnHistories[indexColumn].expression;
    
    let indexOpener = expression.indexOf(`__${paramName}__`);
    let indexCloser = expression.indexOf(`__${paramName}_end__`);
    indexOpener += `__${paramName}__`.length;

    let value = $(input).val();
    if ($(input).attr('type') == 'checkbox') {
        value = $(input).is(':checked') == false ? '' : $(input).val(); 
    }
    
    columnHistories[indexColumn].expression = expression.substring(0, indexOpener) + value + expression.substring(indexCloser);
}

$('#btn-generate-json').click(function() {
    let historyJson = [];
    
    historyJson.push({
        "op": "core/column-reorder",
        "columnNames": columnHistories.map(column => column.name),
        "description": "Reorder columns"
    });

    historyJson.push(...generateTrim());
    historyJson.push(...generateReplaceNull());

    let insertIndex = 1;
    columnHistories.map(function(history) {
        let newColumnName = history.name.replaceAll(' ','_') + '_VALIDATION';

        let expression = history.expression;
        history.parameter_names.forEach((parameterName) => {
            console.log(parameterName);
            expression = expression.replace(`__${parameterName}__`, '');
            expression = expression.replace(`__${parameterName}_end__`, '');
        });

        historyJson.push({
            "op": "core/column-addition",
            "engineConfig": {
            "facets": [],
            "mode": "row-based"
            },
            "baseColumnName": history.name,
            "expression": expression,
            "onError": "set-to-blank",
            "newColumnName": newColumnName,
            "columnInsertIndex": insertIndex,
            "description": "Create column "+newColumnName+" at index 7 based on column "+history.name+" using expression "+history.expression
        });
        insertIndex+=2
    });


    let filename = 'name_here'+'.json';
    let text = JSON.stringify(historyJson);

    download(filename, text);
});

$('#btn-next').click(function() {
    if (columnHistories.length < 1) {
        new PNotify({
            title: 'Warning',
            text: 'Data kolom kosong',
            type: "warning",
            delay: 500
        });

        return;
    }

    $('.step-1-container').hide();
    $('.step-2-container').show();
});

function addParameters(param) {
    if (!listOfParamaters.includes(param)) {
        listOfParamaters.push(param);
    }
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function generateTrim() {
    let historyJson = [];

    columnHistories.map(function(history) {
        historyJson.push({
            "op": "core/text-transform",
            "engineConfig": {
            "facets": [],
            "mode": "record-based"
            },
            "columnName": history.name,
            "expression": "value.trim()",
            "onError": "keep-original",
            "repeat": false,
            "repeatCount": 10,
            "description": "Text transform on cells in column "+history.name+" using expression value.trim()"
        });
    });

    return historyJson;
}

function generateReplaceNull() {
    let historyJson = [];

    columnHistories.map(function(history) {
        historyJson.push({
            "op": "core/text-transform",
            "engineConfig": {
            "facets": [],
            "mode": "row-based"
            },
            "columnName": history.name,
            "expression": "jython:if value.lower() == 'null' or value == '-':\n    return None\nreturn value",
            "onError": "keep-original",
            "repeat": false,
            "repeatCount": 10,
            "description": "Text transform on cells in column "+history.name+" using expression jython:if value.lower() == 'null' or value == '-':\n    return None\nreturn value"
        });
    });

    return historyJson;
}