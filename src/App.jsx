import { useState } from 'react'
import Header from './component/Header'
import Note from './component/Note'
import Footer from './component/Footer'
import { NotesProvider } from './context/NoteContext'
import AddNote from './component/AddNote'


  function App() {
    
  return (
    <NotesProvider>
      <Header/>
      <Note/>
      <div className="p-10 flex flex-col items-center gap-10">
        <AddNote/>
      </div>
      <Footer/>
    </NotesProvider>
  );
}


export default App
