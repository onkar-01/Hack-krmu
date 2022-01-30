// console.log(process.pid);
// console.log(process.versions.node);
// console.log(process.argv);
// const [,,firstname, lastname] = process.argv;
// console.log(`my name is ${firstname} ${lastname}`);

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}
const greeting = grab("--greeting");
const user = grab("--user");

console.log(`my name is ${greeting} ${user}`);