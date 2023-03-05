import { Container, Box, Typography, Grid } from '@mui/material'
import React from 'react'
import ListItem from './ListItem'

export default function List() {
  return (
    <Box sx={{
        height: 'calc(100vh - 65px)',
        maxHeight: 'calc(100vh - 65px)',
        overflowY: 'scroll',
    }}>
        <Box sx={{
            borderBottom: '1px solid #545657',
            padding: '0 10px'
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
                margin: '10px'
            }}>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </Grid>
        </Box>
    </Box>
  )
}
