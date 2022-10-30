var translatebutton = document.querySelector("#translatebutton");
var userInput = document.querySelector("#userinput");
var output = document.querySelector("#output");
var serverurl = "https://api.funtranslations.com/translate/pirate.json"

function translatorURL(text){
    return serverurl + "?" + "text=" + text
};
function errorHandler(error){
    console.log("Error!", error);
    alert("Try again later")
}

function clickHandler(){
    var inputtext = userInput.value;
    fetch(translatorURL(inputtext))
        .then(response => response.json())
        .then(json => {
            var translatedOutput = json.contents.translated;
            output.innerText= translatedOutput;
        })
    
    .catch(errorHandler)
};


translatebutton.addEventListener("click", clickHandler)



