import { useContext } from "react";
import { Box, Typography, TextareaAutosize, TextField } from "@mui/material";
import { NotesContext } from "../../../context";

function TextArea() {
  let options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const {
    notes,
    setNewNotes,
    activeIndex,
    changeActiveIndex,
    addNewNote,
    removeNote,
    changeIsActive,
  } = useContext(NotesContext);
  const activeNote = notes[activeIndex];
  const noteDate = new Date(notes[activeIndex].date);
  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 65px)",
        maxHeight: "calc(100vh - 65px)",
        overflowY: "auto",
      }}
    >
      <Typography
        textAlign="center"
        sx={{
          width: "100%",
          fontSize: "0.9rem",
          fontWeight: "600",
          color: "#9e9e9f",
          margin: "10px 0",
          fontFamily: "Roboto",
        }}
      >
        {`${
          noteDate.toLocaleString("ru", options) +
          " в " +
          noteDate.toLocaleTimeString("ru").slice(0, -3)
        }`}
      </Typography>
      {/* <TextareaAutosize
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
        /> */}
      <TextField
        id={"textArea_edit"}
        multiline
        defaultValue={
          notes[activeIndex].title
            ? notes[activeIndex].title + "\n" + notes[activeIndex].text
            : notes[activeIndex].text
        }
        variant="standard"
        sx={{
          width: "100%",
          height: "calc(100vh - 110px)",
          ".css-1rb63tl-MuiInputBase-root-MuiInput-root": {
            padding: "0 15px",
            color: "white",
            "&:before": {
              border: "none",
            },
            "&:after": {
              border: "none",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              border: "none",
            },
          },
        }}
        onChange={(e) => {
          notes &&
            setNewNotes(
              notes.map((note, i) => {
                if (i !== activeIndex) return note;
                note.title = e.target.value.split("\n")[0];
                note.text = e.target.value.split("\n").slice(1).join("\n");
                note.date = new Date().toString();

                return note;
              })
            );
          if (activeIndex != 0) {
            setNewNotes(
              notes.sort((a, b) => {
                const aSort = new Date(`${a.date}`);
                const bSort = new Date(`${b.date}`);
                if (aSort > bSort) return -1;
                else return 1;
              })
            );
            changeActiveIndex(0);
            changeIsActive(false);
            changeIsActive(true);
            // addNewNote({
            //   'title': e.target.value.split('\n')[0],
            //   'text': e.target.value.split('\n').slice(1).join('\n'),
            //   'date': new Date().toString()
            // })
            // removeNote(activeIndex + 1)
            // changeIsActive(true)
          }
          localStorage.setItem("notes", JSON.stringify(notes));
        }}
      />
    </Box>
  );
}

export default TextArea;
