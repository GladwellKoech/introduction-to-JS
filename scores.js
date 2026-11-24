const scores=[72,85,90,64,58,93,77,81];
//print the total number of scores in the array
console.log( 'total number of scores=', scores.length)

//calculate and print the average score
let sum=0;
for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}
let average = sum / scores.length;
console.log( "Average score=",average);

//Find and print the highest and lowest scores
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
console.log("Highest=", highest);
console.log("Lowest=", lowest);

//creating an array called passed containing scores above 70
const passed = scores.filter(score => score >= 70);
console.log("Passed:", passed);

//new array called  curved where each score has 5 bonus points added (but no score should go above 100).
const curved = scores.map(score => Math.min(score + 5, 100));
console.log("Curved:", curved);

