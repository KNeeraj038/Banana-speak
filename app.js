var btnTranslate = document.querySelector("#btnTranslate");


function constructUrl(inputString){
    // const serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
    const serverUrl = "https://api.funtranslations.com/translate/minion.json";

    return serverUrl + "?" + "text="+ inputString;
}

function errorHandler(error){
    Console.log("Error occured ! : "+error);
}
function clickBtnHandler(){
    var inputString = txtInput.value;
    
    // construct url 
    var url = constructUrl(inputString);
    fetch(url)
    .then(response => response.json())
    .then(json =>{
        txtOutput.innerHTML = json.contents.translated
    })
    .catch(errorHandler)

    // console.log(inputString);
}

btnTranslate.addEventListener("click", clickBtnHandler);