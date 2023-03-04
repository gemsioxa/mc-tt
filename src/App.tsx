import react from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Editor from './Components/Editor/Editor'
import { Grid, Box } from '@mui/material'

function App() {

  return (
    <Box className="App">
      <Grid container className='app-container'>
        <Grid item xs={12}>      
          <Header/>
        </Grid>
        <Grid item xs={12}>
          <Editor/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
