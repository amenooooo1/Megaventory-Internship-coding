var result

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
    //console.log(result)
    var listDiv = document.getElementById('list-puntate');
    var ul=document.createElement('ul');
    for (var i = 0; i < result.length; ++i) {
            var li=document.createElement('li');
            li.innerHTML += result[i].PurchaseOrderTypeAbbreviation + " - " + result[i].PurchaseOrderId;   // Use innerHTML to set the text
            li.style.cursor = 'pointer';
            li.setAttribute("id", i);
            li.setAttribute("onclick", `details(${i})`);
            ul.appendChild(li);                                 
    }
    listDiv.appendChild(ul);

});

function details(index){

    localStorage.setItem("index", index);

    window.open('/details.html', '_blank');

    // myWindow.document.write('\
    // \
    //     <head><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>\
    //     <script type="text/javascript" src="/js.js"></script></head>\
    //     <body onLoad="buildHtmlTable("#excelDataTable")"><h1>Details</h1><div class="col-lg-12" id="list-puntate">\
    //         <table id="excelDataTable" border="1"></table></div></body>\
    // '); 
    
    // var ul=document.createElement('ul');

    // var li=document.createElement('li');
    // li.innerHTML += result[index].PurchaseOrderAddress;
    // ul.appendChild(li);
    // var li=document.createElement('li');
    // li.innerHTML += result[index].PurchaseOrderContactPerson;
    // ul.appendChild(li);
    // var li=document.createElement('li');
    // li.innerHTML += result[index].PurchaseOrderStatus;
    // ul.appendChild(li);
    // var li=document.createElement('li');
    // li.innerHTML += result[index].PurchaseOrderDetails;
    // ul.appendChild(li);
    // myWindow.document.body.appendChild(ul);

    
    
    // myWindow.document.body.setAttribute("onLoad" , "buildHtmlTable('#excelDataTablee')");

    // var h1 = myWindow.document.createElement('h1');
    // var textnode = document.createTextNode("Details");
    // h1.appendChild(textnode);
    // myWindow.document.body.appendChild(h1);

    // var ul=document.createElement('ul');

    // var li=document.createElement('li');
    // li.innerHTML += result[index].PurchaseOrderAddress;
    // ul.appendChild(li);
    // var li=document.createElement('li');
    // li.innerHTML += result[index].PurchaseOrderContactPerson;
    // ul.appendChild(li);
    // var li=document.createElement('li');
    // li.innerHTML += result[index].PurchaseOrderStatus;
    // ul.appendChild(li);
    // var li=document.createElement('li');
    // li.innerHTML += result[index].PurchaseOrderDetails;
    // ul.appendChild(li);
    // myWindow.document.body.appendChild(ul);

    // const newScript = document.createElement("script");
    // myWindow.document.head.appendChild(newScript);
    // newScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

    // var tab = document.createElement('table');
    // tab.setAttribute("id", "excelDataTablee");
    // tab.setAttribute("border", "1");
    

    // // var th =document.createElement('th');
    // // th.innerHTML += result[index].PurchaseOrderDetails[0][0][0];   // Use innerHTML to set the text
    // // tab.appendChild(th);

    // myWindow.document.body.appendChild(tab);
    
}

// function buildHtmlTable(selector) {
//     var columns = addAllColumnHeaders(result, selector);

//     for (var i = 0; i < result.length; i++) {
//         var row$ = $('<tr/>');
//         for (var colIndex = 0; colIndex < columns.length; colIndex++) {
//         var cellValue = result[i][columns[colIndex]];
//         if (cellValue == null) cellValue = "";
//         row$.append($('<td/>').html(cellValue));
//         }
//         $(selector).append(row$);
//     }
// }

//   // Adds a header row to the table and returns the set of columns.
//   // Need to do union of keys from all records as some records may not contain
//   // all records.
// function addAllColumnHeaders(result, selector) {
//     var columnSet = [];
//     var headerTr$ = $('<tr/>');

//     for (var i = 0; i < result.length; i++) {
//         var rowHash = result[i];
//         for (var key in rowHash) {
//         if ($.inArray(key, columnSet) == -1) {
//             columnSet.push(key);
//             headerTr$.append($('<th/>').html(key));
//         }
//         }
//     }
//     $(selector).append(headerTr$);

//     return columnSet;
// }

