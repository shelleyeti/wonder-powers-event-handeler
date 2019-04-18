//select element and add event sinlge button
document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);

//function to toggle css class
function flightHandlerFunction(){
    document.getElementById("flight").classList.toggle("enabled");
}


//select element and add event single button
document.querySelector("#activate-mindreading").addEventListener("click", mindReadingHandlerFunction);

//function to toggle css class
function mindReadingHandlerFunction(){
    document.getElementById("mindreading").classList.toggle("enabled");
}


//select element and add event single button
document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction);

//function to toggle css class
function xrayHandlerFunction(){
    document.getElementById("xray").classList.toggle("enabled");
}

//seclect elemetn and add event
document.querySelector("#activate-all").addEventListener("click", allPowersHandlerFunction);

//function to toggle css class
function allPowersHandlerFunction(){
    document.querySelectorAll(".power").forEach(function(element) {
        element.classList.toggle("enabled");
    })
}


//seclect elemetn and add event
document.querySelector("#deactivate-all").addEventListener("click", noPowersHandlerFunction);

//function to toggle css class
function noPowersHandlerFunction(){
    document.querySelectorAll(".power").forEach(function(element) {
        element.classList.toggle("disabled");
    })
}