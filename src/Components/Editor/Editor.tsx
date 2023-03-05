import React, { useState } from 'react'
import './Editor.sass'
import { Grid } from '@mui/material'
import List from './List/List'
import TextArea from './TextArea/TextArea'
import Table from './Table/Table'


export default function Editor() {

    const [showTable, setShowTable] = useState(true)


    if(showTable) {
        return <Table/>
    } else {
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
    )}
}
