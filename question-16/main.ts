let guestlist: string[] = ["sion", "toji", "sakuna"];

guestlist.unshift("Gojo");

guestlist.splice(Math.floor(guestlist.length / 2), 0, "geto");

guestlist.push("choso");

guestlist.forEach((guest) => {
  console.log(`Dear ${guest}, you all are invited to the dinner`);
});
