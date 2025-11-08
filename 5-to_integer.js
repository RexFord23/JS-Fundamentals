const argu = process.argv[2];
const num = parseInt(argu, 10);

if (!isNaN(num)) {
    console.log(`My number: ${num}`);
} else {
    console.log("Not a number");
}
