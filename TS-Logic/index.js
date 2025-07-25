// Array + Type 
var products = [
    { id: 1, name: "Laptop", inStock: true },
    { id: 2, name: "Mouse", inStock: false },
    { id: 3, name: "Keyboard", inStock: true }
];
function getAvailableProducts(product) {
    var filterStock = product.filter(function (pro) { return pro.inStock === true; });
    return filterStock.map(function (pro) { return pro.name; });
}
console.log(getAvailableProducts(products));
