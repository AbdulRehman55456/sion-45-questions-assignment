let guestlist: string[] = ["sion", "gojo", "toji", "megumi"];

let unabletoattend: string = guestlist.splice(0, 1)[0];
console.log(`${unabletoattend} is unable to attend the dinner `);

guestlist.push("talha");

guestlist.forEach((guest) => {
  console.log(`Dear ${guest} you are invited to the dinner.`);
});
