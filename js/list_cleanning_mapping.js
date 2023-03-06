const listCleanningMapping = [
    {
        "name" : "Tanggal",
        "expression" : "jython:import re\n\nif re.findall(r\"^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)\", value):\n    date = re.split(r\"[a-zA-Z]\", value)\n    return (date[0])\n    \n\nif re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n    date = value.split(\"-\" if \"-\" in value else \"/\")\n    tes = date[2]+\"-\"+date[1]+\"-\"+date[0]\n    return (tes)\n\ndate = re.split(r\"\\W+\", value)\n\nconventions = {\n    \"1\" : ['january', 'januari', 'jan'],\n    \"2\" : ['february', 'februari', 'feb'],\n    \"3\" : ['march', 'maret', 'mar'],\n    \"4\" : ['april', 'apr'],\n    \"5\" : ['may', 'mei'],\n    \"6\" : ['june', 'juni', 'jun'],\n    \"7\" : ['july', 'juli', 'jul'],\n    \"8\" : ['august', 'agustus', 'aug', 'agu'],\n    \"9\" : ['september', 'sep'],\n    \"10\" : ['october', 'oktober', 'oct', 'okt'],\n    \"11\" : ['november', 'nov'],\n    \"12\" : ['december', 'desember', 'dec', 'des'],\n}\n\ndef getMonthNumber(value):\n    result = None\n    \n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getMonthNumber(date[1])\n\nif conventionId != None and len(date) == 3:\n\treturn (date[2]+'-'+conventionId+'-'+date[0])\nelse:\n\treturn ('__default_value____default_value_end__')",
        "parameter" : [
            {
                "field" : "default_value",
                "description" : "masukan default Value",
                "type" : "text",
                "value" : "1945-08-17"
            },
        ]
    },
    {
        "name" : "Jenis Kelamin",
        "expression": "jython:conventions = {\n    \"L\" : ['l', 'laki-laki', 'laki', 'cowok', 'cowo'],\n    \"P\" : ['p', 'perempuan', 'cewek', 'cewe']\n}\n\ndefalultValue = '__default_value____default_value_end__'\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value in variations: \n            result = conventionId\n            break\n\n    return result\n\nif value is None:\n\treturn (defalultValue)\n    \nconventionId = getId(value.lower());\n\nif conventionId != None:\n\treturn (conventionId)\nelse:\n\treturn (defalultValue)",
        "parameter" :  [
            {
                "field" : "default_value",
                "description" : "masukan default Value",
                "type" : "text",
                "value" : "L"
            },
        ]
    },
    {
        "name" : "Agama",
        "expression": "jython:conventions = {\n    \"Islam\" : [\"islam\"],\n    \"Kristen\" : [\"kristen\"],\n    \"Katolik\" : [\"katolik\"],\n    \"Khatolik\" : [\"khatolik\"],\n    \"Hindu\" : [\"hindu\"],\n    \"Budha\" : [\"budha\"],\n    \"Konghucu\" : [\"konghucu\", \"khonghucu\"], \n}\ndefalultValue = '__default_value____default_value_end__'\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value in variations: \n            result = conventionId\n            break\n\n    return result\n\nif value is None:    \n\treturn (defalultValue)\n\nvalue = str(value)\n\nconventionId = getId(value.lower());\n\nif conventionId != None:\n\treturn (conventionId)\nelse:\n\treturn (defalultValue)",
        "parameter" :  [
            {
                "field" : "default_value",
                "description" : "masukan default Value",
                "type" : "text",
                "value" : "Islam"
            },
        ]
    },
    {
        "name" : "Dinamic Mapping",
        "expression": "jython:conventions = __mapping_value____mapping_value_end__ \ndefalultValue = '__default_value____default_value_end__'\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value in variations: \n            result = conventionId\n            break\n\n    return result\n\nif value is None:    \n\treturn (defalultValue)\n\nvalue = str(value)\n\nconventionId = getId(value.lower());\n\nif conventionId != None:\n\treturn (conventionId)\nelse:\n\treturn (defalultValue)",
        "parameter" :  [
            {
                "field" : "mapping_value",
                "description" : "masukan mapping value berupa array",
                "type" : "textarea",
                "value" : "{\n    'id_1' : ['opsi 1'],\n    'id_2' : ['opsi 2 A', 'opsi 2 B']\n}"
            },
            {
                "field" : "default_value",
                "description" : "masukan default Value",
                "type" : "text",
                "value" : "id_1"
            },
        ]
    }
];