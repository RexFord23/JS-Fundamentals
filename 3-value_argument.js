const argu = process.argv.slice(2);

if (argu[0] == undefined ) {
    console.log("No argument");
} else {
    console.log(argu[0]);
}