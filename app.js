var btnTranslate=document.querySelector("#btn");
var txtInput=document.querySelector("#txt-input");
var output=document.querySelector("#txt-output");
var serverURL="https://api.funtranslations.com/translate/dothraki.json";

btnTranslate.addEventListener("click",clickHandler);
function getTranslationURL(input){
    return serverURL+"?"+"text=" + input;
   
}

function clickHandler(){
    var inputText=txtInput.value;

    fetch(getTranslationURL(inputText)).then(response => response.json()).then(json => {
         var translatedText= json.contents.translated;
         output.innerText=translatedText;
      })
      .catch(errorHandler)

}

function errorHandler(error){
    console.log("error occured");
    alert("something wrong with the server , please try again");
}





