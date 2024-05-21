import React from 'react'
import ReactDOM from 'react-dom'
import { ProjectViewer } from './ProjectViewer'

function App() {
    return <div>Herein lies projectviewer</div>
}

const domContainer = document.querySelector("#application")
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)