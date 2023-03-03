const listValidators = [
    {
        "name" : "Validator VarcharText Max Length",
        "expression" : "jython:if value is None:\n    return ('Data Null__is_required____is_required_end__')\n\nvalue = str(value)\n\nif len(value) > __max_length____max_length_end__ and len(value) < __min_length____min_length_end__ :\n    return (value)\n\nreturn ('')",
        "parameter" : [
            {
                "field" : "max_length",
                "description" : "Masukan panjang maksimal",
                "type" : "number",
                "value" : "100"
            },
            {
                "field" : "min_length",
                "description" : "Masukan panjang minimal",
                "type" : "number",
                "value" : "1"
            },
            {
                "field" : "is_required",
                "description" : "Apakah data tidak boleh kosong?",
                "type" : "checkbox",
                "value" : ", Wajib diisi"
            }
        ]
    },
    {
        "name" : "Validator Numeric, Max Length",
        "expression" : "jython:if value is None:\n    return ('Data Null__is_required____is_required_end__')\n\noriginalValue = value\nvalue = str(value).replace('.', '', 1)\n\nif not value.isnumeric() or (len(value) > __max_length____max_length_end__ and len(value) < __min_length____min_length_end__):\n    return (noriginalValue)\n\nreturn ('')",
        "parameter" : [
            {
                "field" : "max_length",
                "description" : "Masukan panjang maksimal",
                "type" : "number"
            },
            {
                "field" : "min_length",
                "description" : "Masukan panjang minimal",
                "type" : "number",
                "value" : "1"
            },
            {
                "field" : "is_required",
                "description" : "Apakah data tidak boleh kosong?",
                "type" : "checkbox",
                "value" : ", Wajib diisi"
            }
        ]
    },
    {
        "name" : "Validator Alfabet, Max Length",
        "expression" : "jython:import re\n\nif value is None:\n    return ('Data Null__is_required____is_required_end__')\n\nif len(value) > __max_length____max_length_end__:\n    return (value)\n\nif not re.findall(r\"^\\D+$\", value):\n    return (value)\n    \nreturn ('')",
        "parameter" : [
            {
                "field" : "max_length",
                "description" : "Masukan panjang maksimal",
                "type" : "number"
            },
            {
                "field" : "min_length",
                "description" : "Masukan panjang minimal",
                "type" : "number",
                "value" : "1"
            },
            {
                "field" : "is_required",
                "description" : "Apakah data tidak boleh kosong?",
                "type" : "checkbox",
                "value" : ", Wajib diisi"
            }
        ]
    },
    {
        "name" : "Validator Tahun, ex 1997, 2012",
        "expression" : "jython:import re\n\nif value is None:\n    return ('Data Null__is_required____is_required_end__')\n\nvalue = int(value)\nvalue = str(value)\n\nif not value.isnumeric():\n    return (value)\n\nif not re.findall(r\"^(19\\d\\d|20\\d\\d)$\", value):\n    return (value)\n\nreturn ('')",
        "parameter" : [
            {
                "field" : "is_required",
                "description" : "Apakah data tidak boleh kosong?",
                "type" : "checkbox",
                "value" : ", Wajib diisi"
            }
        ]
    },
    {
        "name" : "Validator Periode, Year + 1,2,3 ex 20121",
        "expression" : "jython:import re\n\nif value is None:\n    return ('Data Null__is_required____is_required_end__')\n\nvalue = int(value)\nvalue = str(value)\n\nif not re.findall(r\"^(19\\d\\d[1-3]|20\\d\\d[1-3])$\", value):\n    return (value)\n\nreturn ('')",
        "parameter" : [
            {
                "field" : "is_required",
                "description" : "Apakah data tidak boleh kosong?",
                "type" : "checkbox",
                "value" : ", Wajib diisi"
            }
        ]
    },    
    {
        "name" : "Validator Hari, Senin-Minggu / 1-7",
        "expression" : "jython:if value is None:\n    return ('Data Null__is_required____is_required_end__')\n\nconventions = {\n    \"1\" : ['senin', '1'],\n    \"2\" : ['selasa', '2'],\n    \"3\" : ['rabu', '3'],\n    \"4\" : ['kamis', '4'],\n    \"5\" : ['jumat', \"jum'at\", '5'],\n    \"6\" : ['sabtu', '6'],\n    \"7\" : ['minggu', '7'],\n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value)\n\nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
        "parameter" : [
            {
                "field" : "is_required",
                "description" : "Apakah data tidak boleh kosong?",
                "type" : "checkbox",
                "value" : ", Wajib diisi"
            }
        ]
    },
    {
        "name" : "Validator Tanggal, DD/MM/YYYY / YYYY-MM-DD",
        "expression": "import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null__is_required____is_required_end__')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)",
        "parameter" : [
            {
                "field" : "is_required",
                "description" : "Apakah data tidak boleh kosong?",
                "type" : "checkbox",
                "value" : ", Wajib diisi"
            }
        ]
    },
    {
        "name" : "Validator Jam, ex 07:15",
        "expression" : "jython:import re\n\nif value is None:\n    return ('Data Null')\n\nif not re.findall(r\"^([01]?[0-9]|2[0-3]):[0-5][0-9]*$\", value):\n    return (value)\nelse:\n    return ('')",
        "parameter" : [
            {
                "field" : "is_required",
                "description" : "Apakah data tidak boleh kosong?",
                "type" : "checkbox",
                "value" : ", Wajib diisi"
            }
        ]
    },
    {
        "name" : "Validator Agama, 6 Agama resmi indonesia",
        "expression": "jython:if value is None:\n    return ('Data Null__is_required____is_required_end__')\n\nreligions = [\n  (1, 'Islam'),\n  (2, 'Kristen'),\n  (3, 'Katolik'),\n  (3, 'Khatolik'),\n  (4, 'Hindu'),\n  (5, 'Budha'),\n  (6, 'Konghucu'),\n  (6, 'Khonghucu'),\n  (7, 'Lain-lain'),\n]\n\nresult = value\n\nfor id_religion, religion in religions:\n  if (religion.lower() == value.lower()) :\n    result = ''\n    break\n\nreturn (result)",  
        "parameter" : [
            {
                "field" : "is_required",
                "description" : "Apakah data tidak boleh kosong?",
                "type" : "checkbox",
                "value" : ", Wajib diisi"
            }
        ]
    },
    {
        "name" : "Validator Email",
        "expression": "jython:import re\n\nif value is None:\n    return ('Data Null__is_required____is_required_end__')\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"\\b[\\w\\.-]+@[\\w\\.-]+\\.\\w{2,4}\\b\", value):\n    return (value)\nelse:\n    return ('')",
        "parameter" : [
            {
                "field" : "is_required",
                "description" : "Apakah data tidak boleh kosong?",
                "type" : "checkbox",
                "value" : ", Wajib diisi"
            }
        ]
    },
    {
        "name" : "Validator No Telepon",
        "expression" : "jython:import re\n\nif value is None:\n    return ('Data Null__is_required____is_required_end__')\n\nif len(value) == 0 :\n    return ('')\n\nif not re.findall(r\"^[\\d\\+\\s]*$\", value) or len(value) > 20 :\n    return (value)\nelse:\n    return ('')",
        "parameter" : [
            {
                "field" : "is_required",
                "description" : "Apakah data tidak boleh kosong?",
                "type" : "checkbox",
                "value" : ", Wajib diisi"
            }
        ]
    },
    {
        "name" : "Validator Jenis Kelamin",
        "expression": "jython:import re\n\nif value is None:\n    return ('Data Null__is_required____is_required_end__')\n\nconventions = {\n    'L' : ['laki-laki', 'laki', 'l'],\n    'P' : ['perempuan', 'p'],\n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value)\n\nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
        "parameter" : [
            {
                "field" : "is_required",
                "description" : "Apakah data tidak boleh kosong?",
                "type" : "checkbox",
                "value" : ", Wajib diisi"
            }
        ]
    },
    {
        "name" : "Validator Golongan darah",
        "expression": "jython:import re\n\nif value is None:\n    return ('Data Null__is_required____is_required_end__')\n\nconventions = {\n    'A' : ['a'], 'B' : ['b'], 'AB' : ['ab'], 'O' : ['o']\n }\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value)\n\nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
        "parameter" : [
            {
                "field" : "is_required",
                "description" : "Apakah data tidak boleh kosong?",
                "type" : "checkbox",
                "value" : ", Wajib diisi"
            }
        ]
    }

    
];