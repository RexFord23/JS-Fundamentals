const arguCount = process.argv.length - 2;

if (arguCount == 0) {
    console.log("No argument");
} else if (arguCount == 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}