const products = [
  { id: 1, name: 'Laptop', price: 1200, category: 'Electronics', inStock: true },
  { id: 2, name: 'T-Shirt', price: 25, category: 'Apparel', inStock: true },
  { id: 3, name: 'Coffee Maker', price: 80, category: 'Home Goods', inStock: false },
  { id: 4, name: 'Smartphone', price: 950, category: 'Electronics', inStock: true },
  { id: 5, name: 'Book', price: 15, category: 'Literature', inStock: true },
  { id: 6, name: 'Mouse', price: 50, category: 'Electronics', inStock: true },
  { id: 7, name: 'Jeans', price: 75, category: 'Apparel', inStock: true }
];

const loc = products
  .filter(e => e.category === "Apparel")
  .map(e => ({
      ...e,
      price: e.price * 0.9
  }));
  console.log(loc);
  



const totalCategory = products.reduce((acc,cur) => {
    const categoryid = cur.category;
    if(!acc[categoryid]){
        acc[categoryid] = cur.price;
    } else {
        acc[categoryid] += cur.price;
    }
    return acc;
},{});
console.log(totalCategory);

const pricemin = products.reduce((acc,cur)=> {
    if(!cur.inStock) return acc;
    if(!acc || cur.price <  acc.price) return cur;
    return acc; 
},null);

console.log(pricemin);

const price100 = products.filter((e) => e.price < 100);
console.log(price100);

const stringName = price100.map(e => {
    return `${e.name} - $${e.price}`
})
console.log(stringName);

const xauchuoi = stringName.join(";");

console.log(xauchuoi);



