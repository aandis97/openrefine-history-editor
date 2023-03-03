const dataHistoryMahasiswa = [
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "NIM",
    "expression": "jython:import re\n\nif not re.findall(r\"^\\w+$\", value):\n    return (value)\n\nreturn ('')",
    "onError": "set-to-blank",
    "newColumnName": "NIM_VALIDATION",
    "columnInsertIndex": 1,
    "description": "Create column NIM_VALIDATION at index 1 based on column NIM using expression jython:import re\n\nif not re.findall(r\"^\\w+$\", value):\n    return (value)\n\nreturn ('')"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "NAMA",
    "expression": "jython:import re\n\nif not re.findall(r\"^\\D+$\", value):\n    return (value)\n\nreturn ('')",
    "onError": "set-to-blank",
    "newColumnName": "NAMA_VALIDATION",
    "columnInsertIndex": 3,
    "description": "Create column NAMA_VALIDATION at index 3 based on column NAMA using expression jython:import re\n\nif not re.findall(r\"^\\D+$\", value):\n    return (value)\n\nreturn ('')"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "PERIODE MASUK",
    "expression": "jython:import re\n\nvalue = int(value)\nvalue = str(value)\n\nif not re.findall(r\"^(19\\d\\d[1-3]|20\\d\\d[1-3])$\", value):\n    return (value)\n\nreturn ('') #valid",
    "onError": "set-to-blank",
    "newColumnName": "PERIODE MASUK_VALIDATION",
    "columnInsertIndex": 5,
    "description": "Create column PERIODE MASUK_VALIDATION at index 5 based on column PERIODE MASUK using expression jython:import re\n\nvalue = int(value)\nvalue = str(value)\n\nif not re.findall(r\"^(19\\d\\d[1-3]|20\\d\\d[1-3])$\", value):\n    return (value)\n\nreturn ('') #valid"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "SISTEM KULIAH",
    "expression": "jython:import re\n\n# Define kemungkinan data master sistem kuliah \nconventions = {\n    \"1\" : ['reguler', 'reguler pagi', 'r'],\n    \"2\" : ['reguler sore'],\n    \"3\" : ['reguler malam'],\n    \"4\" : ['karyawan', 'k'],\n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
    "onError": "set-to-blank",
    "newColumnName": "SISTEM_KULIAH_VALIDATION",
    "columnInsertIndex": 7,
    "description": "Create column SISTEM_KULIAH_VALIDATION at index 7 based on column SISTEM KULIAH using expression jython:import re\n\n# Define kemungkinan data master sistem kuliah \nconventions = {\n    \"1\" : ['reguler', 'reguler pagi', 'r'],\n    \"2\" : ['reguler sore'],\n    \"3\" : ['reguler malam'],\n    \"4\" : ['karyawan', 'k'],\n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "JALUR PENERIMAAN",
    "expression": "jython:import re\n\n# Define kemungkinan data master jalur pendaftaran/penerimaan \nconventions = {\n    \"1\" : ['reguler', 'baru', 'baru/regular', 'regular'], \n    \"2\" : ['beasiswa', 'beasiswa pip'], \n    \"3\" : ['pindahan'], \n    \"4\" : ['mandiri']\n\n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\n# value, variabel from openrefine\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
    "onError": "set-to-blank",
    "newColumnName": "JALUR_PENERIMAAN_VALIDATION",
    "columnInsertIndex": 9,
    "description": "Create column JALUR_PENERIMAAN_VALIDATION at index 9 based on column JALUR PENERIMAAN using expression jython:import re\n\n# Define kemungkinan data master jalur pendaftaran/penerimaan \nconventions = {\n    \"1\" : ['reguler', 'baru', 'baru/regular', 'regular'], \n    \"2\" : ['beasiswa', 'beasiswa pip'], \n    \"3\" : ['pindahan'], \n    \"4\" : ['mandiri']\n\n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\n# value, variabel from openrefine\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "GELOMBANG DAFTAR",
    "expression": "jython:import re\n\nvalue = int(value)\nvalue = str(value)\n\n# Define kemungkinan data master jalur pendaftaran/penerimaan \nconventions = {\n    \"1\" : ['reguler', 'baru', 'baru/regular', 'regular'], \n    \"2\" : ['beasiswa', 'beasiswa pip'], \n    \"3\" : ['pindahan'], \n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\n# value, variabel from openrefine\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
    "onError": "set-to-blank",
    "newColumnName": "GELOMBANG_DAFTAR_VALIDATION",
    "columnInsertIndex": 11,
    "description": "Create column GELOMBANG_DAFTAR_VALIDATION at index 11 based on column GELOMBANG DAFTAR using expression jython:import re\n\nvalue = int(value)\nvalue = str(value)\n\n# Define kemungkinan data master jalur pendaftaran/penerimaan \nconventions = {\n    \"1\" : ['reguler', 'baru', 'baru/regular', 'regular'], \n    \"2\" : ['beasiswa', 'beasiswa pip'], \n    \"3\" : ['pindahan'], \n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\n# value, variabel from openrefine\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "TRANSFER/TIDAK",
    "expression": "jython:import re\n\n# Define kemungkinan data master sistem kuliah \nconventions = {\n    '0' : ['peserta didik baru', 'tidak'], \n    '1' : ['pindahan', 'iya', 'transfer'], \n    '2' : ['alih jenjang'], \n    '3' : ['lintas jalur'], \n    '4' : ['rekognisi pembelajaran lampau (rpl)'], \n    '5' : ['naik kelas'], \n    '6' : ['akselerasi'], \n    '7' : ['mengulang'], \n    '8' : ['lanjutan semester'], \n    '9' : ['pindahan alih bentuk'], \n    '10' : ['putus sekolah'], \n    '11' : ['kelas ekstensi'], \n    '12' : ['course'], \n    '13' : ['fast track'], \n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
    "onError": "set-to-blank",
    "newColumnName": "TRANSFER/TIDAK_VALIDATION",
    "columnInsertIndex": 14,
    "description": "Create column TRANSFER/TIDAK_VALIDATION at index 14 based on column TRANSFER/TIDAK using expression jython:import re\n\n# Define kemungkinan data master sistem kuliah \nconventions = {\n    '0' : ['peserta didik baru', 'tidak'], \n    '1' : ['pindahan', 'iya', 'transfer'], \n    '2' : ['alih jenjang'], \n    '3' : ['lintas jalur'], \n    '4' : ['rekognisi pembelajaran lampau (rpl)'], \n    '5' : ['naik kelas'], \n    '6' : ['akselerasi'], \n    '7' : ['mengulang'], \n    '8' : ['lanjutan semester'], \n    '9' : ['pindahan alih bentuk'], \n    '10' : ['putus sekolah'], \n    '11' : ['kelas ekstensi'], \n    '12' : ['course'], \n    '13' : ['fast track'], \n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "KURIKULUM MAHASISWA",
    "expression": "jython:import re\nvalue = int(value)\nvalue = str(value)\n\nif not value.isnumeric():\n    return (value)\n\nif not re.findall(r\"^(19\\d\\d|20\\d\\d)$\", value):\n    return (value)\n\nreturn ('') #valid",
    "onError": "set-to-blank",
    "newColumnName": "KURIKULUM_MAHASISWA_VALIDATION",
    "columnInsertIndex": 16,
    "description": "Create column KURIKULUM_MAHASISWA_VALIDATION at index 16 based on column KURIKULUM MAHASISWA using expression jython:import re\nvalue = int(value)\nvalue = str(value)\n\nif not value.isnumeric():\n    return (value)\n\nif not re.findall(r\"^(19\\d\\d|20\\d\\d)$\", value):\n    return (value)\n\nreturn ('') #valid"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "AGAMA",
    "expression": "jython:religions = [\n  (1, 'Islam'),\n  (2, 'Kristen'),\n  (3, 'Katolik'),\n  (3, 'Khatolik'),\n  (4, 'Hindu'),\n  (5, 'Budha'),\n  (6, 'Konghucu'),\n  (6, 'Khonghucu'),\n  (7, 'Lain-lain'),\n]\n\nresult = value\n\nfor id_religion, religion in religions:\n  if (religion.lower() == value.lower()) :\n    result = ''\n    break\n\nreturn (result)",
    "onError": "set-to-blank",
    "newColumnName": "AGAMA_VALIDATION",
    "columnInsertIndex": 18,
    "description": "Create column AGAMA_VALIDATION at index 18 based on column AGAMA using expression jython:religions = [\n  (1, 'Islam'),\n  (2, 'Kristen'),\n  (3, 'Katolik'),\n  (3, 'Khatolik'),\n  (4, 'Hindu'),\n  (5, 'Budha'),\n  (6, 'Konghucu'),\n  (6, 'Khonghucu'),\n  (7, 'Lain-lain'),\n]\n\nresult = value\n\nfor id_religion, religion in religions:\n  if (religion.lower() == value.lower()) :\n    result = ''\n    break\n\nreturn (result)"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "WNI/WNA",
    "expression": "jython:import re\n\nvalue = value.lower()\n\nformatCitizenship = re.findall(r\"(wni|wna)\", value)\nif not formatCitizenship:\n\treturn (value)\nelse:\n\treturn (\"\")",
    "onError": "set-to-blank",
    "newColumnName": "WNI/WNA_VALIDATION",
    "columnInsertIndex": 20,
    "description": "Create column WNI/WNA_VALIDATION at index 20 based on column WNI/WNA using expression jython:import re\n\nvalue = value.lower()\n\nformatCitizenship = re.findall(r\"(wni|wna)\", value)\nif not formatCitizenship:\n\treturn (value)\nelse:\n\treturn (\"\")"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "STATUS MAHASISWA",
    "expression": "jython:import re\n\n# Define kemungkinan data master status mahasiswa\nconventions = {\n    '1' : ['aktif', 'a'], \n    '2' : ['cuti', 'c'], \n    '3' : ['lulus', 'l'], \n    '4' : ['drop out', 'd'], \n    '5' : ['keluar', 'k'],\n    '6' : ['m']\n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
    "onError": "set-to-blank",
    "newColumnName": "STATUS_MAHASISWA_VALIDATION",
    "columnInsertIndex": 22,
    "description": "Create column STATUS_MAHASISWA_VALIDATION at index 22 based on column STATUS MAHASISWA using expression jython:import re\n\n# Define kemungkinan data master status mahasiswa\nconventions = {\n    '1' : ['aktif', 'a'], \n    '2' : ['cuti', 'c'], \n    '3' : ['lulus', 'l'], \n    '4' : ['drop out', 'd'], \n    '5' : ['keluar', 'k'],\n    '6' : ['m']\n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "ALAMAT",
    "expression": "jython:if len(value) > 255:\n    return (value)\n\nreturn ('')",
    "onError": "set-to-blank",
    "newColumnName": "ALAMAT_VALIDATION",
    "columnInsertIndex": 24,
    "description": "Create column ALAMAT_VALIDATION at index 24 based on column ALAMAT using expression jython:if len(value) > 255:\n    return (value)\n\nreturn ('')"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "TELEPON",
    "expression": "jython:import re\n\nif value is None:\n    return ('')\n\nif len(value) == 0 :\n    return ('')\n\nif not re.findall(r\"^[\\d\\+\\s]*$\", value) or len(value) > 20 :\n    return (value)\nelse:\n    return ('')",
    "onError": "set-to-blank",
    "newColumnName": "TELEPON_VALIDATION",
    "columnInsertIndex": 26,
    "description": "Create column TELEPON_VALIDATION at index 26 based on column TELEPON using expression jython:import re\n\nif value is None:\n    return ('')\n\nif len(value) == 0 :\n    return ('')\n\nif not re.findall(r\"^[\\d\\+\\s]*$\", value) or len(value) > 20 :\n    return (value)\nelse:\n    return ('')"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "HP",
    "expression": "jython:import re\n\nif value is None:\n    return ('')\n\nif len(value) == 0 :\n    return ('')\n\nif not re.findall(r\"^[\\d\\+\\s]*$\", value) or len(value) > 20 :\n    return (value)\nelse:\n    return ('')",
    "onError": "set-to-blank",
    "newColumnName": "HP_VALIDATION",
    "columnInsertIndex": 28,
    "description": "Create column HP_VALIDATION at index 28 based on column HP using expression jython:import re\n\nif value is None:\n    return ('')\n\nif len(value) == 0 :\n    return ('')\n\nif not re.findall(r\"^[\\d\\+\\s]*$\", value) or len(value) > 20 :\n    return (value)\nelse:\n    return ('')"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "TEMPAT LAHIR",
    "expression": "jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 32:\n    return (value)\n\nreturn ('')",
    "onError": "set-to-blank",
    "newColumnName": "TEMPAT_LAHIR_VALIDATION",
    "columnInsertIndex": 30,
    "description": "Create column TEMPAT_LAHIR_VALIDATION at index 30 based on column TEMPAT LAHIR using expression jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 32:\n    return (value)\n\nreturn ('')"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "TGL. LAHIR",
    "expression": "jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)",
    "onError": "set-to-blank",
    "newColumnName": "TANGGAL_LAHIR_VALIDATION",
    "columnInsertIndex": 32,
    "description": "Create column TANGGAL_LAHIR_VALIDATION at index 32 based on column TGL. LAHIR using expression jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "KODEPOS",
    "expression": "jython:import re\n\nif value is None:\n    return ('')\n    \nvalue = int(value)\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('')\n\nif not re.findall(r\"^\\d{5}$\", value) or len(value) != 5 :\n    return (value)\nelse:\n    return ('')",
    "onError": "set-to-blank",
    "newColumnName": "KODEPOS_VALIDATION",
    "columnInsertIndex": 34,
    "description": "Create column KODEPOS_VALIDATION at index 34 based on column KODEPOS using expression jython:import re\n\nif value is None:\n    return ('')\n    \nvalue = int(value)\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('')\n\nif not re.findall(r\"^\\d{5}$\", value) or len(value) != 5 :\n    return (value)\nelse:\n    return ('')"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "JENIS KELAMIN",
    "expression": "jython:if value != 'L' and value != 'P':\n    return (value)\n\nreturn ('')",
    "onError": "set-to-blank",
    "newColumnName": "JENIS_KELAMIN_VALIDATION",
    "columnInsertIndex": 36,
    "description": "Create column JENIS_KELAMIN_VALIDATION at index 36 based on column JENIS KELAMIN using expression jython:if value != 'L' and value != 'P':\n    return (value)\n\nreturn ('')"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "GOLONGAN DARAH",
    "expression": "jython:import re\n\nif value is None:\n    return ('')\n\nconventions = {\n    \"1\" : ['a'], \n    \"2\" : ['b'], \n    \"3\" : ['ab'], \n    \"4\" : ['o'], \n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\n# return early \nif len(value) == 0:\n    return ('')\n\nconventionId = getId(value)\n\nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
    "onError": "set-to-blank",
    "newColumnName": "GOLONGAN_DARAH_VALIDATION",
    "columnInsertIndex": 38,
    "description": "Create column GOLONGAN_DARAH_VALIDATION at index 38 based on column GOLONGAN DARAH using expression jython:import re\n\nif value is None:\n    return ('')\n\nconventions = {\n    \"1\" : ['a'], \n    \"2\" : ['b'], \n    \"3\" : ['ab'], \n    \"4\" : ['o'], \n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\n# return early \nif len(value) == 0:\n    return ('')\n\nconventionId = getId(value)\n\nif conventionId != None:\n    return ('')\nelse:\n    return (value)"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "EMAIL",
    "expression": "jython:import re\n\nif value is None:\n    return ('Data Null')\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"\\b[\\w\\.-]+@[\\w\\.-]+\\.\\w{2,4}\\b\", value):\n    return (value)\nelse:\n    return ('')",
    "onError": "set-to-blank",
    "newColumnName": "EMAIL_VALIDATION",
    "columnInsertIndex": 40,
    "description": "Create column EMAIL_VALIDATION at index 40 based on column EMAIL using expression jython:import re\n\nif value is None:\n    return ('Data Null')\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"\\b[\\w\\.-]+@[\\w\\.-]+\\.\\w{2,4}\\b\", value):\n    return (value)\nelse:\n    return ('')"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "NO. KTP (NIK)",
    "expression": "jython:import re\n\nif value is None:\n    return ('Data Null')\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{16}$\", value) :\n    return (value)\nelse:\n    return ('')",
    "onError": "set-to-blank",
    "newColumnName": "KTP_NIK_VALIDATION",
    "columnInsertIndex": 42,
    "description": "Create column KTP_NIK_VALIDATION at index 42 based on column NO. KTP (NIK) using expression jython:import re\n\nif value is None:\n    return ('Data Null')\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{16}$\", value) :\n    return (value)\nelse:\n    return ('')"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "NO. KK",
    "expression": "jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{16}$\", value) :\n    return (value)\nelse:\n    return ('')",
    "onError": "set-to-blank",
    "newColumnName": "NO_KK_VALIDATION",
    "columnInsertIndex": 44,
    "description": "Create column NO_KK_VALIDATION at index 44 based on column NO. KK using expression jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{16}$\", value) :\n    return (value)\nelse:\n    return ('')"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "RT",
    "expression": "jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = int(value)\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{1,2}$\", value):\n    return (value)\n\nreturn ('')",
    "onError": "set-to-blank",
    "newColumnName": "RT_VALIDATION",
    "columnInsertIndex": 46,
    "description": "Create column RT_VALIDATION at index 46 based on column RT using expression jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = int(value)\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{1,2}$\", value):\n    return (value)\n\nreturn ('')"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "RW",
    "expression": "jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = int(value)\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{1,2}$\", value):\n    return (value)\n\nreturn ('')",
    "onError": "set-to-blank",
    "newColumnName": "RW_VALIDATION",
    "columnInsertIndex": 48,
    "description": "Create column RW_VALIDATION at index 48 based on column RW using expression jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = int(value)\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{1,2}$\", value):\n    return (value)\n\nreturn ('')"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "DUSUN",
    "expression": "jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 60:\n    return (value)\n\nreturn ('')",
    "onError": "set-to-blank",
    "newColumnName": "DUSUN_VALIDATION",
    "columnInsertIndex": 50,
    "description": "Create column DUSUN_VALIDATION at index 50 based on column DUSUN using expression jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 60:\n    return (value)\n\nreturn ('')"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "KELURAHAN",
    "expression": "jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 60:\n    return (value)\n\nreturn ('')",
    "onError": "set-to-blank",
    "newColumnName": "KELURAHAN_VALIDATION",
    "columnInsertIndex": 52,
    "description": "Create column KELURAHAN_VALIDATION at index 52 based on column KELURAHAN using expression jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 60:\n    return (value)\n\nreturn ('')"
  }
]

// [
//   {
//     "op": "core/column-addition",
//     "engineConfig": {
//       "facets": [],
//       "mode": "record-based"
//     },
//     "baseColumnName": "KODEUNIT",
//     "expression": "jython:if value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif not value.isnumeric() or len(value) > 10:\n    return (value)\n\nreturn ('')",
//     "onError": "set-to-blank",
//     "newColumnName": "KODEUNIT_VALIDATION",
//     "columnInsertIndex": 1,
//     "description": "Create column KODEUNIT_VALIDATION at index 1 based on column KODEUNIT using expression jython:if value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif not value.isnumeric() or len(value) > 10:\n    return (value)\n\nreturn ('')"
//   },
//   {
//     "op": "core/column-addition",
//     "engineConfig": {
//       "facets": [],
//       "mode": "record-based"
//     },
//     "baseColumnName": "PARENT UNIT",
//     "expression": "jython:if value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif not value.isnumeric() or len(value) > 10:\n    return (value)\n\nreturn ('')",
//     "onError": "set-to-blank",
//     "newColumnName": "PARENT_UNIT_VALIDATION",
//     "columnInsertIndex": 3,
//     "description": "Create column PARENT_UNIT_VALIDATION at index 3 based on column PARENT UNIT using expression jython:if value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif not value.isnumeric() or len(value) > 10:\n    return (value)\n\nreturn ('')"
//   },
//   {
//     "op": "core/column-addition",
//     "engineConfig": {
//       "facets": [],
//       "mode": "record-based"
//     },
//     "baseColumnName": "NAMA UNIT",
//     "expression": "jython:if value is None:\n    return ('Data Null')\n    \nif len(value) > 100:\n    return (value)\n\nreturn ('')",
//     "onError": "set-to-blank",
//     "newColumnName": "NAMA_UNIT_VALIDATION",
//     "columnInsertIndex": 5,
//     "description": "Create column NAMA_UNIT_VALIDATION at index 5 based on column NAMA UNIT using expression jython:if value is None:\n    return ('Data Null')\n    \nif len(value) > 100:\n    return (value)\n\nreturn ('')"
//   },
//   {
//     "op": "core/column-addition",
//     "engineConfig": {
//       "facets": [],
//       "mode": "record-based"
//     },
//     "baseColumnName": "NAMA SINGKAT",
//     "expression": "jython:if value is None:\n    return ('Data Null')\n    \nif len(value) > 50:\n    return (value)\n\nreturn ('')",
//     "onError": "set-to-blank",
//     "newColumnName": "NAMA_SINGKAT_VALIDATION",
//     "columnInsertIndex": 7,
//     "description": "Create column NAMA_SINGKAT_VALIDATION at index 7 based on column NAMA SINGKAT using expression jython:if value is None:\n    return ('Data Null')\n    \nif len(value) > 50:\n    return (value)\n\nreturn ('')"
//   },
//   {
//     "op": "core/column-addition",
//     "engineConfig": {
//       "facets": [],
//       "mode": "record-based"
//     },
//     "baseColumnName": "JENJANG PENDIDIKAN",
//     "expression": "jython:if value is None:\n    return ('Data Null')\n    \nif len(value) > 20:\n    return (value)\n\nreturn ('')",
//     "onError": "set-to-blank",
//     "newColumnName": "JENJANG_PENDIDIKAN_VALIDATION",
//     "columnInsertIndex": 9,
//     "description": "Create column JENJANG_PENDIDIKAN_VALIDATION at index 9 based on column JENJANG PENDIDIKAN using expression jython:if value is None:\n    return ('Data Null')\n    \nif len(value) > 20:\n    return (value)\n\nreturn ('')"
//   },
//   {
//     "op": "core/column-addition",
//     "engineConfig": {
//       "facets": [],
//       "mode": "record-based"
//     },
//     "baseColumnName": "JENIS UNIT",
//     "expression": "jython:if value is None:\n    return ('Data Null')\n    \nimport re\n \nconventions = {\n    \"u\" : ['universitas', 'u'],\n    \"f\" : ['fakultas', 'f'],\n    \"j\" : ['jurusan', 'j'],\n    \"p\" : ['prodi', 'p'],\n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value.lower())\n \nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
//     "onError": "set-to-blank",
//     "newColumnName": "JENIS_UNIT_VALIDATION",
//     "columnInsertIndex": 11,
//     "description": "Create column JENIS_UNIT_VALIDATION at index 11 based on column JENIS UNIT using expression jython:if value is None:\n    return ('Data Null')\n    \nimport re\n \nconventions = {\n    \"u\" : ['universitas', 'u'],\n    \"f\" : ['fakultas', 'f'],\n    \"j\" : ['jurusan', 'j'],\n    \"p\" : ['prodi', 'p'],\n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value.lower())\n \nif conventionId != None:\n    return ('')\nelse:\n    return (value)"
//   },
//   {
//     "op": "core/column-addition",
//     "engineConfig": {
//       "facets": [],
//       "mode": "record-based"
//     },
//     "baseColumnName": "PERIODE MULAI BERDIRI",
//     "expression": "jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = int(value)\nvalue = str(value)\n\nif not value.isnumeric():\n    print (value)\n\nif not re.findall(r\"^(19\\d\\d[1-3]|20\\d\\d[1-3])$\", value):\n    print (value)\n\nprint ('')",
//     "onError": "set-to-blank",
//     "newColumnName": "PERIODE_MULAI_BERDIRI_VALIDATION",
//     "columnInsertIndex": 13,
//     "description": "Create column PERIODE_MULAI_BERDIRI_VALIDATION at index 13 based on column PERIODE MULAI BERDIRI using expression jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = int(value)\nvalue = str(value)\n\nif not value.isnumeric():\n    print (value)\n\nif not re.findall(r\"^(19\\d\\d[1-3]|20\\d\\d[1-3])$\", value):\n    print (value)\n\nprint ('')"
//   },
//   {
//     "op": "core/column-addition",
//     "engineConfig": {
//       "facets": [],
//       "mode": "record-based"
//     },
//     "baseColumnName": "TANGGAL BERDIRI",
//     "expression": "jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)",
//     "onError": "set-to-blank",
//     "newColumnName": "TANGGAL_BERDIRI_VALIDATION",
//     "columnInsertIndex": 15,
//     "description": "Create column TANGGAL_BERDIRI_VALIDATION at index 15 based on column TANGGAL BERDIRI using expression jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)"
//   },
//   {
//     "op": "core/column-addition",
//     "engineConfig": {
//       "facets": [],
//       "mode": "record-based"
//     },
//     "baseColumnName": "TANGGAL SK PENDIRIAN",
//     "expression": "jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)",
//     "onError": "set-to-blank",
//     "newColumnName": "TANGGAL_SK_PENDIRIAN_VALIDATION",
//     "columnInsertIndex": 17,
//     "description": "Create column TANGGAL_SK_PENDIRIAN_VALIDATION at index 17 based on column TANGGAL SK PENDIRIAN using expression jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)"
//   },
//   {
//     "op": "core/column-addition",
//     "engineConfig": {
//       "facets": [],
//       "mode": "record-based"
//     },
//     "baseColumnName": "ALAMAT",
//     "expression": "jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 250:\n    return (value)\n\nreturn ('')",
//     "onError": "set-to-blank",
//     "newColumnName": "ALAMAT_VALIDATION",
//     "columnInsertIndex": 19,
//     "description": "Create column ALAMAT_VALIDATION at index 19 based on column ALAMAT using expression jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 250:\n    return (value)\n\nreturn ('')"
//   },
//   {
//     "op": "core/column-addition",
//     "engineConfig": {
//       "facets": [],
//       "mode": "record-based"
//     },
//     "baseColumnName": "TELP",
//     "expression": "jython:import re\n\nif value is None:\n    return ('Data Null')\n\nif not re.findall(r\"^[\\d\\+\\s]*$\", value) or len(value) > 20 :\n    return (value)\nelse:\n    return ('')",
//     "onError": "set-to-blank",
//     "newColumnName": "TELP_VALIDATION",
//     "columnInsertIndex": 21,
//     "description": "Create column TELP_VALIDATION at index 21 based on column TELP using expression jython:import re\n\nif value is None:\n    return ('Data Null')\n\nif not re.findall(r\"^[\\d\\+\\s]*$\", value) or len(value) > 20 :\n    return (value)\nelse:\n    return ('')"
//   },
//   {
//     "op": "core/column-addition",
//     "engineConfig": {
//       "facets": [],
//       "mode": "record-based"
//     },
//     "baseColumnName": "TANGGAL AKREDITASI",
//     "expression": "jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)",
//     "onError": "set-to-blank",
//     "newColumnName": "TANGGAL_AKREDITAS",
//     "columnInsertIndex": 23,
//     "description": "Create column TANGGAL_AKREDITAS at index 23 based on column TANGGAL AKREDITASI using expression jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)"
//   },
//   {
//     "op": "core/column-addition",
//     "engineConfig": {
//       "facets": [],
//       "mode": "record-based"
//     },
//     "baseColumnName": "AKREDITASI",
//     "expression": "jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 50:\n    return (value)\n\nreturn ('')",
//     "onError": "set-to-blank",
//     "newColumnName": "AKREDITASI_VALIDATION",
//     "columnInsertIndex": 25,
//     "description": "Create column AKREDITASI_VALIDATION at index 25 based on column AKREDITASI using expression jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 50:\n    return (value)\n\nreturn ('')"
//   },
//   {
//     "op": "core/column-addition",
//     "engineConfig": {
//       "facets": [],
//       "mode": "record-based"
//     },
//     "baseColumnName": "SK AKREDITASI",
//     "expression": "jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 100:\n    return (value)\n\nreturn ('')",
//     "onError": "set-to-blank",
//     "newColumnName": "SK_AKREDITASI_VALIDATION",
//     "columnInsertIndex": 27,
//     "description": "Create column SK_AKREDITASI_VALIDATION at index 27 based on column SK AKREDITASI using expression jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 100:\n    return (value)\n\nreturn ('')"
//   },
//   {
//     "op": "core/column-addition",
//     "engineConfig": {
//       "facets": [],
//       "mode": "record-based"
//     },
//     "baseColumnName": "GELAR PANJANG",
//     "expression": "jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 100:\n    return (value)\n\nreturn ('')",
//     "onError": "set-to-blank",
//     "newColumnName": "GELAR_PANJANG_VALIDATION",
//     "columnInsertIndex": 29,
//     "description": "Create column GELAR_PANJANG_VALIDATION at index 29 based on column GELAR PANJANG using expression jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 100:\n    return (value)\n\nreturn ('')"
//   },
//   {
//     "op": "core/column-addition",
//     "engineConfig": {
//       "facets": [],
//       "mode": "record-based"
//     },
//     "baseColumnName": "GELAR PENDEK",
//     "expression": "jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 20:\n    return (value)\n\nreturn ('')",
//     "onError": "set-to-blank",
//     "newColumnName": "GELAR_PENDEK_VALIDATION",
//     "columnInsertIndex": 31,
//     "description": "Create column GELAR_PENDEK_VALIDATION at index 31 based on column GELAR PENDEK using expression jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 20:\n    return (value)\n\nreturn ('')"
//   }
// ]

// // [
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "NAMA SINGKAT",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column NAMA SINGKAT using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "TANGGAL SK PENDIRIAN",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column TANGGAL SK PENDIRIAN using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "PERIODE MULAI BERDIRI",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column PERIODE MULAI BERDIRI using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "JENIS UNIT",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column JENIS UNIT using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "NAMA UNIT",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column NAMA UNIT using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "KODEUNIT",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column KODEUNIT using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "PARENT UNIT",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column PARENT UNIT using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "AKREDITASI",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column AKREDITASI using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "TELP",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column TELP using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "JENJANG PENDIDIKAN",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column JENJANG PENDIDIKAN using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "ALAMAT",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column ALAMAT using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "TANGGAL BERDIRI",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column TANGGAL BERDIRI using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "GELAR PENDEK",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column GELAR PENDEK using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "GELAR PANJANG",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column GELAR PANJANG using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "TANGGAL AKREDITASI",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column TANGGAL AKREDITASI using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "SK AKREDITASI",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column SK AKREDITASI using expression value.trim()"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "KODEUNIT",
// //     "expression": "jython:if value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif not value.isnumeric() or len(value) > 10:\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "KODEUNIT_VALIDATION",
// //     "columnInsertIndex": 1,
// //     "description": "Create column KODEUNIT_VALIDATION at index 1 based on column KODEUNIT using expression jython:if value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif not value.isnumeric() or len(value) > 10:\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "PARENT UNIT",
// //     "expression": "jython:if value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif not value.isnumeric() or len(value) > 10:\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "PARENT_UNIT_VALIDATION",
// //     "columnInsertIndex": 3,
// //     "description": "Create column PARENT_UNIT_VALIDATION at index 3 based on column PARENT UNIT using expression jython:if value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif not value.isnumeric() or len(value) > 10:\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "NAMA UNIT",
// //     "expression": "jython:if value is None:\n    return ('Data Null')\n    \nif len(value) > 100:\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "NAMA_UNIT_VALIDATION",
// //     "columnInsertIndex": 5,
// //     "description": "Create column NAMA_UNIT_VALIDATION at index 5 based on column NAMA UNIT using expression jython:if value is None:\n    return ('Data Null')\n    \nif len(value) > 100:\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "NAMA SINGKAT",
// //     "expression": "jython:if value is None:\n    return ('Data Null')\n    \nif len(value) > 50:\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "NAMA_SINGKAT_VALIDATION",
// //     "columnInsertIndex": 7,
// //     "description": "Create column NAMA_SINGKAT_VALIDATION at index 7 based on column NAMA SINGKAT using expression jython:if value is None:\n    return ('Data Null')\n    \nif len(value) > 50:\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "JENJANG PENDIDIKAN",
// //     "expression": "jython:if value is None:\n    return ('Data Null')\n    \nif len(value) > 20:\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "JENJANG_PENDIDIKAN_VALIDATION",
// //     "columnInsertIndex": 9,
// //     "description": "Create column JENJANG_PENDIDIKAN_VALIDATION at index 9 based on column JENJANG PENDIDIKAN using expression jython:if value is None:\n    return ('Data Null')\n    \nif len(value) > 20:\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "JENIS UNIT",
// //     "expression": "jython:if value is None:\n    return ('Data Null')\n    \nimport re\n \nconventions = {\n    \"u\" : ['universitas', 'u'],\n    \"f\" : ['fakultas', 'f'],\n    \"j\" : ['jurusan', 'j'],\n    \"p\" : ['prodi', 'p'],\n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value.lower())\n \nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
// //     "onError": "set-to-blank",
// //     "newColumnName": "JENIS_UNIT_VALIDATION",
// //     "columnInsertIndex": 11,
// //     "description": "Create column JENIS_UNIT_VALIDATION at index 11 based on column JENIS UNIT using expression jython:if value is None:\n    return ('Data Null')\n    \nimport re\n \nconventions = {\n    \"u\" : ['universitas', 'u'],\n    \"f\" : ['fakultas', 'f'],\n    \"j\" : ['jurusan', 'j'],\n    \"p\" : ['prodi', 'p'],\n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value.lower())\n \nif conventionId != None:\n    return ('')\nelse:\n    return (value)"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "PERIODE MULAI BERDIRI",
// //     "expression": "jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = int(value)\nvalue = str(value)\n\nif not value.isnumeric():\n    print (value)\n\nif not re.findall(r\"^(19\\d\\d[1-3]|20\\d\\d[1-3])$\", value):\n    print (value)\n\nprint ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "PERIODE_MULAI_BERDIRI_VALIDATION",
// //     "columnInsertIndex": 13,
// //     "description": "Create column PERIODE_MULAI_BERDIRI_VALIDATION at index 13 based on column PERIODE MULAI BERDIRI using expression jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = int(value)\nvalue = str(value)\n\nif not value.isnumeric():\n    print (value)\n\nif not re.findall(r\"^(19\\d\\d[1-3]|20\\d\\d[1-3])$\", value):\n    print (value)\n\nprint ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "TANGGAL BERDIRI",
// //     "expression": "jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)",
// //     "onError": "set-to-blank",
// //     "newColumnName": "TANGGAL_BERDIRI_VALIDATION",
// //     "columnInsertIndex": 15,
// //     "description": "Create column TANGGAL_BERDIRI_VALIDATION at index 15 based on column TANGGAL BERDIRI using expression jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "TANGGAL SK PENDIRIAN",
// //     "expression": "jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)",
// //     "onError": "set-to-blank",
// //     "newColumnName": "TANGGAL_SK_PENDIRIAN_VALIDATION",
// //     "columnInsertIndex": 17,
// //     "description": "Create column TANGGAL_SK_PENDIRIAN_VALIDATION at index 17 based on column TANGGAL SK PENDIRIAN using expression jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "ALAMAT",
// //     "expression": "jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 250:\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "ALAMAT_VALIDATION",
// //     "columnInsertIndex": 19,
// //     "description": "Create column ALAMAT_VALIDATION at index 19 based on column ALAMAT using expression jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 250:\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "TELP",
// //     "expression": "jython:import re\n\nif value is None:\n    return ('Data Null')\n\nif not re.findall(r\"^[\\d\\+\\s]*$\", value) or len(value) > 20 :\n    return (value)\nelse:\n    return ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "TELP_VALIDATION",
// //     "columnInsertIndex": 21,
// //     "description": "Create column TELP_VALIDATION at index 21 based on column TELP using expression jython:import re\n\nif value is None:\n    return ('Data Null')\n\nif not re.findall(r\"^[\\d\\+\\s]*$\", value) or len(value) > 20 :\n    return (value)\nelse:\n    return ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "TANGGAL AKREDITASI",
// //     "expression": "jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)",
// //     "onError": "set-to-blank",
// //     "newColumnName": "TANGGAL_AKREDITAS",
// //     "columnInsertIndex": 23,
// //     "description": "Create column TANGGAL_AKREDITAS at index 23 based on column TANGGAL AKREDITASI using expression jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "AKREDITASI",
// //     "expression": "jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 50:\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "AKREDITASI_VALIDATION",
// //     "columnInsertIndex": 25,
// //     "description": "Create column AKREDITASI_VALIDATION at index 25 based on column AKREDITASI using expression jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 50:\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "SK AKREDITASI",
// //     "expression": "jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 100:\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "SK_AKREDITASI_VALIDATION",
// //     "columnInsertIndex": 27,
// //     "description": "Create column SK_AKREDITASI_VALIDATION at index 27 based on column SK AKREDITASI using expression jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 100:\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "GELAR PANJANG",
// //     "expression": "jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 100:\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "GELAR_PANJANG_VALIDATION",
// //     "columnInsertIndex": 29,
// //     "description": "Create column GELAR_PANJANG_VALIDATION at index 29 based on column GELAR PANJANG using expression jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 100:\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition-by-fetching-urls",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "JENJANG PENDIDIKAN",
// //     "urlExpression": "grel:'http://localhost:8000/?value='+value",
// //     "onError": "set-to-blank",
// //     "newColumnName": "Testing",
// //     "columnInsertIndex": 9,
// //     "delay": 5000,
// //     "cacheResponses": true,
// //     "httpHeadersJson": [
// //       {
// //         "name": "authorization",
// //         "value": ""
// //       },
// //       {
// //         "name": "user-agent",
// //         "value": "OpenRefine 3.6.2 [579a6f7]"
// //       },
// //       {
// //         "name": "accept",
// //         "value": "*/*"
// //       }
// //     ],
// //     "description": "Create column Testing at index 9 by fetching URLs based on column JENJANG PENDIDIKAN using expression grel:'http://localhost:8000/?value='+value"
// //   },
// //   {
// //     "op": "core/column-addition-by-fetching-urls",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "NAMA SINGKAT",
// //     "urlExpression": "grel:'http://localhost:8000/?value='+value",
// //     "onError": "set-to-blank",
// //     "newColumnName": "Teting 123123",
// //     "columnInsertIndex": 7,
// //     "delay": 5000,
// //     "cacheResponses": true,
// //     "httpHeadersJson": [
// //       {
// //         "name": "authorization",
// //         "value": ""
// //       },
// //       {
// //         "name": "user-agent",
// //         "value": "OpenRefine 3.6.2 [579a6f7]"
// //       },
// //       {
// //         "name": "accept",
// //         "value": "*/*"
// //       }
// //     ],
// //     "description": "Create column Teting 123123 at index 7 by fetching URLs based on column NAMA SINGKAT using expression grel:'http://localhost:8000/?value='+value"
// //   },
// //   {
// //     "op": "core/column-addition-by-fetching-urls",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "JENJANG PENDIDIKAN",
// //     "urlExpression": "grel:'http://localhost:8000/?value='+value",
// //     "onError": "set-to-blank",
// //     "newColumnName": "Tes Jenjang",
// //     "columnInsertIndex": 10,
// //     "delay": 5000,
// //     "cacheResponses": true,
// //     "httpHeadersJson": [
// //       {
// //         "name": "authorization",
// //         "value": ""
// //       },
// //       {
// //         "name": "user-agent",
// //         "value": "OpenRefine 3.6.2 [579a6f7]"
// //       },
// //       {
// //         "name": "accept",
// //         "value": "*/*"
// //       }
// //     ],
// //     "description": "Create column Tes Jenjang at index 10 by fetching URLs based on column JENJANG PENDIDIKAN using expression grel:'http://localhost:8000/?value='+value"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "KODEUNIT",
// //     "expression": "jython:import urllib2\nimport json\n\ndef get_response_json_object(url, auth_token):\n    req=urllib2.Request(url, None, {\"Authorization\": \"Bearer %s\" %auth_token})\n    response=urllib2.urlopen(req)\n    html=response.read()\n    json_obj=json.loads(html)\n    return json_obj\n\nreturn get_response_json_object('https://hangtuah.siakadcloud.com/live/kl_perguruantinggi/001001', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaWQiOiJrYXJpcmxpbmsiLCJpYXQiOjE2Nzc1NTUyMTksImV4cCI6MTY3NzU1ODgxOX0.bzmr40QZRH0OozsCZw6Ld0X5hrXdsuBtHTpkB-o8Mus')",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column KODEUNIT using expression jython:import urllib2\nimport json\n\ndef get_response_json_object(url, auth_token):\n    req=urllib2.Request(url, None, {\"Authorization\": \"Bearer %s\" %auth_token})\n    response=urllib2.urlopen(req)\n    html=response.read()\n    json_obj=json.loads(html)\n    return json_obj\n\nreturn get_response_json_object('https://hangtuah.siakadcloud.com/live/kl_perguruantinggi/001001', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaWQiOiJrYXJpcmxpbmsiLCJpYXQiOjE2Nzc1NTUyMTksImV4cCI6MTY3NzU1ODgxOX0.bzmr40QZRH0OozsCZw6Ld0X5hrXdsuBtHTpkB-o8Mus')"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "columnName": "KODEUNIT",
// //     "expression": "jython:import urllib2\nimport json\n\ndef get_response_json_object(url, auth_token):\n    req=urllib2.Request(url, None, {\"Authorization\": \"Bearer %s\" %auth_token})\n    response=urllib2.urlopen(req)\n    html=response.read()\n    json_obj=json.loads(html)\n    return json_obj\n\nreturn get_response_json_object('https://hangtuah.siakadcloud.com/live/kl_perguruantinggi/001001', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaWQiOiJrYXJpcmxpbmsiLCJpYXQiOjE2Nzc1NTUyMTksImV4cCI6MTY3NzU1ODgxOX0.bzmr40QZRH0OozsCZw6Ld0X5hrXdsuBtHTpkB-o8Mus')",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column KODEUNIT using expression jython:import urllib2\nimport json\n\ndef get_response_json_object(url, auth_token):\n    req=urllib2.Request(url, None, {\"Authorization\": \"Bearer %s\" %auth_token})\n    response=urllib2.urlopen(req)\n    html=response.read()\n    json_obj=json.loads(html)\n    return json_obj\n\nreturn get_response_json_object('https://hangtuah.siakadcloud.com/live/kl_perguruantinggi/001001', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaWQiOiJrYXJpcmxpbmsiLCJpYXQiOjE2Nzc1NTUyMTksImV4cCI6MTY3NzU1ODgxOX0.bzmr40QZRH0OozsCZw6Ld0X5hrXdsuBtHTpkB-o8Mus')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "record-based"
// //     },
// //     "baseColumnName": "KODEUNIT",
// //     "expression": "jython:import urllib2\nimport json\n\ndef get_response_json_object(url, auth_token):\n    req=urllib2.Request(url, None, {\"Authorization\": \"Bearer %s\" %auth_token})\n    response=urllib2.urlopen(req)\n    html=response.read()\n    json_obj=json.loads(html)\n    return json_obj\n\nresponse = get_response_json_object('https://hangtuah.siakadcloud.com/live/kl_perguruantinggi/001001', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaWQiOiJrYXJpcmxpbmsiLCJpYXQiOjE2Nzc1NTUyMTksImV4cCI6MTY3NzU1ODgxOX0.bzmr40QZRH0OozsCZw6Ld0X5hrXdsuBtHTpkB-o8Mus')\n\nif response is None:\n  return ('Data Null')\nelse:\n  return ('tes')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "tes",
// //     "columnInsertIndex": 1,
// //     "description": "Create column tes at index 1 based on column KODEUNIT using expression jython:import urllib2\nimport json\n\ndef get_response_json_object(url, auth_token):\n    req=urllib2.Request(url, None, {\"Authorization\": \"Bearer %s\" %auth_token})\n    response=urllib2.urlopen(req)\n    html=response.read()\n    json_obj=json.loads(html)\n    return json_obj\n\nresponse = get_response_json_object('https://hangtuah.siakadcloud.com/live/kl_perguruantinggi/001001', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaWQiOiJrYXJpcmxpbmsiLCJpYXQiOjE2Nzc1NTUyMTksImV4cCI6MTY3NzU1ODgxOX0.bzmr40QZRH0OozsCZw6Ld0X5hrXdsuBtHTpkB-o8Mus')\n\nif response is None:\n  return ('Data Null')\nelse:\n  return ('tes')"
// //   }
// // ];

// // [
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "GELOMBANG DAFTAR",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column GELOMBANG DAFTAR using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "PERIODE MASUK",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column PERIODE MASUK using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "JALUR PENERIMAAN",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column JALUR PENERIMAAN using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "NAMA",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column NAMA using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "SISTEM KULIAH",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column SISTEM KULIAH using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "NIM",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column NIM using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "WNI/WNA",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column WNI/WNA using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "AGAMA",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column AGAMA using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "KURIKULUM MAHASISWA",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column KURIKULUM MAHASISWA using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "TRANSFER/TIDAK",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column TRANSFER/TIDAK using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "PRODI",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column PRODI using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "TEMPAT LAHIR",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column TEMPAT LAHIR using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "HP",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column HP using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "ALAMAT",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column ALAMAT using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "STATUS MAHASISWA",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column STATUS MAHASISWA using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "TELEPON",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column TELEPON using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "EMAIL",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column EMAIL using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "GOLONGAN DARAH",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column GOLONGAN DARAH using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "JENIS KELAMIN",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column JENIS KELAMIN using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "KODEPOS",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column KODEPOS using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "TGL. LAHIR",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column TGL. LAHIR using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "DUSUN",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column DUSUN using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "RW",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column RW using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "RT",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column RT using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "NO. KK",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column NO. KK using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "NO. KTP (NIK)",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column NO. KTP (NIK) using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "ALAMAT AYAH",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column ALAMAT AYAH using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "NIK AYAH",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column NIK AYAH using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "NAMA AYAH",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column NAMA AYAH using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "TGL. DAFTAR",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column TGL. DAFTAR using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "KELURAHAN",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column KELURAHAN using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "ALAMAT IBU",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column ALAMAT IBU using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "NIK IBU",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column NIK IBU using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "NAMA IBU",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column NAMA IBU using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "TGL. LAHIR AYAH",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column TGL. LAHIR AYAH using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "TELP. AYAH",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column TELP. AYAH using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "TELP. WALI",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column TELP. WALI using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "ALAMAT WALI",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column ALAMAT WALI using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "NAMA WALI",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column NAMA WALI using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "TGL. LAHIR IBU",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column TGL. LAHIR IBU using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "TELP IBU",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column TELP IBU using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "NISN",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column NISN using expression value.trim()"
// //   },
// //   {
// //     "op": "core/text-transform",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "columnName": "TGL. LAHIR WALI",
// //     "expression": "value.trim()",
// //     "onError": "keep-original",
// //     "repeat": false,
// //     "repeatCount": 10,
// //     "description": "Text transform on cells in column TGL. LAHIR WALI using expression value.trim()"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "NIM",
// //     "expression": "jython:import re\n\nif not re.findall(r\"^\\w+$\", value):\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "NIM_VALIDATION",
// //     "columnInsertIndex": 1,
// //     "description": "Create column NIM_VALIDATION at index 1 based on column NIM using expression jython:import re\n\nif not re.findall(r\"^\\w+$\", value):\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "NAMA",
// //     "expression": "jython:import re\n\nif not re.findall(r\"^\\D+$\", value):\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "NAMA_VALIDATION",
// //     "columnInsertIndex": 3,
// //     "description": "Create column NAMA_VALIDATION at index 3 based on column NAMA using expression jython:import re\n\nif not re.findall(r\"^\\D+$\", value):\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "PERIODE MASUK",
// //     "expression": "jython:import re\n\nvalue = int(value)\nvalue = str(value)\n\nif not re.findall(r\"^(19\\d\\d[1-3]|20\\d\\d[1-3])$\", value):\n    return (value)\n\nreturn ('') #valid",
// //     "onError": "set-to-blank",
// //     "newColumnName": "PERIODE MASUK_VALIDATION",
// //     "columnInsertIndex": 5,
// //     "description": "Create column PERIODE MASUK_VALIDATION at index 5 based on column PERIODE MASUK using expression jython:import re\n\nvalue = int(value)\nvalue = str(value)\n\nif not re.findall(r\"^(19\\d\\d[1-3]|20\\d\\d[1-3])$\", value):\n    return (value)\n\nreturn ('') #valid"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "SISTEM KULIAH",
// //     "expression": "jython:import re\n\n# Define kemungkinan data master sistem kuliah \nconventions = {\n    \"1\" : ['reguler', 'reguler pagi'],\n    \"2\" : ['reguler sore'],\n    \"3\" : ['reguler malam'],\n    \"4\" : ['karyawan'],\n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
// //     "onError": "set-to-blank",
// //     "newColumnName": "SISTEM_KULIAH_VALIDATION",
// //     "columnInsertIndex": 7,
// //     "description": "Create column SISTEM_KULIAH_VALIDATION at index 7 based on column SISTEM KULIAH using expression jython:import re\n\n# Define kemungkinan data master sistem kuliah \nconventions = {\n    \"1\" : ['reguler', 'reguler pagi'],\n    \"2\" : ['reguler sore'],\n    \"3\" : ['reguler malam'],\n    \"4\" : ['karyawan'],\n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "JALUR PENERIMAAN",
// //     "expression": "jython:import re\n\n# Define kemungkinan data master jalur pendaftaran/penerimaan \nconventions = {\n    \"1\" : ['reguler', 'baru', 'baru/regular', 'regular'], \n    \"2\" : ['beasiswa', 'beasiswa pip'], \n    \"3\" : ['pindahan'], \n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\n# value, variabel from openrefine\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
// //     "onError": "set-to-blank",
// //     "newColumnName": "JALUR_PENERIMAAN_VALIDATION",
// //     "columnInsertIndex": 9,
// //     "description": "Create column JALUR_PENERIMAAN_VALIDATION at index 9 based on column JALUR PENERIMAAN using expression jython:import re\n\n# Define kemungkinan data master jalur pendaftaran/penerimaan \nconventions = {\n    \"1\" : ['reguler', 'baru', 'baru/regular', 'regular'], \n    \"2\" : ['beasiswa', 'beasiswa pip'], \n    \"3\" : ['pindahan'], \n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\n# value, variabel from openrefine\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "GELOMBANG DAFTAR",
// //     "expression": "jython:import re\n\nvalue = int(value)\nvalue = str(value)\n\n# Define kemungkinan data master jalur pendaftaran/penerimaan \nconventions = {\n    \"1\" : ['reguler', 'baru', 'baru/regular', 'regular'], \n    \"2\" : ['beasiswa', 'beasiswa pip'], \n    \"3\" : ['pindahan'], \n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\n# value, variabel from openrefine\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
// //     "onError": "set-to-blank",
// //     "newColumnName": "GELOMBANG_DAFTAR_VALIDATION",
// //     "columnInsertIndex": 11,
// //     "description": "Create column GELOMBANG_DAFTAR_VALIDATION at index 11 based on column GELOMBANG DAFTAR using expression jython:import re\n\nvalue = int(value)\nvalue = str(value)\n\n# Define kemungkinan data master jalur pendaftaran/penerimaan \nconventions = {\n    \"1\" : ['reguler', 'baru', 'baru/regular', 'regular'], \n    \"2\" : ['beasiswa', 'beasiswa pip'], \n    \"3\" : ['pindahan'], \n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\n# value, variabel from openrefine\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "TRANSFER/TIDAK",
// //     "expression": "jython:import re\n\n# Define kemungkinan data master sistem kuliah \nconventions = {\n    '0' : ['peserta didik baru', 'tidak'], \n    '1' : ['pindahan', 'iya', 'transfer'], \n    '2' : ['alih jenjang'], \n    '3' : ['lintas jalur'], \n    '4' : ['rekognisi pembelajaran lampau (rpl)'], \n    '5' : ['naik kelas'], \n    '6' : ['akselerasi'], \n    '7' : ['mengulang'], \n    '8' : ['lanjutan semester'], \n    '9' : ['pindahan alih bentuk'], \n    '10' : ['putus sekolah'], \n    '11' : ['kelas ekstensi'], \n    '12' : ['course'], \n    '13' : ['fast track'], \n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
// //     "onError": "set-to-blank",
// //     "newColumnName": "TRANSFER/TIDAK_VALIDATION",
// //     "columnInsertIndex": 14,
// //     "description": "Create column TRANSFER/TIDAK_VALIDATION at index 14 based on column TRANSFER/TIDAK using expression jython:import re\n\n# Define kemungkinan data master sistem kuliah \nconventions = {\n    '0' : ['peserta didik baru', 'tidak'], \n    '1' : ['pindahan', 'iya', 'transfer'], \n    '2' : ['alih jenjang'], \n    '3' : ['lintas jalur'], \n    '4' : ['rekognisi pembelajaran lampau (rpl)'], \n    '5' : ['naik kelas'], \n    '6' : ['akselerasi'], \n    '7' : ['mengulang'], \n    '8' : ['lanjutan semester'], \n    '9' : ['pindahan alih bentuk'], \n    '10' : ['putus sekolah'], \n    '11' : ['kelas ekstensi'], \n    '12' : ['course'], \n    '13' : ['fast track'], \n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "KURIKULUM MAHASISWA",
// //     "expression": "jython:import re\nvalue = int(value)\nvalue = str(value)\n\nif not value.isnumeric():\n    return (value)\n\nif not re.findall(r\"^(19\\d\\d|20\\d\\d)$\", value):\n    return (value)\n\nreturn ('') #valid",
// //     "onError": "set-to-blank",
// //     "newColumnName": "KURIKULUM_MAHASISWA_VALIDATION",
// //     "columnInsertIndex": 16,
// //     "description": "Create column KURIKULUM_MAHASISWA_VALIDATION at index 16 based on column KURIKULUM MAHASISWA using expression jython:import re\nvalue = int(value)\nvalue = str(value)\n\nif not value.isnumeric():\n    return (value)\n\nif not re.findall(r\"^(19\\d\\d|20\\d\\d)$\", value):\n    return (value)\n\nreturn ('') #valid"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "AGAMA",
// //     "expression": "jython:religions = [\n  (1, 'Islam'),\n  (2, 'Kristen'),\n  (3, 'Katolik'),\n  (3, 'Khatolik'),\n  (4, 'Hindu'),\n  (5, 'Budha'),\n  (6, 'Konghucu'),\n  (6, 'Khonghucu'),\n  (7, 'Lain-lain'),\n]\n\nresult = value\n\nfor id_religion, religion in religions:\n  if (religion.lower() == value.lower()) :\n    result = ''\n    break\n\nreturn (result)",
// //     "onError": "set-to-blank",
// //     "newColumnName": "AGAMA_VALIDATION",
// //     "columnInsertIndex": 18,
// //     "description": "Create column AGAMA_VALIDATION at index 18 based on column AGAMA using expression jython:religions = [\n  (1, 'Islam'),\n  (2, 'Kristen'),\n  (3, 'Katolik'),\n  (3, 'Khatolik'),\n  (4, 'Hindu'),\n  (5, 'Budha'),\n  (6, 'Konghucu'),\n  (6, 'Khonghucu'),\n  (7, 'Lain-lain'),\n]\n\nresult = value\n\nfor id_religion, religion in religions:\n  if (religion.lower() == value.lower()) :\n    result = ''\n    break\n\nreturn (result)"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "WNI/WNA",
// //     "expression": "jython:import re\n\nvalue = value.lower()\n\nformatCitizenship = re.findall(r\"(wni|wna)\", value)\nif not formatCitizenship:\n\treturn (value)\nelse:\n\treturn (\"\")",
// //     "onError": "set-to-blank",
// //     "newColumnName": "WNI/WNA_VALIDATION",
// //     "columnInsertIndex": 20,
// //     "description": "Create column WNI/WNA_VALIDATION at index 20 based on column WNI/WNA using expression jython:import re\n\nvalue = value.lower()\n\nformatCitizenship = re.findall(r\"(wni|wna)\", value)\nif not formatCitizenship:\n\treturn (value)\nelse:\n\treturn (\"\")"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "STATUS MAHASISWA",
// //     "expression": "jython:import re\n\n# Define kemungkinan data master status mahasiswa\nconventions = {\n    '1' : ['aktif'], \n    '2' : ['cuti'], \n    '3' : ['lulus'], \n    '4' : ['drop out'], \n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
// //     "onError": "set-to-blank",
// //     "newColumnName": "STATUS_MAHASISWA_VALIDATION",
// //     "columnInsertIndex": 22,
// //     "description": "Create column STATUS_MAHASISWA_VALIDATION at index 22 based on column STATUS MAHASISWA using expression jython:import re\n\n# Define kemungkinan data master status mahasiswa\nconventions = {\n    '1' : ['aktif'], \n    '2' : ['cuti'], \n    '3' : ['lulus'], \n    '4' : ['drop out'], \n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\nconventionId = getId(value)\n\n# code for validation, return empty string when Valid!\nif conventionId != None:\n    return ('')\nelse:\n    return (value)"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "ALAMAT",
// //     "expression": "jython:if len(value) > 255:\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "ALAMAT_VALIDATION",
// //     "columnInsertIndex": 24,
// //     "description": "Create column ALAMAT_VALIDATION at index 24 based on column ALAMAT using expression jython:if len(value) > 255:\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "TELEPON",
// //     "expression": "jython:import re\n\nif value is None:\n    return ('')\n\nif len(value) == 0 :\n    return ('')\n\nif not re.findall(r\"^[\\d\\+\\s]*$\", value) or len(value) > 20 :\n    return (value)\nelse:\n    return ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "TELEPON_VALIDATION",
// //     "columnInsertIndex": 26,
// //     "description": "Create column TELEPON_VALIDATION at index 26 based on column TELEPON using expression jython:import re\n\nif value is None:\n    return ('')\n\nif len(value) == 0 :\n    return ('')\n\nif not re.findall(r\"^[\\d\\+\\s]*$\", value) or len(value) > 20 :\n    return (value)\nelse:\n    return ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "HP",
// //     "expression": "jython:import re\n\nif value is None:\n    return ('')\n\nif len(value) == 0 :\n    return ('')\n\nif not re.findall(r\"^[\\d\\+\\s]*$\", value) or len(value) > 20 :\n    return (value)\nelse:\n    return ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "HP_VALIDATION",
// //     "columnInsertIndex": 28,
// //     "description": "Create column HP_VALIDATION at index 28 based on column HP using expression jython:import re\n\nif value is None:\n    return ('')\n\nif len(value) == 0 :\n    return ('')\n\nif not re.findall(r\"^[\\d\\+\\s]*$\", value) or len(value) > 20 :\n    return (value)\nelse:\n    return ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "TEMPAT LAHIR",
// //     "expression": "jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 32:\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "TEMPAT_LAHIR_VALIDATION",
// //     "columnInsertIndex": 30,
// //     "description": "Create column TEMPAT_LAHIR_VALIDATION at index 30 based on column TEMPAT LAHIR using expression jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 32:\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "TGL. LAHIR",
// //     "expression": "jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)",
// //     "onError": "set-to-blank",
// //     "newColumnName": "TANGGAL_LAHIR_VALIDATION",
// //     "columnInsertIndex": 32,
// //     "description": "Create column TANGGAL_LAHIR_VALIDATION at index 32 based on column TGL. LAHIR using expression jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "KODEPOS",
// //     "expression": "jython:import re\n\nif value is None:\n    return ('')\n    \nvalue = int(value)\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('')\n\nif not re.findall(r\"^\\d{5}$\", value) or len(value) != 5 :\n    return (value)\nelse:\n    return ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "KODEPOS_VALIDATION",
// //     "columnInsertIndex": 34,
// //     "description": "Create column KODEPOS_VALIDATION at index 34 based on column KODEPOS using expression jython:import re\n\nif value is None:\n    return ('')\n    \nvalue = int(value)\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('')\n\nif not re.findall(r\"^\\d{5}$\", value) or len(value) != 5 :\n    return (value)\nelse:\n    return ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "JENIS KELAMIN",
// //     "expression": "jython:if value != 'L' and value != 'P':\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "JENIS_KELAMIN_VALIDATION",
// //     "columnInsertIndex": 36,
// //     "description": "Create column JENIS_KELAMIN_VALIDATION at index 36 based on column JENIS KELAMIN using expression jython:if value != 'L' and value != 'P':\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "GOLONGAN DARAH",
// //     "expression": "jython:import re\n\nif value is None:\n    return ('')\n\nconventions = {\n    \"1\" : ['a'], \n    \"2\" : ['b'], \n    \"3\" : ['ab'], \n    \"4\" : ['o'], \n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\n# return early \nif len(value) == 0:\n    return ('')\n\nconventionId = getId(value)\n\nif conventionId != None:\n    return ('')\nelse:\n    return (value)",
// //     "onError": "set-to-blank",
// //     "newColumnName": "GOLONGAN_DARAH_VALIDATION",
// //     "columnInsertIndex": 38,
// //     "description": "Create column GOLONGAN_DARAH_VALIDATION at index 38 based on column GOLONGAN DARAH using expression jython:import re\n\nif value is None:\n    return ('')\n\nconventions = {\n    \"1\" : ['a'], \n    \"2\" : ['b'], \n    \"3\" : ['ab'], \n    \"4\" : ['o'], \n}\n\ndef getId(value):\n    result = None\n    for conventionId, variations  in conventions.items():\n        if value.lower() in variations: \n            result = conventionId\n            break\n\n    return result\n\n# return early \nif len(value) == 0:\n    return ('')\n\nconventionId = getId(value)\n\nif conventionId != None:\n    return ('')\nelse:\n    return (value)"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "EMAIL",
// //     "expression": "jython:import re\n\nif value is None:\n    return ('Data Null')\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"\\b[\\w\\.-]+@[\\w\\.-]+\\.\\w{2,4}\\b\", value):\n    return (value)\nelse:\n    return ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "EMAIL_VALIDATION",
// //     "columnInsertIndex": 40,
// //     "description": "Create column EMAIL_VALIDATION at index 40 based on column EMAIL using expression jython:import re\n\nif value is None:\n    return ('Data Null')\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"\\b[\\w\\.-]+@[\\w\\.-]+\\.\\w{2,4}\\b\", value):\n    return (value)\nelse:\n    return ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "NO. KTP (NIK)",
// //     "expression": "jython:import re\n\nif value is None:\n    return ('Data Null')\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{16}$\", value) :\n    return (value)\nelse:\n    return ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "KTP_NIK_VALIDATION",
// //     "columnInsertIndex": 42,
// //     "description": "Create column KTP_NIK_VALIDATION at index 42 based on column NO. KTP (NIK) using expression jython:import re\n\nif value is None:\n    return ('Data Null')\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{16}$\", value) :\n    return (value)\nelse:\n    return ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "NO. KK",
// //     "expression": "jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{16}$\", value) :\n    return (value)\nelse:\n    return ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "NO_KK_VALIDATION",
// //     "columnInsertIndex": 44,
// //     "description": "Create column NO_KK_VALIDATION at index 44 based on column NO. KK using expression jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{16}$\", value) :\n    return (value)\nelse:\n    return ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "RT",
// //     "expression": "jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{1,2}$\", value):\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "RT_VALIDATION",
// //     "columnInsertIndex": 46,
// //     "description": "Create column RT_VALIDATION at index 46 based on column RT using expression jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{1,2}$\", value):\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "RW",
// //     "expression": "jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{1,2}$\", value):\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "RW_VALIDATION",
// //     "columnInsertIndex": 48,
// //     "description": "Create column RW_VALIDATION at index 48 based on column RW using expression jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{1,2}$\", value):\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "DUSUN",
// //     "expression": "jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 60:\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "DUSUN_VALIDATION",
// //     "columnInsertIndex": 50,
// //     "description": "Create column DUSUN_VALIDATION at index 50 based on column DUSUN using expression jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 60:\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "KELURAHAN",
// //     "expression": "jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 60:\n    return (value)\n\nreturn ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "KELURAHAN_VALIDATION",
// //     "columnInsertIndex": 52,
// //     "description": "Create column KELURAHAN_VALIDATION at index 52 based on column KELURAHAN using expression jython:if value is None:\n    return ('Data Null')\n\nif len(value) > 60:\n    return (value)\n\nreturn ('')"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "TGL. DAFTAR",
// //     "expression": "jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)",
// //     "onError": "set-to-blank",
// //     "newColumnName": "TANGGAL_DAFTAR_VALIDATION",
// //     "columnInsertIndex": 54,
// //     "description": "Create column TANGGAL_DAFTAR_VALIDATION at index 54 based on column TGL. DAFTAR using expression jython:import re\n\ndef isDateValid(value):\n    value = str(value)\n    # DD/MM/YYY / DD-MM-YYYY\n    if re.findall(r\"^(0?[1-9]|[12]\\d|3[01])[\\/|\\-](0?[1-9]|1[0-2])[\\/|\\-](19|20)\\d{2}\", value):\n        return True\n    \n    # YYYY-MM-DD\n    if re.findall(r\"^((19|20)\\d{2}[\\-](0?[1-9]|1[0-2])[\\-]0?[1-9]|[12]\\d|3[01])\", value):\n        return True\n    \n    return False\n\nif value is None:\n    return ('Data Null')\n\nif isDateValid(value):\n    return ('')\nelse:\n    return (value)"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "NISN",
// //     "expression": "jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{10}$\", value) :\n    return (value)\nelse:\n    return ('')",
// //     "onError": "set-to-blank",
// //     "newColumnName": "NISN_VALIDATION",
// //     "columnInsertIndex": 70,
// //     "description": "Create column NISN_VALIDATION at index 70 based on column NISN using expression jython:import re\n\nif value is None:\n    return ('Data Null')\n\nvalue = str(value)\n\nif len(value) == 0 :\n    return ('Data Null')\n\nif not re.findall(r\"^\\d{10}$\", value) :\n    return (value)\nelse:\n    return ('')"
// //   },
// //   {
// //     "op": "core/column-addition-by-fetching-urls",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "KODE PRODI SESUAI PDDIKTI",
// //     "urlExpression": "grel:\"https://flash.siakadcloud.com/live/kl_prodipt?kode_prodi=\"+value",
// //     "onError": "set-to-blank",
// //     "newColumnName": "KODE_PRODI_FROM_DB",
// //     "columnInsertIndex": 13,
// //     "delay": 5000,
// //     "cacheResponses": true,
// //     "httpHeadersJson": [
// //       {
// //         "name": "authorization",
// //         "value": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaWQiOiJrYXJpcmxpbmsiLCJpYXQiOjE2Nzc0ODI1NTUsImV4cCI6MTY3NzQ4NjE1NX0.L4UAlu9yJdIjjuXzs3MFIDiHP_ubuIqUDPY9ax7-Oto"
// //       },
// //       {
// //         "name": "user-agent",
// //         "value": "OpenRefine 3.6.2 [579a6f7]"
// //       },
// //       {
// //         "name": "accept",
// //         "value": "*/*"
// //       }
// //     ],
// //     "description": "Create column KODE_PRODI_FROM_DB at index 13 by fetching URLs based on column KODE PRODI SESUAI PDDIKTI using expression grel:\"https://flash.siakadcloud.com/live/kl_prodipt?kode_prodi=\"+value"
// //   },
// //   {
// //     "op": "core/column-addition",
// //     "engineConfig": {
// //       "facets": [],
// //       "mode": "row-based"
// //     },
// //     "baseColumnName": "KODE_PRODI_FROM_DB",
// //     "expression": "jython:import json\n\nif value is None or value =='':\n    return ('Data tidak ditemukan')\n\ndata  = json.loads(value)",
// //     "onError": "set-to-blank",
// //     "newColumnName": "KODE_PRODI_VALIDATION",
// //     "columnInsertIndex": 14,
// //     "description": "Create column KODE_PRODI_VALIDATION at index 14 based on column KODE_PRODI_FROM_DB using expression jython:import json\n\nif value is None or value =='':\n    return ('Data tidak ditemukan')\n\ndata  = json.loads(value)"
// //   }
// // ]