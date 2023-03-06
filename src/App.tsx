import { useEffect, useState, createContext, useContext } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Editor from './Components/Editor/Editor'
import { EditorApi, useEditor } from './hooks/useEditor';
import { Grid, Box } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { noteStore } from './main'
import { NotesContext } from './context'
import { INotes } from './utils/interfaces'



function App() {
  const [notes, setNotes] = useState<INotes[]>([]);
  const [isTable, setIsTable] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const editorApi = useEditor()
  
  useEffect(() => {
    const data = localStorage.getItem('notes');
    if (data) {
      setNotes(JSON.parse(data))

    } 
  }, [])

  const setNewNotes = (notes: INotes[]) => {
    setNotes(notes);
  }

  const addNewNote = (note: INotes) => {
    const newNotes = [note, ...notes]
    setNotes(newNotes)
    changeIsActive(false)
    changeActiveIndex(0)
    localStorage.setItem('notes', JSON.stringify(newNotes))
  }

  const removeNote = (index: number) => {
    const newNotes = notes.filter(item => item != notes[index])
    setNotes(newNotes)
    console.log(newNotes)
    localStorage.setItem('notes', JSON.stringify(newNotes))
  }

  const changeIsTable = (table: boolean) => {
    setIsTable(table)
  }
  
  const changeIsActive = (active: boolean) => {
    setIsActive(active)
  }

  const changeActiveIndex = (index: number) => {
    setActiveIndex(index)
  }
  return (
    <NotesContext.Provider value={{
      notes,
      setNewNotes,
      addNewNote,
      removeNote,
      isTable,
      changeIsTable,
      isActive,
      changeIsActive,
      activeIndex,
      changeActiveIndex,
    }}>
    <Box className="App" sx={{
      maxHeight: '100%',
      maxWidth: '100vw'
    }}>
      <Grid container rowSpacing={0} className='app-container'>
        <Grid item xs={12} sx={{
          height: '65px'
        }}>      
          <Header/>
        </Grid>
        <Grid item xs={12} sx={{
          height: 'calc(100% - 65px)'
        }}>
          <Editor/>
        </Grid>
      </Grid>
    </Box>
    </NotesContext.Provider>
  )
}

export default App
