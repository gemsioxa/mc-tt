import React from 'react'
import { Box, Typography, Grid, TextField } from '@mui/material'
import { displayStore, noteStore } from '../../../main'
import { INotes } from '../../../utils/interfaces'
import { observer } from 'mobx-react'
type Props = {
    id: number,
    title: string,
    text: string
}
function TableItem(prop: Props) {
  return (
    <Grid item xs={6} sm={4} md={3} sx={{

    }}>
        <Box sx={{
            cursor: 'pointer',
            background: '#1e1e1e',
            border: '1px solid #2d2d2d',
            borderRadius: '8px',
            margin: '0 auto',
            width: '75%',
            height: '330px',
            // scale: '0.7',
            overflowY: 'hidden',
            '&:hover': {
                borderColor: '#f8b627',
                borderWidth: '1px',

            }
        }} onClick={() => {
            displayStore.setIsActive(true)
            noteStore.setActiveIndex(prop.id)}}>
            <Box sx={{
                padding: '15px'
            }}>
                <Typography component='p' sx={{
                    fontWeight: '600'
                }}>
                    {prop.title}
                </Typography>
                <Typography component='span'>
                    {prop.text}
                </Typography>
            </Box>
        </Box>
        <Box textAlign='center' sx={{
            marginTop: '10px',
            cursor: 'default'
        }}>
            <Typography component='p' sx={{
                fontWeight: '600'
            }}>
                {prop.title}
            </Typography>
            <Typography component='span' sx={{
                color: '#9e9e9f',
                fontWeight: '600'
            }}>
                {'17:30'}
            </Typography>
        </Box>
    </Grid>
  )
}
export default observer(TableItem)