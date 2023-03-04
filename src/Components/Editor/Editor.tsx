import React from 'react'
import './Editor.sass'
import { Grid } from '@mui/material'


export default function Editor() {
  return (
    <Grid container sx={{
        height: '100%'
    }}>
        <Grid item xs={3}>
            1.1
        </Grid>
        <Grid item xs={9}>
            2.2
        </Grid>
    </Grid>
)
}
