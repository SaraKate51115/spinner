let characters = '|/-\\|/-\\|'
let delay = 0;  

for (let char of characters) {
  setTimeout(() => {
    process.stdout.write('\r' + char);
  }, delay);
  delay += 200;
}
 