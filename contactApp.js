"use strict";
let newArr = [];
let contacts = [
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
];
function newContact(name, email, phoneNumber, isFavorite) {
    const freshContact = {
        id: contacts[contacts.length - 1].id + 1,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        isFavorite: isFavorite,
    };
    contacts.push(freshContact);
    return contacts;
}
console.log(newContact("nasee", "nasee@gmail.com", 314420504, false));
function deleter(id, contacts) {
    contacts = contacts.filter((cont) => cont.id != id);
    return contacts;
}
for (let x of deleter(2, contacts)) {
    if (x.isFavorite == true) {
        console.log(x.id, x.name.toUpperCase(), x.email, x.phoneNumber);
    }
    else {
        console.log(x.id, x.name, x.email, x.phoneNumber);
    }
}
