const arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', "\n"];
const spinner = function() {
  let time = 100;
  for (let lines of arr) {
    time += 200;
    setTimeout(() => {
      process.stdout.write(lines);
    }, time)
  }
};

spinner(arr);