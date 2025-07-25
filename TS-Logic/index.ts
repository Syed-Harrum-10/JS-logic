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