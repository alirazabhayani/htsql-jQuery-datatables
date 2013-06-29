var htsqlUrlBase = "/@";
var columns = [];
var tableID = 'htsqlDataTable'


// initialisation steps
function getDataTable() {
    getColumnNames(extractColumnNames);
    }

function getColumnNames(callBack) {
    metaQueryUrl = htsqlUrlBase + htsqlQuery + '/:raw';
    console.log('metaQueryUrl', metaQueryUrl);
    $.ajax({
        "dataType": "json",
        "type": "GET",
        "url": metaQueryUrl,
        "success": callBack
    });
    }

function extractColumnNames(responseTextHtsql) {
    htsqlColumnNames = [];
    columns = [];
    var fields = responseTextHtsql["meta"]["domain"]["item"]["domain"]["fields"];
    jsonData = responseTextHtsql["data"];
    for (var i=0; i<fields.length; i++) {
        htsqlColumnNames.push(fields[i]["syntax"]);
    }
    
    jQuery.each(htsqlColumnNames, function(i, value){
        var obj = { sTitle: value };
         columns.push(obj);
    });
    generateDataTable();
    }

function generateDataTable() {
    $("#"+tableID).dataTable({
        "aaData": jsonData,
        "aoColumns": columns,
        "bDestroy": true
    });
    }
