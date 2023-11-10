document.addEventListener("DOMContentLoaded", function () {
  const temperatureInput = document.getElementById("temperatureInput");
  const unitSelect = document.getElementById("unitSelect");
  const convertButton = document.getElementById("convertButton");
  const result = document.getElementById("result");

  convertButton.addEventListener("click", function () {
    const temperature = parseFloat(temperatureInput.value);
    const selectedUnit = unitSelect.value;

    if (isNaN(temperature)) {
      result.textContent = "Please enter a valid number.";
      return;
    }

    if (selectedUnit === "celsius") {
      const fahrenheit = (temperature * 9) / 5 + 32;
      const kelvin = temperature + 273.15;
      result.textContent = `${temperature} °C is equal to ${fahrenheit.toFixed(
        2
      )} °F and ${kelvin.toFixed(2)} K`;
    } else if (selectedUnit === "fahrenheit") {
      const celsius = ((temperature - 32) * 5) / 9;
      const kelvin = ((temperature - 32) * 5) / 9 + 273.15;
      result.textContent = `${temperature} °F is equal to ${celsius.toFixed(
        2
      )} °C and ${kelvin.toFixed(2)} K`;
    } else if (selectedUnit === "kelvin") {
      const celsius = temperature - 273.15;
      const fahrenheit = (temperature - 273.15) * (9 / 5) + 32;
      result.textContent = `${temperature} K is equal to ${celsius.toFixed(
        2
      )} °C and ${fahrenheit.toFixed(2)} °F`;
    }
  });
});
