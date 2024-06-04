import React from 'react'
import "./ProjectViewer.scss"

import reactLogo from "../resources/react_logo.png"
import goLogo from "../resources/go_logo.png"

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
        var logos : React.JSX.Element[] = []
        for (var i in tech_stack){
            if (tech_stack[i] == "react") {
                logos.push(<img src={reactLogo}></img>)
            }
            if (tech_stack[i] == "go") {
                logos.push(<img src={goLogo}></img>)
            }
        }
        return logos
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

