import fs from "fs";
import chalk from "chalk";

export const notes = () => "your notes....";

export const addnote = (title, body) => {
  const notes = loadnotes();

  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added");
  } 
  else {
    console.log("Note title already taken!");
  }
};

export const removeNote = (title, body) => {
  const notes = loadnotes();

  const KNotes = notes.filter((note) => note.title !== title);

  if (notes.length > KNotes.length) {
    console.log(chalk.red.inverse("Note removed..!"));
    saveNotes(KNotes);
  } 
  else {
    console.log("No match found");
  }
};

export const Listnotes = () => {
  const notes = loadnotes();

  console.log(chalk.inverse("your notes"));
  notes.forEach((note) => console.log(note));
};

export const readNote = (title) => {
  const notes = loadnotes();

  const note = notes.find((note) => {
    return note.title === title;
  });

  if (note) {
    console.log(chalk.green("Note Title: " + note.title));
    console.log("Note Body: " + note.body);
  }
   else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadnotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }
   catch (e){
    return [];
  }
};
