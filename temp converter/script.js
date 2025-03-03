function convertTemperature() {
    const tempInput = document.getElementById('temperature');
    const unitInput = document.getElementById('unit');
    const resultDiv = document.getElementById('result');
    
    // Get the temperature input and validate it
    const temperature = parseFloat(tempInput.value);
    
    if (isNaN(temperature)) {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }

    // Get the selected unit
    const unit = unitInput.value;

    let convertedTemperature;
    let unitConvertedTo;

    // Perform the conversion based on the selected unit
    if (unit === "celsius") {
        convertedTemperature = (temperature * 9/5) + 32;
        unitConvertedTo = "°F (Fahrenheit)";
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        unitConvertedTo = "°C (Celsius)";
    }

    // Display the result
    resultDiv.textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${unitConvertedTo}`;
}
