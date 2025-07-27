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

// Interface + Object Manipulation

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const users: User[] = [
  { id: 1, name: "Harrum", email: "harrum@example.com", isActive: true },
  { id: 2, name: "Ali", email: "ali@example.com", isActive: false },
  { id: 3, name: "Sara", email: "sara@example.com", isActive: true }
];

function getActiveUserEmails(user: User[]): string[] {
    const filterUser = user.filter(user => user.isActive === true)
    return filterUser.map(user => user.email)
}
console.log(getActiveUserEmails(users))

// Destructuring + Type Annotation

interface Profile {
  id: number;
  name: string;
  contact: {
    email: string;
    phone: string;
  };
  preferences: {
    theme: "light" | "dark";
    language: string;
  };
}

const userProfile: Profile = {
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

function describeUser(profile: Profile): string{
    return `${profile.name} prefers ${profile.preferences.theme} and can be contacted at ${profile.contact.email}`
}

console.log(describeUser(userProfile))

// Generics + Spread Operator

function mergeArrays <T> (ArrayFirst: T[], ArraySecond: T[]): T[]{
    const mergeArray = [...ArrayFirst, ...ArraySecond]
    return mergeArray
}

console.log(mergeArrays<string>(["a", "b"], ["c"]))

interface Post {
  id: number;
  title: string;
  published: boolean;
}

const allPosts: Post[] = [
  { id: 1, title: "Learn TS", published: true },
  { id: 2, title: "Learn JS", published: false },
  { id: 3, title: "Learn Node", published: true }
];

// Promises + Return Type

function fetchPublishedPosts (post: Post[]): Promise<Post[]>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           const filterPost = post.filter(post => post.published === true)
           if(filterPost.length > 0){
            return resolve(filterPost)
           }else {
            return reject("No posts found.")
           }
        }, 1000)
    })
}

fetchPublishedPosts(allPosts).then(user => {
    console.log("Posts:", user)
}).catch((res)=>{
    console.log(res)
})

// async/await 

async function getData(): Promise<void> {
  try {
    const data = await fetchPublishedPosts(allPosts);
    console.log("Published Posts:", data);
  } catch (err) {
    console.error("Something went wrong:", err);
  }
}

getData();


// Logic Drill 

type userData = {
  id: number,
  name: string,
  lastLogin: string
  actions: number
}

const userActivity: userData[] = [
  { id: 1, name: "Harrum", lastLogin: "2025-07-20", actions: 14 },
  { id: 2, name: "Ali", lastLogin: "2025-07-01", actions: 0 },
  { id: 3, name: "Sara", lastLogin: "2025-07-24", actions: 25 },
  { id: 4, name: "Zara", lastLogin: "2025-06-30", actions: 3 },
  { id: 5, name: "John", lastLogin: "2025-07-23", actions: 19 }
];


function getEngagedUsers() {
  const today = new Date();
  const sevenDaysAgo = new Date(today.getTime() - (7 * 24 * 60 * 60 * 1000));
  
  const year = sevenDaysAgo.getFullYear();
  const month = String(sevenDaysAgo.getMonth() + 1).padStart(2, '0');
  const day = String(sevenDaysAgo.getDate()).padStart(2, '0');
  const cutoffDate = `${year}-${month}-${day}`;
  
  const engagedUsers = userActivity.filter(user => 
    user.lastLogin >= cutoffDate && user.actions > 0
  );
  const action = engagedUsers.filter(user => user.actions > 10)
  return action.map(user => `${user.name} (${user.actions} actions)`);
}
console.log(getEngagedUsers())


// Object transformation 

type UserType = {
  id: number,
  name: string,
  role: string
}

const userObject: UserType[] = [
  { id: 1, name: "Harrum", role: "admin" },
  { id: 2, name: "Ali", role: "user" },
  { id: 3, name: "Sara", role: "moderator" }
];

function createUserLookup(){
  const userFilter = Object.keys(userObject).reduce((accumulator, key) => {
    accumulator[key] = userObject[key];
    return accumulator;
  }, {});
  return userFilter
}

console.log(createUserLookup())

// Destructuring

type userProduct = {
  id: number,
  title: string,
  specs: {
    cpu: string,
    ram: string,
    storage: string
  },
  price: number
}


const product: userProduct = {
  id: 101,
  title: "Gaming Laptop",
  specs: {
    cpu: "Intel i7",
    ram: "16GB",
    storage: "1TB SSD"
  },
  price: 1500
};

function getSpecsSummary(product){
  return `${product.title} comes with ${product.specs.cpu}, ${product.specs.ram} and ${product.specs.storage}`
}
console.log(getSpecsSummary(product))

// Spread + Rest Pattern

const electronics: string[] = ["Laptop", "Phone", "Tablet"];
const accessories: string[] = ["Charger", "Mouse"];

function combineInventory(): string {
  const allItems = [...electronics, ...accessories];
  const [mainProduct, ...otherItems] = allItems;

  return `Main product is ${mainProduct}. Other items: ${otherItems.join(", ")}`;
}

console.log(combineInventory())

// Filter + Map

type Student = {
  id: number,
  name: string,
  grade: number
}

const students: Student[] = [
  { id: 1, name: "Harrum", grade: 92 },
  { id: 2, name: "Ali", grade: 58 },
  { id: 3, name: "Sara", grade: 76 },
  { id: 4, name: "Zara", grade: 40 },
  { id: 5, name: "John", grade: 89 }
];

function getTopStudents(){
  const filterStudents = students.filter(user => user.grade > 70)
  return filterStudents.map(user => `${user.name} scored ${user.grade}`)
}

console.log(getTopStudents())


type setting = {
  key: string,
  value: string
}

const settings: setting[] = [
  { key: "theme", value: "dark" },
  { key: "language", value: "en" },
  { key: "notifications", value: "enabled" }
];


function buildSettingsObject(): Record<string, string> {
  return settings.reduce((acc, value) => {
    acc[value.key] = value.value;
    return acc; 
  }, {} as Record<string, string>); 
}

console.log(buildSettingsObject())


type Applicant = {
  name: string;
  email: string;
  experience: number; 
  portfolio?: string; 
};

const applicant: Applicant = {
  name: "Harrum",
  email: "harrum@devmail.com",
  experience: 2,
  portfolio: "https://github.com/harrum"
};

// Conditional rendering

function evaluateApplicant(user: Applicant): string {
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


console.log(evaluateApplicant(applicant))