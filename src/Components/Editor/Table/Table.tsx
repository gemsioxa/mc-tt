import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import TableItem from './TableItem'
import TextArea from '../TextArea/TextArea'
import { displayStore, noteStore } from '../../../main'
import { observer } from 'mobx-react'

function Table() {

    const notes = noteStore.notes

  return (
    <Box sx={{
        // background: 'red',
        maxHeight: '100%',
        overflowY: 'auto',
        padding: '0 15px'
    }}>
        {displayStore._isActive ? <TextArea/> : 
        <>
            <Box sx={{
                padding: '25px 0 10px 0'
            }}>
                <Typography sx={{
                    color: 'lightgrey',
                    // fontSize: '1.1rem',
                    fontWeight: '600',
                    fontFamily: 'Roboto'
                }}>
                    {'Сегодня'}
                </Typography>
            </Box>
            <Grid container xs={12} rowSpacing={12} sx={{
                minHeight: 'calc(100vh - 35px)'

            }}
            // columnSpacing={6}
            >
                {notes.map((item, index) => {
                    return <TableItem id={index} title={item.title} text={item.text}/>
                })}
            </Grid>
        </>}
    </Box>
  )
}

export default observer(Table)