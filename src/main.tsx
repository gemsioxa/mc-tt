import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import DisplayStore from './stores/DisplayStore'
import NoteStore from './stores/NoteStore'

export const displayStore = new DisplayStore(false)
export const noteStore = new NoteStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
