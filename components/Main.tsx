import React, { useEffect, useRef, useState } from "react";
import "./App.scss";
import { ProjectViewer } from "./ProjectViewer";
import { InfoTab } from "./InfoTab";

export const Main: React.FC <{

}> = ({

}) => {
    return (
        <main>
        <InfoTab />
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
    )
}