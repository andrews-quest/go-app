import React from 'react'
import "./ProjectViewer.scss"

import reactLogo from "../resources/react_logo.png"

export const ProjectViewer: React.FC<{
    header : string,
    text : string,
    color : string,
    image : string | null,
    video : string,
    tech_stack : string[]
}> = ({
    header,
    text, 
    color,
    image,
    video,
    tech_stack
}) => {

    function RenderVideo (video) {
        if (video != null) {
            return (
            <div id="vid_div">
                <iframe src={video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; full-screen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            )
        } else {
            return null;
        }
    }

    function RenderTechStack (tech_stack) {
        for (var i in tech_stack){
            if (tech_stack[i] == "react") {
                return <img src={reactLogo}></img>
            } else {
                return <div id="fail"></div>
            }
        }
    }

    return (
        <div id="project_viewer" style={{backgroundColor: color}}>
            <div id="header_div">
                <h2>{header}</h2>
            </div>
            <div id="content_div">
                {RenderVideo(video)}
                <div id="info_div">
                    <div id="proj_desc">
                        <p>{text}</p>
                    </div>
                    <div id="tech_stack">
                        {RenderTechStack(tech_stack)}
                    </div>
                    <div id="link_div">

                    </div>
                </div>
            </div>
        </div>
    );
}

