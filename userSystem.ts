// Enums, aliases, and functions are employed in typescript to predefine types and keep storage to a minimum. this minimizes errors, and always for easy scalability by simply adding new properties

enum role {
    Admin = "Admin",
    Moderator = "Moderator",
    Member = "Member",
    Guest = "Guest",
}

enum statusington {
    Active = "Active",
    Inactive = "Inactive",
    Suspend = "Suspend",
    Pending = "Pending"
}

type Users = {
    id: number,
    lname: string,
    gmail: string,  
    status: statusington,
    role: role,
}

const peopleList: Users[]=[
    {
        id: 4,
        lname: "koop",
        gmail: "koop@aol.com",
        status: statusington.Active,
        role: role.Guest
    },
    {
        id:3,
        lname: "sammer",
        gmail: "sammer@gmail.com",
        status: statusington.Inactive,
        role: role.Moderator
    },
    {
        id: 2,
        lname: "smith",
        gmail: "smith@aol.com",
        status: statusington.Pending,
        role: role.Guest
    },
    {
        id: 234,
        lname: "Johnson",
        gmail: "Johnson@aol.com",
        status: statusington.Active,
        role: role.Admin,
    }
]


function canAccess(User: Users): boolean{
    return (User.role == role.Admin || User.role == role.Moderator) && User.status == statusington.Active
}




function InactiveUsers(users: Users[]): Users[]{
    let Suspington: Users[] = users.filter(user => user.status == statusington.Inactive)
    Suspington.forEach(user => {user.status = statusington.Suspend})
    return Suspington
}

for(let i in peopleList){
    console.log(canAccess(peopleList[i]))
}
console.log(InactiveUsers(peopleList))

//
