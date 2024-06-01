let places: string[] = ["canada", "england", "norway", "belgium", "australia"];
console.log("original order", places);

console.log("alphabetical order", places.slice().sort());

console.log("original order", places);

console.log("reverse alphabetical order", places.slice().sort().reverse());

console.log("original order", places);

places.reverse();
console.log("reverse order", places);

places.reverse();
console.log("back to original", places);

console.log("sorted in alphabetical order", places.slice().sort());

console.log(
  " sorted in reverse alphabetical order",
  places.slice().sort().reverse()
);
