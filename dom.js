//event bubbling
// let grandparent=document.querySelector(".gp");
// let parent=document.querySelector(".p");
// let child=document.querySelector(".c")

// grandparent.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     console.log("grand Parent bubbling")
// })
// parent.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     console.log("parent bubbling")
// })
// child.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     console.log("child bubbling")
// })

//event capturing

// grandparent.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log("grandparent capturing")
// },{capture: true ,once: true}
// )
// parent.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log("parent capturing")
// },{capture: true, once: true})
// child.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log("child capturing")
// }, {capture: true, once: true}
// )

// let box=document.querySelector(".box");
// let button=document.querySelector(".color");
// let colors=["red", "blue", "green", "orange","yellow"]
// let i=0
// button.addEventListener("click",()=>{
//    if(i<colors.length){
//     box.style.backgroundColor=colors[i]
//     i++
//    }
//    else{
//     i=0;
//     box.style.backgroundColor=colors[i]
//     i++
//    }
// })