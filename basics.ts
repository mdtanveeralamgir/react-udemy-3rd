//primitive
let age: number = 20;
let _name: string = "John";
let isInstractor: boolean = false;
//complex types
let hobbies: string[] = ["music", "sports"];
let person: {
    name: string,
    age: number
}

//Union, multiple declaration to a single variable
let course: string | number;
course = "TypeScript";
course = 1234;

//Aliases
type Car = {
    make: string,
    model: string
}

let myCar: Car = {
    make: "Ford",
    model: "Mustang"
}