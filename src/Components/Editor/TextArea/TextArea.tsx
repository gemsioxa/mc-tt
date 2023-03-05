import React from 'react'
import {Box, Typography, TextField} from '@mui/material'
export default function TextArea() {
  return (
    <Box sx={{
        // background:'red',
        width: '100%',
        height: 'calc(100vh - 65px)',
        maxHeight: 'calc(100vh - 65px)',
        overflowY: 'hidden',
    }}>
        <Typography textAlign='center' sx={{
            width: '100%',
            fontSize: '0.9rem',
            fontWeight: '600',
            fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
            color: '#9e9e9f',
            margin: '10px 0'
            // fontFamily: 'roboto'
        }}>
            {'2 марта 2023 г. в 17:30'}
        </Typography>
        <TextField
          multiline
          variant="standard"
          sx={{
            width: '100%',
            height: '100%',
            '.css-1rb63tl-MuiInputBase-root-MuiInput-root': {
                padding: '0 15px',
                color: 'white',
                '&:before': {
                    border: 'none'
                },
                '&:after': {
                    border: 'none'
                },
                '&:hover:not(.Mui-disabled, .Mui-error):before': {
                    border: 'none'
                }
            },
          }}
        />
    </Box>
  )
}
