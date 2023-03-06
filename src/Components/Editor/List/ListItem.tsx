import React, { useContext } from 'react'
import { Grid, Box, Typography } from '@mui/material'
import { displayStore, noteStore } from '../../../main'
import { observer } from 'mobx-react'
import { INotes } from '../../../utils/interfaces'
import { Props } from '../../../utils/types'
import { NotesContext } from '../../../context'

function ListItem(prop: Props ) {

    const {changeActiveIndex, changeIsActive} = useContext(NotesContext)

    async function changeTextArea(id: number) {
        await changeIsActive(false)
        changeActiveIndex(id)
        changeIsActive(true)
    }
    return (
        <Grid item sm={12} sx={{
            cursor: 'pointer',
            borderRadius: '8px',
            // padding: '15px 0 0 25px',
            marginBottom: '15px',
            '&:hover': {
                background:'#464646',
            }
        }} onClick={() => {
            changeTextArea(prop.id)
        }}>
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
            <Typography noWrap={true} component='p' sx={{
                fontWeight: '800',
            }}>
                {prop.title || 'Нет заголовка'}
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
                <Typography noWrap={true} component='span' sx={{
                    fontSize: '0.9rem',
                    color: '#9e9e9f'
                }}>
                    {prop.text || 'Нет дополнительного текста'}
                </Typography>
            </Box>
        </Box>
        </Grid>
    )
}

export default ListItem