// Array + Type 

type Product = {
  id: number;
  name: string;
  inStock: boolean;
};

const products: Product[] = [
  { id: 1, name: "Laptop", inStock: true },
  { id: 2, name: "Mouse", inStock: false },
  { id: 3, name: "Keyboard", inStock: true }
];

function getAvailableProducts(product: Product[]){
    const filterStock = product.filter(pro => pro.inStock === true)
    return filterStock.map(pro => pro.name)
}
console.log(getAvailableProducts(products))