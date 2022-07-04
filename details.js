var result
var detailResult

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("/purchaseorders.json", function(text){
    var data = JSON.parse(text);
    result = data.mvPurchaseOrders;
    var index = localStorage.getItem("index");
    console.log(index)
    detailResult = data.mvPurchaseOrders[index].PurchaseOrderDetails;

    console.log(result)
    var listDiv = document.getElementById('list-puntate');

    var ul=document.createElement('ul');

    var li=document.createElement('li');
    li.innerHTML += result[index].PurchaseOrderAddress;
    ul.appendChild(li);
    var li=document.createElement('li');
    li.innerHTML += result[index].PurchaseOrderContactPerson;
    ul.appendChild(li);
    var li=document.createElement('li');
    li.innerHTML += result[index].PurchaseOrderStatus;
    ul.appendChild(li);

    listDiv.appendChild(ul);    
});


function buildHtmlTable(selector) {
    var columns = addAllColumnHeaders(detailResult, selector);

    for (var i = 0; i < detailResult.length; i++) {
        var row$ = $('<tr/>');
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
        var cellValue = detailResult[i][columns[colIndex]];
        if (cellValue == null) cellValue = "";
        row$.append($('<td/>').html(cellValue));
        }
        $(selector).append(row$);
    }
}

  // Adds a header row to the table and returns the set of columns.
  // Need to do union of keys from all records as some records may not contain
  // all records.
function addAllColumnHeaders(detailResult, selector) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');

    for (var i = 0; i < detailResult.length; i++) {
        var rowHash = detailResult[i];
        for (var key in rowHash) {
        if ($.inArray(key, columnSet) == -1) {
            columnSet.push(key);
            headerTr$.append($('<th/>').html(key));
        }
        }
    }
    $(selector).append(headerTr$);

    return columnSet;
}