"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    // b²-4*a*c
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        arr = [];
    } else if (d === 0) {
        arr[0] = (-b / (2 * a));
    } else {
        arr[0] = (-b + Math.sqrt(d)) / (2 * a);
        arr[1] = (-b - Math.sqrt(d)) / (2 * a);
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let P = percent / 100 / 12;
    let S = amount - contribution;
    let n = countMonths;
    let m = S * (P + (P / (((1 + P)**n) - 1)));
    let f = m * n;
    return Number(f.toFixed(2));
}