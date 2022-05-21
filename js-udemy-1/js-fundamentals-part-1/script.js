console.log("js fundamentals part 1 coding challenge 2");

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBMI = Math.round(markWeight / (markHeight * markHeight));
const johnBMI = Math.round(johnWeight / (johnHeight * johnHeight));
const markHigherBMI = markBMI > johnBMI;
// const markHigherBMI =
//   markBMI > johnBMI
//     ? `Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`
//     : `John's BMI (${johnBMI}) is higher than Marks's (${markBMI})`;
// console.log(`Mark's BMI ${markBMI}`);
// console.log(`John's BMI ${johnBMI}`);
// console.log(`Is Mark's BMI is higher than John's: ${markHigherBMI}`);
// console.log(markHigherBMI);

if (markHigherBMI)
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
else console.log(`John's BMI (${johnBMI}) is higher than Marks's (${markBMI})`);
