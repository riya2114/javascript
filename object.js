// var n=2;
// function square(num){
//     var ans=num+num;
//     return ans;
// }
// var square2=square(n);
// var square4=square(4);


// console.log(x);
// let x = 5;
// ReferenceError: Cannot access 'x' before initialization

// console.log(y)
// const y=10; 
// ReferenceError: Cannot access 'x' before initialization

// let a;
// console.log(a)
// a=10;
// console.log(a)
// a="hello world";
// console.log(a)

//global scope
// let globalVariable = "I am in the global scope";

// function globalFunction() {
//     console.log("This function is in the global scope");
// }

// console.log(globalVariable); // Accessing globalVariable from the global scope
// globalFunction();

//function scope
// function outerFunction() {
//     let outerVariable = "I am in the outer function scope";

//     function innerFunction() {
//         let innerVariable = "I am in the inner function scope";
//         console.log(innerVariable); // Accessing innerVariable from the inner function scope
//         console.log(outerVariable); // Accessing outerVariable from the outer function scope
//     }

//     innerFunction(); // Calling innerFunction from the outer function scope
//     //console.log(innerVariable); // This would result in an error because innerVariable is not accessible here
// }

// outerFunction();

//local/block scope

// let grocery={
//     snacks:"Chips",
//     coldDrink:"Coco Cola",
//     iceCream:"Chocolate",
//     cake:"butterscrotch"
// }
// console.log(grocery.iceCream)
// console.log(grocery["coldDrink"])
// delete grocery.snacks"
// grocery["coldDrink"]="limca"
// grocery.cake="vanilla"
// for(let keys in grocery){
//     console.log(`${keys} ${grocery[keys]}`)
// }
// grocery.name="Riya"
// let groceryArray=Object.entries(grocery)
// groceryArray[2]=["name","Riya"]
// grocery=Object.fromEntries(groceryArray)
// console.log(grocery)
// Object.keys(grocery).forEach(key => {
//     console.log(`${key}: ${[key]}`);
// });
// let grocery={
//     snacks:"Chips",
//     coldDrink:"Coco Cola",
//     iceCream:"Chocolate",
//     cake:"butterscrotch"
// }
// if("snacks" in grocery){
//     console.log("grocery has a snacks property")
// }
// if(grocery.hasOwnProperty("iceCream")){
//     console.log("grocery has a icecream property")
// }
// shallow copy
// let clone={...grocery}
// console.log(clone)
// let copied=Object.assign({}, grocery)
// console.log(copied)

//object function
// const person = {
//     name: "Riya",
//     age: 20,
//     greet: function(){
//         console.log(`Hello my name is ${this.name} and age is ${this.age}`)
//     }
// };
// // let a=person["address"]["country"]
// person.greet()

//destructuring
// const person={
//     name: "Riya",
//     age: 20,
//     address: "Noida"
// }
// let {name, address,age}=person
// console.log(name, address,age)

//constructor
// function person(name, age){
//     this.name=name,
//     this.age=age
// }
// const a=new person("Riya",20)
// console.log(a)

//freeze,seal,preventExtensions

// let person = {
//     name: "Alice",
//     age: 30
// };
// // Object.freeze(person); 
// // Object.seal(person)
// Object.preventExtensions(person);
// person.name="Riya"
// console.log(person)

let phoneBook={
    
}