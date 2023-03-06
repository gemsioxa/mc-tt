import React, { useContext, useEffect, useState } from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { NotesContext } from '../../../context'
import ListItem from './ListItem'
import { INotes } from '../../../utils/interfaces'

type Props = {
    date: string
}


export default function ListByDay(prop: Props) {

    const [loading, setLoading] = useState(true)
    const [dateNotes, setDateNotes] = useState<INotes[]>([])
    const {notes, addNewNote} = useContext(NotesContext)

    useEffect(() => {
        // const newNotes = [...]
        setDateNotes(notes.filter(item => new Date(item.date).toLocaleDateString('ru') == prop.date))
        setLoading(false)
        // console.log(newNotes)
    }, [notes])
    
    const showDay = ():string => {
        if (prop.date === new Date().toLocaleDateString('ru')) {
            return 'Сегодня'
        } else return prop.date
    }

  return (
    <>
        <Box sx={{
            borderBottom: '1px solid #545657',
            padding: '0 15px'
        }}>
            <Typography sx={{
                color: 'lightgrey',
                // fontSize: '1.1rem',
                fontWeight: '600',
                fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
                // fontFamily: 'roboto'
            }}>
                {showDay()}
            </Typography>
        </Box>
        <Box sx={{
        }}>
            <Grid container className='list-container' sx={{
                color: 'white',

                // padding: '10px',
                height: '100%',
                width: 'auto',
                margin: '15px'
            }}>
                {dateNotes?.map((item, index) => {
                    return <ListItem key={index + item.date} id={index} title={item.title} text={item.text} date={item.date}/>
                })}
            </Grid>
        </Box>
    </>
  )
}
