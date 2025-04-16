let newArr = []

interface Contact{
    id: number,
    name: string,
    email: string,
    phoneNumber: number,
    isFavorite: boolean,
}

let contacts: Contact[]=[
    {
        id: 1,
        name: "Sydney Sweeney",
        email: "syd@gmail.com",
        phoneNumber: 6025556666,
        isFavorite: true,
    },
    {
        id: 2,
        name: "Ana De Armas",
        email: "Ana@gmail.com",
        phoneNumber: 9064445566,
        isFavorite: false,
    },
    {
        id: 3,
        name: "Montze",
        email: "Montze@gmail.com",
        phoneNumber: 6023331234,
        isFavorite: false,
    }
]


function newContact(name: string, email: string, phoneNumber: number, isFavorite: boolean){
    const freshContact: Contact = {
        id: contacts[contacts.length-1].id+1, 
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        isFavorite: isFavorite,
    }
    contacts.push(freshContact)
    return contacts
}

console.log(newContact("nasee", "nasee@gmail.com", 314420504, false))

function deleter(id: number, contacts: Contact[]){
    contacts = contacts.filter((cont)=> cont.id != id)
    return contacts
}

for (let x of deleter(2, contacts)) {
    if (x.isFavorite == true) {
        console.log(x.id, x.name.toUpperCase(), x.email, x.phoneNumber)
    }else{
        console.log(x.id, x.name, x.email, x.phoneNumber) 
    }
}


class Employee{
    public empName: string = "";
    protected empCode: number = 0
}
class SalesEmployee extends Employee{
    private department: string = "Sales";
    public checkCode = () => console.log(this.empCode)
}

let empObj = new SalesEmployee();
empObj.empName = "John"
empObj.checkCode()




class Employee2{
    readonly empCode: number;
    empName: string;
    constructor(empCode: number, empName: string){
        this.empCode = empCode;
        this.empName = empName;
    }
}

let empObj2 = new Employee2(10, "John");
empObj2.empName = "bill"


// abstract class Person2{
//     abstract name: string;
// }

// class Employee3 extends Person2{
//     name: string="";
//     constructor(name:string){
//         super()
//     }
// }

// let empObj3: Person = new Employee("James", 100)

get MostRecentReport({
    if(this.lastReport){
        return this.lastReport
    }
    throw new Error("No Report Found!")
})

set mostRecentReport(value: string){
    if(!value){
        throw new Error("Please pass a valid value!")
    }
    this.addReport(value)
}