// Area using Semiperimeter method
function areaTri(side1, side2, side3) {
    var semiPer = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(semiPer * ((semiPer - side1) * (semiPer - side2)* (semiPer - side3)));

    return area;
}

