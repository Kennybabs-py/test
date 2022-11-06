function repeat(size) {
  let hash = "#";
  let char = "*";
  let blank = "";
  let newHash = "";

  for (let i = 1; i <= size; i++) {
    while (i <= size) {
      blank += char;
    }
    console.log(blank);
  }

  // if (size > 0) {
  //   for (let i = 1; i <= size; i++) {
  //     space = size - i;
  //   }
  //   console.log(blank);
  //   console.log("\n");
  // }
}
repeat(3);
