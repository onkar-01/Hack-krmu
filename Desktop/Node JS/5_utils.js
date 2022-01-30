// Modules - Encapsulated code (only share minimum)
// CommonJS, every file is module (by default)
const sayHi = (name) => {
    console.log(`hello there ${name}`)
}
module.exports = sayHi;