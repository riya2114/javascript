//1. Write a program that checks if a given number is even or odd.
const even_odd=(a)=>{
    if(a%2===0){
        return `this is even: ${a}`
    }
    else{
        return `this is odd: ${a}`
    }
}
console.log(even_odd(3)); //output is: this is odd: 3

//2. Create a function that takes two numbers as parameters and returns the larger one.
const large_num=(a,b)=>{
    if(a>b){
        return `a is larger than b: a=${a} and b=${b}`
    }
    else if(b>a){
        return `b is larger than a: a=${a} and b=${b}`
    }
    else{
        return `no one is larger`
    }
}
console.log(large_num(8,4)); //output is: a is larger than b: a=8 and b=4

//3. Write a function that determines if a given year is a leap year.
const leap_year=(year)=>{
    if(year%400===0 || year%100!==0 && year%4===0){
        return `leap year`
    }
    else{
        return `not leap year`
    }
}
console.log(leap_year(2024)) //output is: leap year

//4. Implement a program that checks whether a given character is a vowel or consonant.
const vowel_const=(a)=>{
    if(a==='a' || a==='e' || a==='i' || a==='o' || a==='u' || a==='A' 
    || a==='E' || a==='I' || a==='O' || a==='U'){
        return `a is vowel: ${a}`
    }
    else{
        return `a is constant: ${a}`
    }
}
console.log(vowel_const('A')) //output is: a is vowel: A

//5. Create a function that takes three numbers as input and returns the largest among them.
const larger_of_three=(a,b,c)=>{
   if(a>b && a>c){
    return `a is largest: ${a}`
   }
   else if(b>a && b>c){
    return `b is largest: ${b}`
   }
   else{
    return `c is largest: ${c}`
   }
}
console.log(larger_of_three(8,9,7)) //output is: b is largest: 9

//6. Write a program that checks if a given number is positive, negative, or zero.
const num=(a)=>{
    if(a>0){
        return `a is positive: ${a}`
    }
    else if(a<0){
        return `a is negative: ${a}`
    }
    else{
        return `a is zero: ${a}`
    }
}
console.log(num(-8)) //output is: a is negative: -8

//7. Implement a function that calculates the grade of a student based on their score.
const score=(grade)=>{
    if(grade>=90){
        return `A grade`
    }
    else if(grade>=80 && grade<90){
        return `B grade`
    }
    else if(grade>=70 && grade<80){
        return `C grade`
    }
    else if(grade>=60 && grade<70){
        return `D grade`
    }
    else if(grade>=50 && grade<60){
        return `E grade`
    }
    else{
        return `F grade`
    }
}
console.log(score(75)) //output is: C grade

//8. Create a program that determines if a given string is a palindrome.
const palindrome=(a)=>{
    let str="";
    let pal=a.length-1;
    while(pal>=0){
        str+=a[pal];
        pal--;
    }
    if (str===a) {
        return `palindrome: ${a}`;
    } else {
        return `no palindrome: ${a}`;
    }
}
console.log(palindrome('bab')); //output is: palindrome: bab

//9. Write a function that checks whether a person is eligible to vote based on their age.
const vote=(a)=>{
    if(a>=18){
        return `this is eligible for vote ${a}`
    }
    else{
        return `this is not eligible for vote ${a}`
    }
}
console.log(vote(16)) //output is: this is not eligible for vote 16

//10. Implement a program that determines the type of a triangle based on the lengths of its sides.
const valid_Triangle=(A,B,C)=>{
    if(A===B && A==C){
        return `Equal triangle`
    }
    else if(A===B || A===C || B===C){
        return `Isosceles triangle`
    }
    else{
        return `Scalene triangle`
    }
}
console.log(valid_Triangle(3,5,5)) //output is: Isosceles triangle

