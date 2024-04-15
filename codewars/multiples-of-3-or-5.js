/*

```yaml
problem: "Multiples of 3 or 5"
tags: MATHEMATICS, ALGORITHMS
difficulty: 6-kyu
source: codewars
link: https://www.codewars.com/kata/514b92a657cdc65150000006/
```

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 **below** the number passed in.

Additionally, if the number is negative, return 0.

**Note:** If the number is a multiple of **both** 3 and 5, only count it *once*.
*/

// const solution = number => {
//   let sum = 0;
//   for (let i = 1; i < number; i++) {
//     if ((i % 3 === 0) || (i % 5 === 0)) {
//       sum += i;
//     }
//   }
//   return sum
// }



const solution = number => (number < 1 ) ? -1 : 
  new Array(number - 1)
    .fill(0)
    .map((_, i) => i + 1)
    .reduce((acc, curr) => {
      if ((curr % 3 === 0 ) || (curr % 5 === 0)) {
        acc += curr
      } return acc
    }, 0)