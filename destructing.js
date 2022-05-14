// Array destructing  


/* const [a, b]=[22, 34];

console.log(a); */


const student ={
    name: 'sakib khan',
    age: 32,
    movies:['king khan', 'sakib khan']
}

const [firstMOvie, secoundMovie]= student.movies;
console.log("This is the destructing", firstMOvie);


//Object destructing 
const {names, age}= { names: 'konok', age:14};

console.log(names)


const Employe={
    ide: 'vs code',
    destignation: 'developer',
    language: ['html', 'css', 'js'],
    specification:{
        height: 66,
        weight: 67,
        addreaa: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'yayaya'
        }
    }
}

 const { ide, weight}= Employe;
 const { brand, color}= Employe.specification.watch;

 console.log(ide, color);