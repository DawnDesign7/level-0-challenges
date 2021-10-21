// Celsius to Farenheit (0C * 1.8) + 32 = 32°F
function celToFaren(celsius) {
    let farenheit = (celsius * 1.8) + 32;
    return farenheit;
}

celToFaren(30);

// Farenheit to Celsius (32F -32) * 1.8 = 0C 
function farenToCel(farenheit) {
    let celsius = (farenheit -32) * 1.8;
    return celsius;
}

farenToCel(32);