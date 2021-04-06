// const person: {
//     name:string;
//     age: number
// } = {
const person = { //this is better syntax
    name: "Tigran",
    age: 24,
    hobbies: ['Sport', "Cooking"],
}

console.log(person.name)

let favoriteActivities: string[];
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
