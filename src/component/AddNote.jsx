import React, { useContext } from 'react'
import { NotesContext } from '../context/NoteContext'

function AddNote() {
    const {notes,deleteNote}=useContext(NotesContext)
  return (
    <div className="flex gap-6 flex-wrap ">
      {notes.map((note)=>(
        <div key={note.id}
            className="bg-white shadow-xl rounded-2xl p-6 w-70  relative">
            <h1 className="font-bold text-2xl ">{note.titleMsg}</h1>
          <p className="text-lg">{note.contentMsg}</p>
            <button  onClick={()=>{
                deleteNote(note.id)
            }} className="absolute bottom-3 right-3 text-yellow-500 font-bold uppercase cursor-pointer hover:text-yellow-600">Delete</button>
        </div>
      ))}
    </div>
  )
}

export default AddNote
