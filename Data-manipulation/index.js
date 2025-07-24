// Array Manipulation

const users = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 17 },
  { name: "Zain", age: 30 },
  { name: "Mira", age: 16 }
];

function filterUsers (user){
    const filterAge = user.filter(user => user.age >= 18)
    const extractUser = filterAge.map(user => `${user.name} is an adult`)
    return extractUser
}
console.log(filterUsers(users))

// Object Manipulation 

const orders = {
  A101: { amount: 250, status: "shipped" },
  B202: { amount: 120, status: "pending" },
  C303: { amount: 90, status: "shipped" }
};

function filterOrders (order){
    return Object.keys(order).filter(orderId => orders[orderId].status === "shipped");
}
console.log(filterOrders(orders))

// Nested Object Destructuring 

const user = {
  id: 101,
  name: "Aisha",
  location: {
    country: "USA",
    city: "New York"
  },
  preferences: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false
    }
  }
};

function filterDetails (){
    return `${user.name} from ${user.location.city} prefer ${user.preferences.theme} and notifications: ${user.preferences.notifications.email} `
}
console.log(filterDetails())