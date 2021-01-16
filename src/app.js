const temperatureConverter = require("./temperatureConverter.js");
const distanceConverter = require("./distanceConverter.js");
const distInputs = document.getElementsByClassName("distInput");
const tempInputs = document.getElementsByClassName("tempInput");

for (let input of tempInputs) {
  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    for (let tempInput of tempInputs) {
      tempInput.value = temperatureConverter(e.target.name, value)[tempInput.id];
    }
  });
}

for (let input of distInputs) {
  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    for (let distInput of distInputs) {
      distInput.value = distanceConverter(e.target.name, value)[distInput.id];
    }
  });
}