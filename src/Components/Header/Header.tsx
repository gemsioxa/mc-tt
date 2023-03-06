import styled from '@emotion/styled'
import {FormatListBulleted, GridView, DeleteOutlineOutlined, Create, FormatColorTextRounded, SearchRounded, ArrowBackIosNewRounded, RuleRounded} from '@mui/icons-material'
import { Grid, TextField, InputAdornment, Box, Modal, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { useState, useContext } from 'react'
import './Header.sass'
import { NotesContext } from '../../context'
function Header() {
  
  const [showDelete, setShowDelete] = useState(false)
  const handleOpen = () => setShowDelete(true)
  const handleClose = () => setShowDelete(false)

  const {notes, isActive, changeIsActive, isTable, changeIsTable, activeIndex, changeActiveIndex, addNewNote, removeNote} = useContext(NotesContext)

  // if editing in table display mode
  const editInTable = isActive && isTable
  // if editing is active in any mode
  const editActive = isActive
  

  function formatText() {
    const textArea = document.getElementById("textArea_edit") as HTMLTextAreaElement;
    if (textArea.selectionStart == textArea.selectionEnd) {
      return; // ничего не выделено
    }
    const selectionStart = textArea.selectionStart - notes[activeIndex].title.length - 1;
    const selectionEnd = textArea.selectionEnd - notes[activeIndex].title.length - 1;
    notes[activeIndex].text = notes[activeIndex].text.slice(0, selectionStart) 
                              + '<b>' 
                              + notes[activeIndex].text.slice(selectionStart, selectionEnd) 
                              + '</b>' 
                              + notes[activeIndex].text.slice(selectionEnd);
    console.log(notes[activeIndex].text)
    console.log(textArea) 
    console.log(textArea.selectionStart)
    console.log(textArea.selectionEnd)
  }

//   function font_attr(i) {
//     var obj = document.getElementById("textArea_edit");
    
//     if(typeof(document.selection) != "undefined") { // MSIE, Opera
//         obj.focus();
//         var sel  = document.selection.createRange();
//         sel.text = "["+bbcode[i]+"]" + sel.text + "[/"+bbcode[i]+"]";
//     } else if(typeof(obj.selectionStart) != "undefined") {  // FireFox, Chrome, Safari, Opera
//          var mid   = obj.value.substring(obj.selectionStart, obj.selectionEnd);
//          var first = obj.value.substring(0, obj.selectionStart);
//          var last  = obj.value.substring(obj.selectionEnd, obj.value.length);
//          obj.value = first + "["+bbcode[i]+"]" + mid + "[/"+bbcode[i]+"]" + last;
//     }
// }


  async function createNote() {
    await addNewNote({
      'title': '',
      'text': '',
      'date': new Date().toString()
    })

    changeIsActive(true)
  }

  function deleteNote() {
    removeNote(activeIndex)

    changeIsActive(false)
    setShowDelete(false)
  }

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

  const tableShowing = isTable ? {
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
                onClick={() => {
                  deleteNote()
                }}
                sx={{
                    borderBottomRightRadius: '8px'
                  }}
              >
                {'Удалить'}
              </Button>
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
            <HeaderButton onClick={() => changeIsTable(false)} sx={{
              background: tableShowing.btnBackground_list
            }}>
              <FormatListBulleted/>
            </HeaderButton>
            <HeaderButton onClick={() => changeIsTable(true)} sx={{
              background: tableShowing.btnBackground_table
            }}>
              <GridView/>
            </HeaderButton>
            {isTable ? isActive ?
            <HeaderButton onClick={() => changeIsActive(false)}>
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
            {isActive ? 
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
          <HeaderButton onClick={() => createNote()}>
            <Create/>
          </HeaderButton>
          <HeaderButton 
            disabled={!editActive}
            onClick={formatText}
          >
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

export default Header