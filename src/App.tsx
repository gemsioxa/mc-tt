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
  const styles = (theme: any) => ({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.4em'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey'
      }
    }
  });

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
