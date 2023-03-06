import { Box, Typography, Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { noteStore } from '../../../main'
import ListItem from './ListItem'
import { observer } from 'mobx-react'
import { NotesContext } from '../../../context'
import ListByDay from './ListByDay'

function List() {
    const {notes} = useContext(NotesContext)
    const [dateList, setDateList] = useState<string[]>([])
    // const notes = noteStore.notes
    useEffect(() => {
        let filteredDates: Set<string> = new Set()

        notes.forEach(item => {
            let dmy = new Date(item.date).toLocaleDateString('ru')
            filteredDates.add(dmy)            
        })
        setDateList([...filteredDates])
    }, [notes])
    
  return (
    <Box sx={{
        height: 'calc(100vh - 65px)',
        maxHeight: 'calc(100vh - 65px)',
        overflowY: 'auto',
    }}>
        {dateList.map((item, index) => {
            return <ListByDay key={index} date={item}/>
        })}
    </Box>
  )
}
export default List