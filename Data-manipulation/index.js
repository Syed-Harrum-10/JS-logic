// Array Manipulation

const users = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 17 },
  { name: "Zain", age: 30 },
  { name: "Mira", age: 16 },
];

function filterUsers(user) {
  const filterAge = user.filter((user) => user.age >= 18);
  const extractUser = filterAge.map((user) => `${user.name} is an adult`);
  return extractUser;
}
console.log(filterUsers(users));

// Object Manipulation

const orders = {
  A101: { amount: 250, status: "shipped" },
  B202: { amount: 120, status: "pending" },
  C303: { amount: 90, status: "shipped" },
};

function filterOrders(order) {
  return Object.keys(order).filter(
    (orderId) => orders[orderId].status === "shipped"
  );
}
console.log(filterOrders(orders));

// Nested Object Destructuring

const user = {
  id: 101,
  name: "Aisha",
  location: {
    country: "USA",
    city: "New York",
  },
  preferences: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
};

function filterDetails() {
  return `${user.name} from ${user.location.city} prefer ${user.preferences.theme} and notifications: ${user.preferences.notifications.email} `;
}
console.log(filterDetails());

// Spread & Rest Operator

const electronics = ["Laptop", "Phone", "Tablet"];
const accessories = ["Charger", "Headphones"];

const inventory = [...electronics, ...accessories];

function listInventory(...items) {
  return `We have ${items.join(", ")} in stock.`;
}

console.log(listInventory("Laptop", "Phone", "Charger"));

function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Harrum" });
    }, 1000);
  });
}

// Promises (Chaining)

function fetchOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["order1", "order2", "order3"]);
    }, 1000);
  });
}

fetchUser(101)
  .then((user) => {
    return fetchOrders(user.id).then((orders) => {
      return { user, orders };
    });
  })
  .then(({ user, orders }) => {
    console.log(`User ${user.name} has orders: ${orders.join(", ")}`);
  });

// Async/Await

function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Harrum" });
    }, 1000);
  });
}

function fetchOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["order1", "order2", "order3"]);
    }, 1000);
  });
}

async function getData(userId) {
  try {
    const user = await fetchUser(userId);     
    const orders = await fetchOrders(user.id);
    console.log(`User ${user.name} has orders: ${orders.join(", ")}`);
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
}

getData(101);

// Combined Logic

const rawUsers = [
  { id: 1, name: "Harrum", age: 25, country: "USA" },
  { id: 2, name: "Ali", age: 17, country: "CANADA" },
  { id: 3, name: "John", age: 30, country: "US" },
  { id: 4, name: "Ahmed", age: 19, country: "CANADA" }
];
function CombinedLogic() {
  const filtered = rawUsers
    .filter(user => user.country === "CANADA" && user.age >= 18)
    .map(({ name, age }) => `${name} is ${age} years old`);
    
  return filtered;
}
console.log(CombinedLogic())
