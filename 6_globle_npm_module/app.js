import chalk from "chalk"
import {notes} from "./notes.js"

const msg = notes()
console.log(msg)

const greenMsg = chalk.red.bold("warning")
console.log(greenMsg)

