import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import TableItem from './TableItem'
import TextArea from '../TextArea/TextArea'
import { displayStore } from '../../../App'
import { observer } from 'mobx-react'

function Table() {
  return (
    <Box sx={{
        // background: 'red',
        maxHeight: '100%',
        overflowY: 'scroll',
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
                    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
                    // fontFamily: 'roboto'
                }}>
                    {'Сегодня'}
                </Typography>
            </Box>
            <Grid container xs={12} rowSpacing={12} sx={{
                minHeight: '100vh'

            }}
            // columnSpacing={6}
            >
                <TableItem/>
                <TableItem/>
                <TableItem/>
                <TableItem/>
                <TableItem/>
                <TableItem/>
                <TableItem/>
                <TableItem/>
                <TableItem/>
                <TableItem/>
                <TableItem/>
                <TableItem/>
            </Grid>
        </>}
    </Box>
  )
}

export default observer(Table)