function numToTime(num) {
    let averHours = num/60;
    let hours = Math.floor(averHours);
    let averMinutes = (averHours - hours) * 60;
    let minutes = Math.round(averMinutes);
    
    if (hours < 1 && minutes < 60 && minutes > 1) {
        console.log( minutes + " minutes.")
    } else if(hours ===1 && minutes ===1) {
        console.log(hours + " hour, " + minutes + " minute.")
    } else if(hours > 1 && minutes > 1) {
        console.log(hours + " hours, " + minutes + " minutes.")
    } else if(hours > 1 && minutes ===1) {
        console.log(hours + " hours, " + minutes + " minute.")
    } else if(hours ===1 && minutes > 1) {
        console.log(hours + " hour, " + minutes + " minutes.")
    } else if(hours < 1 && minutes === 1) {
        console.log(minutes + " minute.")
    } 
}

numToTime(64);