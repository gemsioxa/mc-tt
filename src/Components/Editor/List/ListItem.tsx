import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import { displayStore } from '../../../App'
import { observer } from 'mobx-react'

function ListItem() {
  return (
    <Grid item sm={12} sx={{
        cursor: 'pointer',
        borderRadius: '8px',
        // padding: '15px 0 0 25px',
        marginBottom: '15px',
        '&:hover': {
            background:'#464646',
        }
    }} onClick={() => displayStore.setIsActive(true)}>
        <Box sx={{
            margin: '15px 0 0 25px',
            padding: '0 25px 15px 0',
            width: 'auto',
            borderBottom: '1px solid #464646',
            boxSizing: 'border-box',
            '&:hover': {
                borderBottom: '0',
                paddingBottom: '16px',
            }
        }}>
        <Typography component='p' sx={{
            fontWeight: '800',
        }}>
            {'Фолди'}
        </Typography>
        <Box alignItems='end' sx={{
            display: 'flex',
            width: 'auto'
        }}>
            <Typography component='span' sx={{
                fontWeight: '800',
                marginRight: '5px'
            }}>
                {'17:30'}
            </Typography>
            <Typography component='span' sx={{
                fontSize: '0.9rem',
                color: '#9e9e9f'
            }}>
                {'Нет дополнительного текста'}
            </Typography>
        </Box>
        </Box>
    </Grid>
  )
}

export default observer(ListItem)