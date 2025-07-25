// Array + Type 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// Generics + Spread Operator
function mergeArrays(ArrayFirst, ArraySecond) {
    var mergeArray = __spreadArray(__spreadArray([], ArrayFirst, true), ArraySecond, true);
    return mergeArray;
}
console.log(mergeArrays(["a", "b"], ["c"]));
var allPosts = [
    { id: 1, title: "Learn TS", published: true },
    { id: 2, title: "Learn JS", published: false },
    { id: 3, title: "Learn Node", published: true }
];
// Promises + Return Type
function fetchPublishedPosts(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var filterPost = post.filter(function (post) { return post.published === true; });
            if (filterPost.length > 0) {
                return resolve(filterPost);
            }
            else {
                return reject("No posts found.");
            }
        }, 1000);
    });
}
fetchPublishedPosts(allPosts).then(function (user) {
    console.log("Posts:", user);
}).catch(function (res) {
    console.log(res);
});
