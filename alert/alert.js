function goSchool(){
    alert("okkk, i am goging to school")
}

function goPicnic(){
    const response = confirm('Are you going to picnic');

    if(response=== true){
        alert("paid your confirm money");
    }
    else{
        console.log('byeee');
    }
}

function askName(){
    const name= prompt("Enter your name?");
    if(name)
    console.log(name);
}