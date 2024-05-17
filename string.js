//1 . Given a sentence, capitalize the first character of each word.
	// input - this is javascript
	// output - This Is JavaScript

//     let input=document.querySelector(".input");
//     let button=document.querySelector(".button");
//     let sentence=document.querySelector(".sentence");

// button.addEventListener("click",()=>{
//         let capital_first_letter=(inputValue)=>{
//             let a=inputValue.split(" ");
//             let newArray=[];
//             for(let i=0; i<a.length; i++){
//                 let word=a[i];
//                 let upper=word.charAt(0).toUpperCase();
//                 let lower=word.slice(1).toLowerCase();
//                 let capitalize=upper+lower
//                 newArray.push(capitalize);
//             }
//             return newArray.join(" ");
//         }
//         let inputValue=input.value;
//         let capitalizeString=capital_first_letter(inputValue);
//         sentence.innerHTML=capitalizeString
    //})

//2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
	//input - ["javascript", "react", "node"]
	//output - [true, false, false]
	//input - ["java","python","c"]
	//output - [false, false, false]
    // let input=document.querySelector(".input");
    // let button=document.querySelector(".button");
    // let sentence=document.querySelector(".sentence");

    // button.addEventListener("click",()=>{
    //     const inputValue=input.value;
    //     // const array=["java","python","c"]
    //     const inputArray=inputValue.split(" ")
    //     const booleanArray=inputArray.map((e)=>e.includes("javascript"));
    //     sentence.innerHTML=booleanArray
        
    // })

//3. Given a string which contains an email address, return true if the given email is valid, else return false.
	//input - puran@navgurukul.org
	//output - true
	//input - puran@navgurukul
	//output - false
	//input - puran@gmail.com
	//output - true

//5. Reverse the given sentence.
	//input- i am learning javascript.
	//output - tpircsavaj gninrael ma i

    // let input=document.querySelector(".input");
    // let button=document.querySelector(".button");
    // let sentence=document.querySelector(".sentence");

    // button.addEventListener("click",()=>{
    //     const reverse=(string)=>{
    //         let reverse_string=string.split("").reverse().join("");
    //         return reverse_string;
    //     }
    //     let inputValue=input.value;
    //     let string=reverse(inputValue);
    //     sentence.innerHTML=string
    // })

//6. Reveres the given string word by word then return the reversed string.
	//input - Success comes to those who work hard
	//output - hard work who those to comes Success
    // let input=document.querySelector(".input");
    // let button=document.querySelector(".button");
    // let sentence=document.querySelector(".sentence");

    // button.addEventListener("click",()=>{
    //     const my_string=(string)=>{
    //         let res=string.split(" ")
    //         let str=" "
    //         for(let i=0; i<res.length; i++){
    //             str=res[i]+" "+str;
    //         }
    //         return str;
    //     }
    //     let inputValue=input.value;
    //     let string=my_string(inputValue);
    //     sentence.innerHTML=string;
    // })
