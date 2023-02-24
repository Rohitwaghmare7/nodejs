import yarg from "yargs"
import { hideBin } from "yargs/helpers"
import {notes} from "./notes.js"

const msg = notes()
console.log(msg)

const yargs = yarg(hideBin(process.argv))
yargs.version("1.1.0")

yargs.command(
    {
        command : "add",
        describe : "Add a note",
        handler : function()
        {
            console.log("Adding a note")
        }
    }
)

yargs.command(
    {
        command : "remove",
        describe : "Remove a note",
        handler : function()
        {
            console.log("Removing a note")
        }
    }
)
yargs.command(
    {
        command : "list",
        describe : "adding a list",
        handler : function()
        {
            console.log("adding a list")
        }
    }
)
yargs.command(
    {
        command : "read",
        describe : "reading ",
        handler : function()
        {
            console.log("reading")
        }
    }
)
yargs.parse()
