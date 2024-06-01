let guestlist: string[] = ["sion", "megumi", "sakuna", "Toji", "king"];
console.log(
  "unfortunately the new dinner table wont arrive so we can invite only two peoples"
);

while (guestlist.length > 2) {
  let removedguests: string | undefined = guestlist.pop();
  if (removedguests !== undefined) {
    console.log(`Sorry ${removedguests} We Cant Invite You`);
  }
}

guestlist.forEach((guest) => {
  console.log(`Dear ${guest}, You Are Still Invited For The Dinner `);
});

guestlist.splice(0, guestlist.length);
console.log("new updated list of array", guestlist);
