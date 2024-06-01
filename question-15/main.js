"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestlist = ["sion", "gojo", "toji", "megumi"];
let unabletoattend = guestlist.splice(0, 1)[0];
console.log(`${unabletoattend} is unable to attend the dinner `);
guestlist.push("talha");
guestlist.forEach((guest) => {
    console.log(`Dear ${guest} you are invited to the dinner.`);
});
