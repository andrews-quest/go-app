import React from 'react'
import ReactDOM from 'react-dom/client'
import { Banner } from './Banner'
import { ProjectViewer } from './ProjectViewer'
import "./App.scss"


function App() {
    return (<>
            {
                // <InfoTab />

            }
            <Banner />
        <main>
            <div id="img"></div>
            <ProjectViewer color={"#191919"}
            header = {"Example"}
            text = {"My project"} />
            <ProjectViewer color={"#191919"}
            header = {"Example"}
            text = {"My project"} />
            <ProjectViewer color={"#191919"}
            header = {"Example"}
            text = {"My project"} />
            <ProjectViewer color={"#191919"}
            header = {"Example"}
            text = {"My project"} />
            <ProjectViewer color={"#191919"}
            header = {"Example"}
            text = {"My project"} />
            <ProjectViewer color={"#191919"}
            header = {"Example"}
            text = {"My project"} />
        </main>
        </>
    )
}

const domContainer = document.getElementById("root")!;
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);