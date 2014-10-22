// Display the native navigation bar with the title "Hello World!"
steroids.view.navigationBar.show("You're Awesome");

// Set the WebView background color to white (effective on iOS only)
steroids.view.setBackgroundColor("#FF0000");

function getAcceleration() {
  navigator.accelerometer.getCurrentAcceleration(accelerometerOnSuccess, accelerometerOnError)
}

function accelerometerOnSuccess(acceleration) {
  acceleration_data.innerHTML =
    "x: " + acceleration.x + "<br>" +
    "y: " + acceleration.y + "<br>" +
    "z: " + acceleration.z + "<br>" +
    "timestamp: " + acceleration.timestamp
}

function accelerometerOnError(error) {
  alert("Accelerometer error: " + JSON.stringify(error));
}