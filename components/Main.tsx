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
            <ProjectViewer color={"#BFA8BF"}
            header = {"W1NC3NT"}
            text = {"Fleißiger Chat-Bot-Dienstbote! Er kann Finanzen tracken."} />
            <ProjectViewer color={"#53ed50"}
            header = {"Java Full-Stack App"}
            text = {"Service"} />
            <ProjectViewer color={"#5a57ed"}
            header = {"Arduino Projects"}
            text = {"Lots of Stuff"} />
            <ProjectViewer color={"#d6d6d6"}
            header = {"This Site"}
            text = {"You guess it"} />
        </main>
    )
}