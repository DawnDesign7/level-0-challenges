function numToTime(num) {
    var num = prompt("Insert number to convert it into hours and minutes");
    var averHours = num/60;
    var hours = Math.floor(averHours);
    var averMinutes = (averHours - hours) * 60;
    var minutes = Math.round(averMinutes);

    return num +" equals " + hours + " hour(s) and " + minutes +" minute(s)."
}

numToTime();