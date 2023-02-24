import fs from 'fs'
import chalk from 'chalk'

export const notes = function()
{
   return "your notes...."
}

export const addnote = function(title, body)
{
   const notes = loadnotes()

   const duplicateNotes = notes.filter(function(note){
      return note.title === title
   })

   if(duplicateNotes.length === 0)
   {
      notes.push({
         title: title,
         body: body
      })  
      saveNotes(notes)
      console.log("New note added")
   }
   else
   {
      console.log("Note title already taken!")
   }
}
export const removeNote = function(title, body)
{
   const notes = loadnotes()

   const KNotes = notes.filter(function(note){
      return note.title !== title
   })

   if(notes.length > KNotes.length)
   {
      console.log(chalk.green.inverse("Note removed..!"))
      saveNotes( KNotes)
   }
   else
   {
      console.log("No match found")
   }
}

const saveNotes = function(notes)
{
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json',dataJSON)
}

const loadnotes = function()
{
   try{
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
   }
   catch(e)
   {
      return[]
   }
}