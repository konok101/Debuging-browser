
console.log('firsr');
/* setInterval( ()=>{
    console.log('tik tik');

}, 412); */

console.log('scound');

let i=0;

const timeId = setInterval( ()=>{
    i++;
    console.log(i);
    if(i>6){
        clearInterval(timeId);
    }

}, 412); 