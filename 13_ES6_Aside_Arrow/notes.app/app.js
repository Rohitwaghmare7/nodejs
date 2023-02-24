import yarg from "yargs"
import { hideBin } from "yargs/helpers"
import {notes,addnote,removeNote} from "./notes.js"

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
        
        handler : function(argv)
        {
            addnote(argv.title,argv.body)
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
        handler : function(argv)
        {
            removeNote(argv.title,argv.body)
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

