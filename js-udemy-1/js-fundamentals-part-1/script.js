console.log("js fundamentals part 1 coding challenge 1");

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);
const markHigherBMI = markBMI > johnBMI;
console.log(`Mark's BMI ${Math.round(markBMI)}`);
console.log(`John's BMI ${Math.round(johnBMI)}`);
console.log(`Is Mark's BMI is higher than John's: ${markHigherBMI}`);
