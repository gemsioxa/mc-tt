import { Box, Typography, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { noteStore } from '../../../main'
import ListItem from './ListItem'
import { observer } from 'mobx-react'
import { NotesContext } from '../../../context'

function List() {
    const {notes} = useContext(NotesContext)
    // const notes = noteStore.notes

  return (
    <Box sx={{
        height: 'calc(100vh - 65px)',
        maxHeight: 'calc(100vh - 65px)',
        overflowY: 'auto',
    }}>
        <Box sx={{
            borderBottom: '1px solid #545657',
            padding: '0 15px'
        }}>
            <Typography sx={{
                color: 'lightgrey',
                // fontSize: '1.1rem',
                fontWeight: '600',
                fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
                // fontFamily: 'roboto'
            }}>
                {'Сегодня'}
            </Typography>
        </Box>
        <Box sx={{
        }}>
            <Grid container className='list-container' sx={{
                color: 'white',

                // padding: '10px',
                height: '100%',
                width: 'auto',
                margin: '15px'
            }}>
                {notes.map((item, index) => {
                    return <ListItem key={index} id={index} title={item.title} text={item.text}/>
                })}
            </Grid>
        </Box>
    </Box>
  )
}
export default List