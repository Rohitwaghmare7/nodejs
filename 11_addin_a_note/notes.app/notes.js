import fs from 'fs'

export const getNotes = function()
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
