import React, { useContext, useState } from 'react'
import { NotesContext } from '../context/NoteContext'

function Note() {
  const {addNote}=useContext(NotesContext)
  const [titleMsg, setTitleMsg] = useState("")
  const [contentMsg, setContentMsg] = useState("")
  const submitHandler = (e) => {
    e.preventDefault()
    if(!titleMsg && !contentMsg) return;

    addNote({
      id:Date.now(),
      titleMsg,
      contentMsg,
    })
    setTitleMsg("")
    setContentMsg("")
  }
  return (
    <div className='p-5 flex items-center flex-col gap-10'>
      <form onSubmit={submitHandler} className='shadow-lg relative p-5 rounded-lg flex flex-col bg-white'>
        <input
          type="text"
          placeholder='Title'
          className='outline-none text-3xl'
          value={titleMsg}
          onChange={(e) => {
            setTitleMsg(e.target.value)
          }}
        />
        <textarea
          placeholder='Content'
          className='outline-none text-2xl h-20'
          value={contentMsg}
          onChange={(e) => {
            setContentMsg(e.target.value)
          }}
        />
        <button type='submit' className='bg-yellow-400 rounded-full h-12 w-12 p-2 right-5 cursor-pointer absolute
         -bottom-5'>Add</button>

      </form>
      
    </div>
  )
}

export default Note
