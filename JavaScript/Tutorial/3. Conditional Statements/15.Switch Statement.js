let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName);

/////////////////////////////////

let grade = 'C';
let result;
switch (grade) {
    case 'A':
        result = "A (Excellent)";
        break;
    case 'B':
        result = "B (Average)";
        break;
    case 'C':
        result = "C (Below than average)";
        break;
    default:
        result = "No Grade";
}
console.log(result);