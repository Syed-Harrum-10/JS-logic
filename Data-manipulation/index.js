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