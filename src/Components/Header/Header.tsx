import styled from '@emotion/styled'
import {FormatListBulleted, GridView, DeleteOutlineOutlined, Create, FormatColorTextRounded, SearchRounded, ArrowBackIosNewRounded} from '@mui/icons-material'
import { Grid, TextField, InputAdornment, Box } from '@mui/material'
import Button from '@mui/material/Button'
import { borderColor, borderRadius } from '@mui/system'
import React, { useState } from 'react'
import './Header.sass'
export default function Header() {

  const [showTable, setShowTable] = useState(false)

  const HeaderButton = styled(Button) ({
    backgroundColor: 'none',
    // height: 'max-content',
    color: 'grey',
    padding: 5,
    margin: '0 5px',
    minWidth: 'max-content',
    border: 'none',
    '&:hover': {
      backgroundColor: '#2d2d32'
    },
    '&:active': {
      border: 'none'
    },
    '&:disabled': {
      color: '#545657'
    }
  })
  const tableShowing = showTable ? {
    bgColor: '#212225',
    brVisibilityList: 'none',
    brVisibilityTable: '1px solid #545657'
  } : 
  {
    bgColor: '#212326',
    brVisibilityList: '1px solid black',
    brVisibilityTable: 'none'
  }
  return (
    <Grid container rowSpacing={1}  sx={{
      width: '100%',
      height: '73px',
      backgroundColor: 'white',
      
    }}>
      <Grid item xs={3} alignItems='center' sx={{
        borderRight: tableShowing.brVisibilityList,
        backgroundColor: tableShowing.bgColor,
        display:'flex',
      }}>
        <Box alignItems='center' sx={{
          borderRight: tableShowing.brVisibilityTable,
          width: '100%',
          height: '50%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 5px'
        }}>
          <Box>
            <HeaderButton onClick={() => setShowTable(false)}><FormatListBulleted/></HeaderButton>
            <HeaderButton onClick={() => setShowTable(true)}><GridView/></HeaderButton>
            {showTable ? <HeaderButton disabled><ArrowBackIosNewRounded/></HeaderButton> : null}
          </Box>
          <Box sx={{
            display: 'flex'
          }}>
            <HeaderButton><DeleteOutlineOutlined/></HeaderButton>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={9} alignItems='center' alignContent='baseline' sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 5px',
        backgroundColor: '#212225'
      }}>
        <Box sx={{
          width: '10%',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <HeaderButton><Create/></HeaderButton>
          <HeaderButton><FormatColorTextRounded/></HeaderButton>
        </Box>
        <TextField  placeholder='Поиск' InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRounded />
              </InputAdornment>
            ),
          }} sx={{
            '.css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#28282d'
            },
            borderRadius: 8,
            '.css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#28282d',
            },
            'div': {
              color: 'grey',
              'fieldset': {
                borderColor: '#28282d',
                borderRadius: '8px',
                '&:hover': {
                  borderColor: '#28282d'
                }
              }
            },
            'input': {
              color: 'grey',
              padding: '5px 20px 5px 0'
            },
          }}/>
      </Grid>
    </Grid>
  )
}
