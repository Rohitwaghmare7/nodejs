import yarg from "yargs"
import { hideBin } from "yargs/helpers"
import {notes,addnote,removeNote, Listnotes} from "./notes.js"

const msg = notes()
console.log(msg)

const yargs = yarg(hideBin(process.argv))
yargs.version("1.1.0")

yargs.command(
    {
        command : "add",
        describe : "Add a note",
        builder : { 
            title: {
                describe: "Note title",
                demandOption: true,
                type: "string"
            },
            body: {
                describe: "Note body",
                require: true,
                type: "string"
            }
        },
        handler : (argv) => {
            addnote(argv.title, argv.body)
        }
    }
)
yargs.command(
    {
        command : "remove",
        describe : "Remove a note",
        builder : { 
            title: {
                describe: "Note title",
                demandOption: true,
                type: "string"
            },
            body: {
                describe: "Note body",
                require: true,
                type: "string"
            }
        },
        handler : (argv) => {
            removeNote(argv.title, argv.body)
        }
    }
)
yargs.command(
    {
        command : "list",
        describe : "adding a list",
        handler : () => {
            Listnotes()
        }
    }
)
yargs.command(
    {
        command : "read",
        describe : "Read a note",
        handler : () => {
            console.log("reading")
        }
    }
)
yargs.parse()