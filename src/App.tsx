import react, { useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Editor from './Components/Editor/Editor'
import { Grid, Box } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { noteStore } from './main'

export function getItems () {
  if (localStorage.getItem('notes')) {
    const data = localStorage.getItem('notes')
    // console.log(data)
    noteStore.setNotes(JSON.parse(data))

  } else {
    // localStorage.setItem('notes', JSON.stringify(noteStore.notes))
  }
  // localStorage.removeItem('notes')
  // localStorage.setItem('notes', JSON.stringify(noteStore.notes))
  // console.log(localStorage.getItem('notes'))
}

function App() {

  
  useEffect(() => {
    getItems()
  }, [])

  return (
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
  )
}

export default App
