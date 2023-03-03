const historyFiles = [ 
    {name: 'Mahasiswa Trim & Validation', file: 'mahasiswa-trim-validation.json'},
];
let rowNumber = 1;
let selectedHistoryIndexes = [];
let selectedFile = historyFiles[0];

// TODO: selected files, these data depends from onchange selected file
let dataHistory = dataHistoryMahasiswa;
$('#selected-filename').html(selectedFile.name);
$('#total-rows').html(dataHistory.length);
// TODO END


historyFiles.forEach((historyFile) => {
    let option = `<option value="${historyFile.file}">${historyFile.name}</option>`;
    $('#select-files').append(option);
    console.log(historyFile);
});

dataHistory.forEach( (history, historyIndex) => {
    const columnName = getColumnName(history); 
    const checkbox = `<input type="checkbox" data-history-index="${historyIndex}" onchange="addOrRemoveHistory(this)" class="form-control history-checkbox" style="height:17px">`;

    let historyRow = 
    `<tr>
        <td>${checkbox}</td>
        <td>${rowNumber++}</td>
        <td>${history.op}</td>
        <td>${columnName}</td> 
        <td>
            ${getExpressionHistoryByType(history).substring(0, 30)}..
        </td>
        <td>
            <button onclick='showModalExpression(${historyIndex})' class="btn btn-warning btn-xs"><i class="fa fa-edit"></i>Expression</button>
        </td>
    </tr>`
    
    $('#data-json').append(historyRow);
});

$('.table-history').DataTable({
    "pageLength": 50,
    "columnDefs": [
        { "orderable": false, "targets": [0,5] }
    ]
});               

function showModalExpression(historyIndex) {
    $('#modal-title').html(getColumnName(dataHistory[historyIndex]));
    $('#modal-txt-expression').val(getExpressionHistoryByType(dataHistory[historyIndex]));
    $('#modal-history-index').val(historyIndex);
    
    $('#modal-expression').modal('show');
}

$("#modal-btn-save").click(function() {
    const expression = $('#modal-txt-expression').val();
    const historyIndex = $('#modal-history-index').val();

    if (dataHistory[historyIndex].op == 'core/column-addition-by-fetching-urls') {
        dataHistory[historyIndex].urlExpression = expression;
    } else {
        dataHistory[historyIndex].expression = expression;
    }
    console.log(expression);
    
    $('#modal-expression').modal('hide');

    new PNotify({
        title: 'Success',
        text: 'Update Data Successfully',
        type: "success",
        delay: 500
    });
});

$("#btn-export").click(function() {
    let filename = selectedFile.name+'.json';
    let text = JSON.stringify(dataHistory);
    
    if (selectedHistoryIndexes.length > 0) {
        selectedHistoryIndexes = selectedHistoryIndexes.sort();

        let selectedDataHistory = selectedHistoryIndexes.map((historyIndex) => {
            return dataHistory[historyIndex];
        });

        text = JSON.stringify(selectedDataHistory);        
    }

    download(filename, text);
});

function toggleSelectAllHistory(checkbox) {
    // selectedHistoryIndexes = [];

    if ($(checkbox).is(":checked")) {
        const totalHistory = dataHistory.length;
        // index will be added by onchange function addOrRemoveHistory
        // selectedHistoryIndexes.push(...Array(totalHistory).keys());

        $('.history-checkbox').prop("checked", true);
        console.log(totalHistory);
        console.log(selectedHistoryIndexes);
    } else {
        $('.history-checkbox').prop("checked", false);
    }

    document.querySelectorAll('.history-checkbox').forEach(function(checkbox) {
        console.log(checkbox);
        addOrRemoveHistory(checkbox);
    })
}

function addOrRemoveHistory(checkbox) {
    const historyIndex = $(checkbox).data('history-index');

    if ($(checkbox).is(":checked")) {
        if(!selectedHistoryIndexes.includes(historyIndex)) selectedHistoryIndexes.push(historyIndex);
    } else {
        if(selectedHistoryIndexes.includes(historyIndex)) selectedHistoryIndexes.splice(selectedHistoryIndexes.indexOf(historyIndex), 1);
    }  
}

function getColumnName(history) {
    return history.columnName ?? (history.baseColumnName + ' -> <b>' + history.newColumnName + '</b>');
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

function getExpressionHistoryByType(history) {
    let expression = history.expression;
    if (history.op == 'core/column-addition-by-fetching-urls') {
        expression = history.urlExpression;
    }

    return expression;
}

