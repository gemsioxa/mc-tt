import React from 'react'
import {Box, Typography, TextareaAutosize} from '@mui/material'
export default function TextArea() {
  return (
    <Box sx={{
        // background:'red',
        width: '100%',
        height: 'calc(100vh - 65px)',
        maxHeight: 'calc(100vh - 65px)',
        // overflowY: 'scroll',
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
        <TextareaAutosize
          style={{ 
            overflowY: 'scroll',
            height: 'calc(100vh - 120px)', 
            width: 'calc(100% - 30px)', 
            resize: 'none', 
            padding: '0 15px', 
            background: 'none', 
            border: 'none',
            outline: '0',
            color: 'white',
            fontFamily: 'Roboto',
            fontSize: '1rem'
          }}

          // variant with TextArea
          // variant="standard"
          // sx={{
          //   width: '100%',
          //   height: 'calc(100vh - 110px)',
          //   '.css-1rb63tl-MuiInputBase-root-MuiInput-root': {
          //       padding: '0 15px',
          //       color: 'white',
          //       '&:before': {
          //           border: 'none'
          //       },
          //       '&:after': {
          //           border: 'none'
          //       },
          //       '&:hover:not(.Mui-disabled, .Mui-error):before': {
          //           border: 'none'
          //       }
          //   },
          // }}
        />
    </Box>
  )
}
