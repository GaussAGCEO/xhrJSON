function xhrJSON(Alldata, callback){
    let url = Alldata.url,
        data = Alldata.data;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText)
        }
    };
    xhttp.open("POST", url+"?"+encodeJSONForURIparameters(data), true);
    xhttp.send();
}

function encodeJSONForURIparameters(object){
let output = "";
var keys = [];
for(var k in object) keys.push(k);
for(i = 0; i<= keys.length-1; i++){
if(i == keys.length-1){
    output+=keys[i]+"="+object[keys[i]];
}
else{
    output+=keys[i]+"="+object[keys[i]]+"&";
}
}
return output;
}


