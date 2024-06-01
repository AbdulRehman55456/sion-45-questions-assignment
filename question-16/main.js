"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestlist = ["sion", "toji", "sakuna"];
guestlist.unshift("Gojo");
guestlist.splice(Math.floor(guestlist.length / 2), 0, "geto");
guestlist.push("choso");
guestlist.forEach((guest) => {
    console.log(`Dear ${guest}, you all are invited to the dinner`);
});
