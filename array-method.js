const products = [
    {name : 'laptop',  price: 33, brand: 'lavano1', color: 'red'},
    {name : 'Mobile',  price: 3, brand: 'lavano2', color: 'red'},
    {name : 'lpad',  price: 53, brand: 'lavano3', color: 'red'},
    {name : 'WaterPOt',  price: 73, brand: 'lavano4', color: 'red'},
    {name : 'Sunglass',  price: 83, brand: 'lavano5', color: 'red'}
];

console.log(products);

const Name= products.map(p=> p.name);
console.log(Name);

 products.forEach(p => console.log(p.brand));

 const price= products.filter(product => product.price > 51);
 const nameInclude= products.filter(product => product.name.includes('l'));
  console.log(nameInclude);
  /* 
 const firstPrice= products.find(product => product.price > 51);
 console.log(price);
 console.log(firstPrice);
 */
 
 
 

