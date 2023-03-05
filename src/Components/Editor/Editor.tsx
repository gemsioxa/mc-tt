import React, { useState } from 'react'
import './Editor.sass'
import { Grid } from '@mui/material'
import List from './List/List'
import TextArea from './TextArea/TextArea'
import Table from './Table/Table'
import { observer } from 'mobx-react'
import { displayStore } from '../../App'


function Editor() {

    if (displayStore._isTable && !displayStore._isActive) {
        return <Table/>
    } else {
        return (
            <Grid container sx={{
                height: '100%'
            }}>
                {displayStore._isTable || <Grid item xs={3} sx={{
                    background: '#212326',
                    borderRight: '1px solid black'
                }}> 
                    <List/>
                </Grid>}
                <Grid item xs={displayStore._isTable ? 12 : 9} alignItems='center' sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {displayStore._isActive && 
                    <TextArea/>}
                </Grid>
            </Grid>
        )
    }
}
export default observer(Editor);
