// //1.Given length and breadth of a rectangle, return the area of the rectangle.
// let area=(length,breadth)=>{
//     let a=length*breadth
//     return `area of rectangle is: ${a}`;
// }
// console.log(area(24,10)) //output is: area of rectangle is: 240

// //2.Take a number and print the square of the number
// const square=(a,b)=>{
//     let result=a**b
//     return `square is ${result}`
// }
// console.log(square(2,8)) //output is: square is 256

// //3. Take two numbers and only print the integer part when a is divided by b.
// const integer=(a,b)=>{
//    let num=Math.floor(a/b)
//     return `integer part is ${num}`
// }
// console.log(integer(5,2)); //output is: integer part is 2

// //4.Take a number and print out the last digit of the number.
// const last_digit=(a)=>{
//     let b= a%10
//     return `last digit is ${b}`
// }
// console.log(last_digit(45)) //output is: last digit is 5

// //5. Take a number and find the cube of that number.
// const cube=(x)=>{
//     return `cube is: ${x**3}`
// }
// console.log(cube(7)) //output is: cube is: 343

// // 6. Take a 3 digit number and print the reverse of that number.
// const reverse=(a)=>{
//     let rev=0;
//     let r=0;
//     while(a>0){
//         r=a%10
//         rev=rev*10+r
//         a=Math.floor(a/10)
//     }
//     return `reverse number is ${rev}`
// }
// console.log(reverse(5432)) //output is: reverse number is 2345

// //7. Take a number and print out the first digit of the number.
// const first_digit=(a)=>{
//     let x=Math.abs(a)
//     let res 
//     while(x>=10){
//         x=Math.floor(x/10)
//     }
//     res=x
//     return `first digit is ${res}`;
//   }
//   let value=-8765
//   console.log(first_digit(value)); //output is: first digit is 8


// // 8. Take a number and return the sum of the first and last digit.
// const sum_num=(a) => {
//     let first=0;
//     let last = a%10;
//     while (a>=10) {
//         a=Math.floor(a/10);
//         first=a;
//     }
//     return `sum is ${first+last}`;
// }
// console.log(sum_num(456)); //output is: sum is 10

// //9. Take salary of five employees and print the average salary of all the employees.
// const average=(a)=>{
//     let sum=0
//     for(let i=0;i<a.length;i++){
//         sum+=a[i]
//     }
//     return `average is ${sum/a.length}`;
// }
// let salary=[24,56,20,45,10]
// console.log(average(salary)) //output is: average is 31

// //10.Take two numbers and swap them.
// const swap = (a,b) => {
//     s=a;
//     a=b; 
//     b=s;
//     return `Swap: ${a} ${b}`;
//   }
// console.log(swap(5,4)); //output is: Swap: 4 5
