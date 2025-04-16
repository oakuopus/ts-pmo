class Person{
    constructor(id:number, name: string, ssn:string, email:string){
        this.id = id
        this._ssn = ssn
        this.email = email
    }
    //readonly property can be access but not modified
    public readonly id: number=0;

    //private property can only be accessed inside of this class
    private _ssn:string 

    //protected property can be accessed in this class and subclass
    protected email: string 
}

let noael = new Person(3144, "Noael Sameer", "345-34-4545", "nsamee443@west-mec.edu")

class Circle{
    static pi: number = 3.14;
    static findArea = (rad:number) =>
    Circle.pi * rad **2
}

Circle.pi
Circle.findArea(10)