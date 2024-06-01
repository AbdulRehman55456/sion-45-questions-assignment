"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
//Version that fails
alien_color = "red";
if (alien_color == "green") {
    // No output because the condition is false
}
