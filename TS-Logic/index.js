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
var users = [
    { id: 1, name: "Harrum", email: "harrum@example.com", isActive: true },
    { id: 2, name: "Ali", email: "ali@example.com", isActive: false },
    { id: 3, name: "Sara", email: "sara@example.com", isActive: true }
];
function getActiveUserEmails(user) {
    var filterUser = user.filter(function (user) { return user.isActive === true; });
    return filterUser.map(function (user) { return user.email; });
}
console.log(getActiveUserEmails(users));
var userProfile = {
    id: 1,
    name: "Harrum",
    contact: {
        email: "harrum@devmail.com",
        phone: "123-456-7890"
    },
    preferences: {
        theme: "dark",
        language: "English"
    }
};
function describeUser(profile) {
    return "".concat(profile.name, " prefers ").concat(profile.preferences.theme, " and can be contacted at ").concat(profile.contact.email);
}
console.log(describeUser(userProfile));
