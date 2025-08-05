// Array + Type 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
// async/await 
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchPublishedPosts(allPosts)];
                case 1:
                    data = _a.sent();
                    console.log("Published Posts:", data);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error("Something went wrong:", err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
getData();
var userActivity = [
    { id: 1, name: "Harrum", lastLogin: "2025-07-20", actions: 14 },
    { id: 2, name: "Ali", lastLogin: "2025-07-01", actions: 0 },
    { id: 3, name: "Sara", lastLogin: "2025-07-24", actions: 25 },
    { id: 4, name: "Zara", lastLogin: "2025-06-30", actions: 3 },
    { id: 5, name: "John", lastLogin: "2025-07-23", actions: 19 }
];
function getEngagedUsers() {
    var today = new Date();
    var sevenDaysAgo = new Date(today.getTime() - (7 * 24 * 60 * 60 * 1000));
    var year = sevenDaysAgo.getFullYear();
    var month = String(sevenDaysAgo.getMonth() + 1).padStart(2, '0');
    var day = String(sevenDaysAgo.getDate()).padStart(2, '0');
    var cutoffDate = "".concat(year, "-").concat(month, "-").concat(day);
    var engagedUsers = userActivity.filter(function (user) {
        return user.lastLogin >= cutoffDate && user.actions > 0;
    });
    var action = engagedUsers.filter(function (user) { return user.actions > 10; });
    return action.map(function (user) { return "".concat(user.name, " (").concat(user.actions, " actions)"); });
}
console.log(getEngagedUsers());
var userObject = [
    { id: 1, name: "Harrum", role: "admin" },
    { id: 2, name: "Ali", role: "user" },
    { id: 3, name: "Sara", role: "moderator" }
];
function createUserLookup() {
    var userFilter = Object.keys(userObject).reduce(function (accumulator, key) {
        accumulator[key] = userObject[key];
        return accumulator;
    }, {});
    return userFilter;
}
console.log(createUserLookup());
var product = {
    id: 101,
    title: "Gaming Laptop",
    specs: {
        cpu: "Intel i7",
        ram: "16GB",
        storage: "1TB SSD"
    },
    price: 1500
};
function getSpecsSummary(product) {
    return "".concat(product.title, " comes with ").concat(product.specs.cpu, ", ").concat(product.specs.ram, " and ").concat(product.specs.storage);
}
console.log(getSpecsSummary(product));
// Spread + Rest Pattern
var electronics = ["Laptop", "Phone", "Tablet"];
var accessories = ["Charger", "Mouse"];
function combineInventory() {
    var allItems = __spreadArray(__spreadArray([], electronics, true), accessories, true);
    var mainProduct = allItems[0], otherItems = allItems.slice(1);
    return "Main product is ".concat(mainProduct, ". Other items: ").concat(otherItems.join(", "));
}
console.log(combineInventory());
var students = [
    { id: 1, name: "Harrum", grade: 92 },
    { id: 2, name: "Ali", grade: 58 },
    { id: 3, name: "Sara", grade: 76 },
    { id: 4, name: "Zara", grade: 40 },
    { id: 5, name: "John", grade: 89 }
];
function getTopStudents() {
    var filterStudents = students.filter(function (user) { return user.grade > 70; });
    return filterStudents.map(function (user) { return "".concat(user.name, " scored ").concat(user.grade); });
}
console.log(getTopStudents());
var settings = [
    { key: "theme", value: "dark" },
    { key: "language", value: "en" },
    { key: "notifications", value: "enabled" }
];
function buildSettingsObject() {
    return settings.reduce(function (acc, value) {
        acc[value.key] = value.value;
        return acc;
    }, {});
}
console.log(buildSettingsObject());
var applicant = {
    name: "Harrum",
    email: "harrum@devmail.com",
    experience: 2,
    portfolio: "https://github.com/harrum"
};
// Conditional rendering
function evaluateApplicant(user) {
    if (user.experience >= 5 && user.portfolio) {
        return "Senior candidate with portfolio";
    }
    if (user.experience >= 3 && user.experience < 5) {
        return "Mid-level candidate";
    }
    if (user.experience < 3 && user.portfolio) {
        return "Junior candidate with portfolio";
    }
    if (user.experience < 3 && !user.portfolio) {
        return "Junior candidate - portfolio missing";
    }
    return "Invalid data";
}
console.log(evaluateApplicant(applicant));
var tasks = [];
function addTask(name) {
    var id = Date.now().toString();
    var task = {
        id: id,
        name: name,
        completedDates: []
    };
    tasks.push(task);
    return task;
}
console.log(addTask('new data'));
console.log(addTask('go gym'));
