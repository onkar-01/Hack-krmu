// process.stdout.write("hello ");
// process.stdout.write("wrold\n\n");

const question = [
    "what is your name?",
    "What would you rather be doing?",
    "what is your preferred programming language?"
]
const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${question[i]}`);
    process.stdout.write(` > `);
}
ask();

process.stdin.on("data", data => {
    process.stdout.write(`\n\n ${data.toString().trim()}\n\n`);
    process.exit();
})