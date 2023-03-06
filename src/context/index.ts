import { createContext } from "react";
import { INotes } from "../utils/interfaces";

type NotesContext = {
  notes: INotes[],
  setNewNotes: (notes: INotes[]) => void,
  addNewNote: (note: INotes) => void,
  removeNote: (index: number) => void,
  isTable: boolean,
  changeIsTable: (table: boolean) => void
  isActive: boolean,
  changeIsActive: (active: boolean) => void,
  activeIndex: number,
  changeActiveIndex: (index: number) => void,
}

export const NotesContext = createContext<NotesContext>({
  notes: [],
  setNewNotes: () => ({}),
  addNewNote: () => ({}),
  removeNote: () => ({}),
  isTable: false,
  changeIsTable: () => ({}),
  isActive: false,
  changeIsActive: () => ({}),
  activeIndex: 0,
  changeActiveIndex: () => ({}),
});
