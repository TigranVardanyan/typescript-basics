// const person: {
//     name:string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
// // const person = { //this is better syntax
//     name: "Tigran",
//     age: 24,
//     hobbies: ['Sport', "Cooking"],
//     role: [2, 'author']
// }

// person.role.push('admin'); // push working here

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN,READ_ONLY,AUTHOR,CONTRIBUTOR =5}; // we can set value if need

const person = {
    name: "Tigran",
    age: 24,
    hobbies: ['Sport', "Cooking"],
    // role: ADMIN,
    role: Role.ADMIN,
}

console.log(person.name);


// person.role = [0, 'admin', 'user'] // but you can not assign more elements here


// person.role[1] = 10; // Type 'number' is not assignable to type 'string'

let favoriteActivities: string[];
// let favoriteActivities: any; // no error
// let favoriteActivities: any[]; // no error
// favoriteActivities = "sport"; // Type 'string' is not assignable to type 'string[]
favoriteActivities = ['Sport', 'Cooking'];
// favoriteActivities = ['Sport', 1]; // Type 'number' is not assignable to type 'string'

let otherFavoriteActivities: any[];
otherFavoriteActivities = ['Sport', 1]; // that's ok, but you loose type's benefits

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    // console.log(hobby.toFixed()) // Property 'toFixed' does not exist on type 'string'
    // console.log(hobby.map()) // Property 'map' does not exist on type 'string'
}

if (person.role === Role.ADMIN) {
    console.log('is admin')
}