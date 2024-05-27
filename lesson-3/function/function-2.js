
function convertTemperature(value, type) {
    let convertedValue;

    switch (type) {
        case 'C':
            convertedValue = (value * 9 / 5) + 32;
            break;
        case 'F':
            convertedValue = (value - 32) * 5 / 9;
            break;
        default:
            throw new Error('Invalid temperature type. Use "C" for Celsius or "F" for Fahrenheit.');
    }

    return convertedValue;
}

let tempInFahrenheit = convertTemperature(25, 'C');
console.log(`25 degrees Celsius is ${tempInFahrenheit} degrees Fahrenheit.`);

let tempInCelsius = convertTemperature(77, 'F');
console.log(`77 degrees Fahrenheit is ${tempInCelsius} degrees Celsius.`);
