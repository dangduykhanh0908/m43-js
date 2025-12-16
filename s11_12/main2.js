const products = [
  { id: 1, name: 'Laptop', price: 1200, category: 'Electronics', inStock: true },
  { id: 2, name: 'T-Shirt', price: 25, category: 'Apparel', inStock: true },
  { id: 3, name: 'Coffee Maker', price: 80, category: 'Home Goods', inStock: false },
  { id: 4, name: 'Smartphone', price: 950, category: 'Electronics', inStock: true },
  { id: 5, name: 'Book', price: 15, category: 'Literature', inStock: true }
];

const Category = products.map(e => e.category);

console.log(Category);

const lass = products.filter(e => e.category=== "Electronics" && e.inStock === true);
console.log(lass);

// const tb = products.forEach(e => {
//     console.log(e.name , e.price);
    
// });


const sum = products.reduce((acc,cur) => {
    if (cur.inStock=== true) {
         acc += cur.price;
    }
    return acc;
},0);

console.log(sum);
// cur la biien tham chieu den du lieu

const kiemtra = products.some(e => e.price > 1000);

console.log(kiemtra);

const kiemtraevr = products.every(e => e.price >10);

console.log(kiemtraevr);


