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

    
}


