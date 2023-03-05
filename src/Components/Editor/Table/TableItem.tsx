import React from 'react'
import { Box, Typography, Grid, TextField } from '@mui/material'
import { displayStore } from '../../../App'

export default function TableItem() {
  return (
    <Grid item xs={6} sm={4} md={3}>
        <Box sx={{
            cursor: 'pointer',
            background: '#1e1e1e',
            border: '1px solid #2d2d2d',
            borderRadius: '8px',
            margin: '0 auto',
            width: '75%',
            height: '100%',
            // scale: '0.7',
            overflowY: 'hidden',
            '&:hover': {
                borderColor: '#f8b627',
                borderWidth: '1px',

            }
        }} onClick={() => displayStore.setIsActive(true)}>
            <Box sx={{
                padding: '15px'
            }}>
                <Typography component='p' sx={{
                    fontWeight: '600'
                }}>
                    {'Фолди'}
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
                {'Фолди'}
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
