import react from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Editor from './Components/Editor/Editor'
import { Grid, Box } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

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
