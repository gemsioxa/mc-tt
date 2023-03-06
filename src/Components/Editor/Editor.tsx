import React, { useContext, useState } from 'react'
import './Editor.sass'
import { Grid } from '@mui/material'
import List from './List/List'
import TextArea from './TextArea/TextArea'
import Table from './Table/Table'
import { observer } from 'mobx-react'
import { displayStore } from '../../main'
import { NotesContext } from '../../context'


function Editor() {

    const {isTable, isActive} = useContext(NotesContext)


    if (isTable && !isActive) {
        return <Table/>
    } else {
        return (
            <Grid container sx={{
                height: '100%'
            }}>
                {isTable || <Grid item xs={3} sx={{
                    background: '#212326',
                    borderRight: '1px solid black'
                }}> 
                    <List/>
                </Grid>}
                <Grid item xs={isTable ? 12 : 9} alignItems='center' sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {isActive && 
                    <TextArea/>}
                </Grid>
            </Grid>
        )
    }
}
export default Editor;
