// enum is an enumerated list that stores data in number format for storage space, but is still readable code. you can access its values in any object that you call it in
enum italianRot {
    shark = "tralalero tralala",
    tree = "brr brr patapim",
    drum = "tung tung tung tung tung sahur",
    coffee = "cappacinoo assassinooo",
}
console.log(italianRot.tree)


// interfaces create objects with properties that specify the data type before the property is given a value
interface italianRotTwo{
    plane: string;
    plane2: string;
}

const planes: italianRotTwo = {
    plane: "bombombini gusini",
    plane2: "bombardiro crocodilo"
}
console.log(planes.plane)


// fucntions in typescript are similar to functions in any code but they allow you to specify the data type of the value the function returns, or void if it returns no value
function returnRot(rot: string){
    return "welcome to the arena " + rot
}
console.log(returnRot(italianRot.drum))



enum userRole{
    Admin,
    Editor,
    Viewer,
}

var currentVariable : userRole = userRole.Editor;
console.log(currentVariable)


type Student = {name: string; gradeLevel: number; isEnrolled: boolean}

let printer: Student = {
    name: "reginald",
    gradeLevel: 2,
    isEnrolled: false,
}
console.log(printer)


function calculateTotal(price: number, taxRate: number){
    console.log(price + (price * taxRate))
}
calculateTotal(100, 0.02)