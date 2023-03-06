import { action, makeObservable, observable } from "mobx";
import { displayStore } from "../main";
// import { INotes } from "../utils/interfaces";
export interface INotes {
    // id: number;
    title: string;
    text: string;
    [key: string]: any
}

class NoteStore {
    _notes: INotes[]
    _activeNote: INotes[]
    _activeIndex: number
    
    constructor() {
        this._activeIndex = 0
        this._activeNote = []
        this._notes = [
            // {'title': 'Foldy', 'text': 'hello World!'},
            // {'title': 'Test 2', 'text': 'hello World again!'},
        ]

        makeObservable(this, {
            _notes: observable,
            _activeIndex: observable,
            setNotes: action,
            addNote: action,
            setActiveIndex: action,
            removeNote: action,
            // activeIndex: action,
            // notes: action,

        })
    }

    setNotes (notes: INotes[]) {
        this._notes = notes
    }

    setActiveIndex (index: number) {
        displayStore.setIsActive(false)
        this._activeIndex = index
    }

    addNote (note: INotes) {
        // console.log(note)
        this._notes.push(note)
        localStorage.setItem('notes', JSON.stringify(this._notes))
        console.log(this._notes)
    }

    removeNote (index: number) {
        this._notes.splice(index, index)
        localStorage.setItem('notes', JSON.stringify(this._notes))
        console.log(this._notes)
    }

    get activeIndex () {
        return this._activeIndex
    }
    get notes () {
        return this._notes
    }

}

export default NoteStore;