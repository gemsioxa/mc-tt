import React, { useContext } from 'react'
import {Box, Typography, TextareaAutosize, TextField} from '@mui/material'
import { observer } from 'mobx-react'
import { noteStore } from '../../../main'
import { NotesContext } from '../../../context'

function TextArea() {
  
  const {notes, activeIndex} = useContext(NotesContext)

  return (
    <Box sx={{
        // background:'red',
        width: '100%',
        height: 'calc(100vh - 65px)',
        maxHeight: 'calc(100vh - 65px)',
        overflowY: 'auto',
    }}>
        <Typography textAlign='center' sx={{
            width: '100%',
            fontSize: '0.9rem',
            fontWeight: '600',
            color: '#9e9e9f',
            margin: '10px 0',
            fontFamily: 'Roboto'
        }}>
            {'6 марта 2023 г. в 20:30'}
        </Typography>
        {/* <TextareaAutosize
          style={{ 
            overflowY: 'scroll',
            height: 'calc(100vh - 120px)', 
            width: 'calc(100% - 30px)', 
            resize: 'none', 
            padding: '0 15px', 
            background: 'none', 
            border: 'none',
            outline: '0',
            color: 'white',
            fontFamily: 'Roboto',
            fontSize: '1rem'
          }}
        /> */}
        <TextField
          id={'textArea_edit'}
          multiline
          defaultValue={notes[activeIndex].title ? notes[activeIndex].title + '\n' + notes[activeIndex].text : notes[activeIndex].text}
          variant="standard"
          sx={{
            width: '100%',
            height: 'calc(100vh - 110px)',
            '.css-1rb63tl-MuiInputBase-root-MuiInput-root': {
                padding: '0 15px',
                color: 'white',
                '&:before': {
                    border: 'none'
                },
                '&:after': {
                    border: 'none'
                },
                '&:hover:not(.Mui-disabled, .Mui-error):before': {
                    border: 'none'
                }
            },
          }} onChange={e => {
            notes[activeIndex].title = e.target.value.split('\n')[0]
            notes[activeIndex].text = e.target.value.split('\n').slice(1).join('\n')
            // noteStore.notes[noteStore.activeIndex].text = e.target.value 
            localStorage.setItem('notes', JSON.stringify(notes))
          }}/>         
    </Box>
  )
}

export default TextArea
