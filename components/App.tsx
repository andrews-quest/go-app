import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProjectViewer } from './ProjectViewer'

function App() {
    return (
        <main>
            <ProjectViewer />
        </main>
    )
}

const domContainer = document.getElementById("root")!;
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);