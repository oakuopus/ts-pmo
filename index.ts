var firstname: string = "John" ;
var age: number = 3;
var alive: boolean = true;


let greeting = "yap yap"

const addArrow = (n1:number, n2:number):number => n1+n2
const printResult = (num:number):void=>{
    console.log('result:'+ num)
}
let person:{
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
}

let product: {
    id: string;
    price: number;
    tags: string[];
    details: {
        title: string;
        description: string;
    }
}

enum Role{
    admin = "ADMIN",
    READ_ONLY = 0,
    AUTHOR = 100,
}

let resultington: string | number
resultington = 12

type Combinable = number |string;

type User = {name: string; age: number};

function greet(user:User){
    console.log("Hi, I am " + user.name)
}

function isOlder(user:User, checkAge: number){
    return checkAge > user.age;
}

let add: (a:number, b:number) => number;