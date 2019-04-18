//select element and add event 
document.querySelector("#activate-flight").addEventListener("click", powersToggle);

//select element and add event 
document.querySelector("#activate-mindreading").addEventListener("click", powersToggle);

//select element and add event 
const xray = document.querySelector("#activate-xray").addEventListener("click", powersToggle);



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




//One function to split the powers on or off
function powersToggle(event) { 
    //split turned activate-power into an array
    let power = event.target.id.split("-");
    console.log(power);
    //use array position 1 to grab power name
    document.getElementById(power[1]).classList.toggle("enabled");
}

//enabled works as a toggle because it is listed after disabled in css!!!!!!!
console.log("Enabled works as a toggle because it is listed after disabled in css!!!!!!!")