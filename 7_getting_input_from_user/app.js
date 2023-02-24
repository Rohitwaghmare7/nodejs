import chalk from "chalk"
import {notes} from "./notes.js"

const msg = notes()
console.log(msg)

const greenMsg = chalk.red.bold("warning")
console.log(greenMsg)

const command = process.argv[2]

if(command === "add")
{
    console.log("Adding note")
}
else if(command === "remove")
{
    console.log("Removing note")
}
else
{
    console.log("Wrong command..!!!")
}