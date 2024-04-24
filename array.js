//array questions;

//1. Sum of Array Elements: Write a function to calculate the sum of all elements 
//in an array of integers.
const sum_array=(array)=>{
    let sum=array.reduce((accumulator, currentValue)=>{
        return accumulator+currentValue
    })
    return `sum is: ${sum}`
}
let array=[2,5,7,4,8,9]
console.log(sum_array(array));

//2.  Average of Array Elements: Write a function to calculate the average of all 
//elements in an array of integers.
const average=(arr)=>{
    let arrLength=arr.length
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
        result=sum/arrLength
    }
    return `average is: ${result}`

}
let arr=[2,4,6,8,10,12]
console.log(average(arr));

//3.  Find Maximum Element: Write a function to find the maximum element in an array of integers.
const maximum=(array1)=>{
    let max=0
    for(let i=0; i<array1.length; i++){
        if(max<array1[i]){
            max=array1[i]
        }
    }
    return `maximum is: ${max}`
}
let array1=[4,25,10,5,15,3];
console.log(maximum(array1))

//4. Find Minimum Element: Write a function to find the minimum element in an array of integers.
const minimum=(list)=>{
    let min=list[0]
    for(let i=0; i<list.length; i++){
        if(min>list[i]){
            min=list[i]
        }
    }
    return `minimum is: ${min}`
}
let list=[4,25,2,5,15,3];
console.log(minimum(list))

//5.  Array Search: Write a function to search for a given element in an array 
//and return its index if found, otherwise return -1.
const find_index=(arr1)=>{
    let index=5;
    for(let i=0; i<arr1.length; i++){
        if(arr1[i]===index){
            return i
        }
        return -1
    }
}
let arr1=[4,25,2,5,15,3]
console.log(find_index(arr1))

// 6.Array Sorting: Write a function to sort an array of integers in non-decreasing order (ascending).
const sortArray=(a)=>{
    for(let i=0; i<a.length; i++) {
        for(let j=i+1; j<a.length; j++) {
            if (a[i]>a[j]){
                [a[i],a[j]]=[a[j],a[i]];
            }
        }
    }
    return `sort array is: ${a}`
};
let a=[2,6,1,9,5,7,4]
console.log(sortArray(a));

//7. Array Filtering: Write a function to filter out even numbers from an array of 
//integers and return a new array containing only the even numbers.

const even_num=(a1)=>{
    const even_arr=a1.filter(e=>e%2===0)
    return `even array is: ${even_arr}`
}
let a1=[4,7,6,9,5,2,8,14]
console.log(even_num(a1))

// a1 = [1,3] 
// a2 = [2,4]

// let a3=a1.concat(a2)
// console.log(a3)
// let table=a3[1]
// for(let i=1; i<=10; i++){
//     console.log(`${table} x ${i} = ${table*i}`)
// }

// const person_name={
//     firstName: "Riya",
//     lastName: "Gautam",
//     fullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(person_name.fullName())
