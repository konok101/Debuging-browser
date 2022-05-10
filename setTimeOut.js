function doSomeThing(){
    console.log("SetTime out Function");
}


console.log("onee");
console.log("two");
/* setTimeout(doSomeThing, 5000); */
setTimeout(function(){
    console.log("500s")
},5000);

setTimeout(() => {
    console.log("400s");
    
}, 4000);
console.log("three");
console.log("four");