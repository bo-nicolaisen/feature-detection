

// entrypoint
featureCheck();




// controller
function featureCheck() {

  let geoloc = checkGeolocationFeature();

  if (geoloc) {


    // async operator   first parameter is callback
    navigator.geolocation.getCurrentPosition(showLocation);


  }
  else {

    alternativeView();

  }

}


// checks if geolocation is navigator
function checkGeolocationFeature() {

  if ("geolocation" in navigator) {
    return true;
  } else {
    return false;
  }

}



//wiev


function showLocation(myPos) {


  let crd = myPos.coords;

  document.getElementById("app").innerHTML = "yay geolocation <br>" +

    "Du er her:<br>" +
    `breddegrad : ${crd.latitude}<br>` +
    `længdegrad: ${crd.longitude}<br>` +
    `inden for ca ${crd.accuracy} meter.`;



}


function alternativeView(){
  document.getElementById("app").innerHTML = "no geo location service";
}




