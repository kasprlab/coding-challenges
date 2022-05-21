console.log("js fundamentals part 1 coding challenge 4");

// coding challenge 1 & 2
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;
// const markBMI = Math.round(markWeight / (markHeight * markHeight));
// const johnBMI = Math.round(johnWeight / (johnHeight * johnHeight));
// const markHigherBMI = markBMI > johnBMI;
// const markHigherBMI =
//   markBMI > johnBMI
//     ? `Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`
//     : `John's BMI (${johnBMI}) is higher than Marks's (${markBMI})`;

// console.log(`Mark's BMI ${markBMI}`);
// console.log(`John's BMI ${johnBMI}`);
// console.log(`Is Mark's BMI is higher than John's: ${markHigherBMI}`);
// console.log(markHigherBMI);

// if (markHigherBMI)
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
// else console.log(`John's BMI (${johnBMI}) is higher than Marks's (${markBMI})`);

// coding challenge 3
// const dolphinsAvgScore = Math.round((97 + 112 + 101) / 3);
// const koalasAvgScore = Math.round((97 + 112 + 101) / 3);
// console.log(`dolphins average score is ${dolphinsAvgScore}`);
// console.log(`koalas average score is ${koalasAvgScore}`);

// my solution
// if (dolphinsAvgScore < 100 && koalasAvgScore >= 100) {
//   console.log("koala wins");
// } else if (dolphinsAvgScore >= 100 && koalasAvgScore < 100) {
//   console.log("dolphins wins");
// } else if (dolphinsAvgScore < 100 && koalasAvgScore < 100) {
//   console.log("no one wins! both teams score less than 100");
// } else {
//   if (dolphinsAvgScore !== koalasAvgScore) {
//     const winningTeam =
//       dolphinsAvgScore > koalasAvgScore ? "dolphins wins!" : "koalas wins!";
//     console.log(winningTeam);
//   } else {
//     console.log("no one wins! both team has the same average score");
//   }
// }

// instructor solution
// if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= 100) {
//   console.log("dolphins wins");
// } else if (koalasAvgScore > dolphinsAvgScore && koalasAvgScore >= 100) {
//   console.log("koala wins");
// } else if (
//   koalasAvgScore === dolphinsAvgScore &&
//   koalasAvgScore >= 100 &&
//   dolphinsAvgScore >= 100
// ) {
//   console.log("both teams win with the same average score");
// } else {
//   console.log("no one wins! both teams score less than 100");
// }

// coding challenge 4
