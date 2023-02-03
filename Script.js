let names = ["John", "Jane", "Jim", "Jill", "Alex", "Ava"];

for (let i = 0; i < names.length; i++) {
  let name = names[i];
  let firstLetter = name[0];
  if (firstLetter === "J" || firstLetter === "j") {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}
