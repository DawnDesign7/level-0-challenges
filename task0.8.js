function numToTime(num) {
    let averHours = num/60;
    let hours = Math.floor(averHours);
    let averMinutes = (averHours - hours) * 60;
    let minutes = Math.round(averMinutes);

    console.log(num +" will become " + hours + " hour(s) and " + minutes +" minute(s).");
}

numToTime(72);