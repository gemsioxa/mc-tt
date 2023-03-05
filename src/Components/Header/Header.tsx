import styled from '@emotion/styled'
import {FormatListBulleted, GridView, DeleteOutlineOutlined, Create, FormatColorTextRounded, SearchRounded, ArrowBackIosNewRounded, RuleRounded} from '@mui/icons-material'
import { Grid, TextField, InputAdornment, Box, Modal, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { borderColor, borderRadius } from '@mui/system'
import React, { useState } from 'react'
import { displayStore } from '../../App'
import { observer } from 'mobx-react'
import './Header.sass'
function Header() {
  
  const [showDelete, setShowDelete] = useState(false)
  const handleOpen = () => setShowDelete(true)
  const handleClose = () => setShowDelete(false)

  // if editing in table display mode
  const editInTable = displayStore._isTable && displayStore._isActive
  // if editing is active in any mode
  const editActive = displayStore._isActive

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#2d2d32',
    // border: '2px solid #000',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
    padding: '32px 0 0'
  };

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

  const tableShowing = displayStore._isTable ? {
    bgColor: '#212225',
    btnBackground_table: '#2d2d32',
    btnBackground_list: 'none',
    brVisibilityList: 'none',
    brVisibilityTable: '1px solid #545657'
  } : 
  {
    bgColor: '#212326',
    btnBackground_table: 'none',
    btnBackground_list: '#2d2d32',
    brVisibilityList: '1px solid black',
    brVisibilityTable: 'none'
  }


  return (
    <Grid container rowSpacing={1}  sx={{
      width: '100%',
      height: '73px',
      backgroundColor: 'white',
      
    }}>
      {/* modal delete */}
      <div>
        <Modal
          open={showDelete}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} textAlign='center'>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Удалить заметку?
            </Typography>
            {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            <Box sx={{
              marginTop: '32px',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              'button': {
                display: 'flex',
                textAlign: 'center',
                width: '100%',
                color: 'white'
              }
            }}>
              <Button 
              onClick={handleClose}
              sx={{
                borderBottomLeftRadius: '8px'
              }}>{'Отмена'}</Button>
              <Button 
              onClick={handleClose}
              sx={{
                borderBottomRightRadius: '8px'
              }}>{'Удалить'}</Button>
            </Box>
          </Box>
        </Modal>
      </div>
      {/* header leftside */}
      <Grid item xs={editInTable ? 7 : 3} alignItems='center' sx={{
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
          padding: '0 10px'
        }}>
          <Box>
            <HeaderButton onClick={() => displayStore.setIsTable(false)} sx={{
              background: tableShowing.btnBackground_list
            }}>
              <FormatListBulleted/>
            </HeaderButton>
            <HeaderButton onClick={() => displayStore.setIsTable(true)} sx={{
              background: tableShowing.btnBackground_table
            }}>
              <GridView/>
            </HeaderButton>
            {displayStore._isTable ? displayStore._isActive ?
            <HeaderButton onClick={() => displayStore.setIsActive(false)}>
              <ArrowBackIosNewRounded/>
            </HeaderButton> :
            <HeaderButton disabled>
              <ArrowBackIosNewRounded/>
            </HeaderButton> 
            : null}
          </Box>
          <Box sx={{
            display: 'flex'
          }}>
            {displayStore._isActive ? 
              <HeaderButton onClick={handleOpen}><DeleteOutlineOutlined/></HeaderButton> 
              : 
              <HeaderButton disabled><DeleteOutlineOutlined/></HeaderButton>
            }
          </Box>
        </Box>
      </Grid>
      {/* header rightside */}
      <Grid item xs={editInTable ? 5 : 9} alignItems='center' alignContent='baseline' sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 10px',
        backgroundColor: '#212225'
      }}>
        <Box sx={{
          width: '10%',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <HeaderButton>
            <Create/>
          </HeaderButton>
          <HeaderButton disabled={!editActive}>
            <FormatColorTextRounded/>
          </HeaderButton>
          {editInTable ? <HeaderButton disabled>
            <RuleRounded/>
          </HeaderButton> : null}
          
        </Box>
        {editInTable ?
          <HeaderButton disabled>
            <SearchRounded/>
          </HeaderButton>
         :
        <TextField  placeholder='Поиск' InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRounded />
              </InputAdornment>
            ),
          }} sx={{
            marginRight: '5px',
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
              padding: '5px 20px 5px 0',
            },
          }}/>}
      </Grid>
    </Grid>
  )
}

export default observer(Header)