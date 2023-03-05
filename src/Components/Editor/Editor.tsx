import React from 'react'
import './Editor.sass'
import { Grid } from '@mui/material'
import List from './List/List'
import TextArea from './TextArea/TextArea'


export default function Editor() {
  return (
    <Grid container sx={{
        height: '100%'
    }}>
        <Grid item xs={3} sx={{
            background: '#212326',
            borderRight: '1px solid black'
        }}> 
            <List/>
        </Grid>
        <Grid item xs={9} alignItems='center' sx={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <TextArea/>
        </Grid>
    </Grid>
)
}
