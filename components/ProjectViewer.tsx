import React from 'react'
import "./ProjectViewer.scss"

export const ProjectViewer: React.FC<{
    header : string,
    text : string,
    color : string,
    image : string | null,
    video : string
}> = ({
    header,
    text, 
    color,
    image,
    video
}) => {


    return (
        <div id="project_viewer" style={{backgroundColor: color}}>
            <div id="header_div">
                <h2>{header}</h2>
            </div>
            <div id="content_div">
                <div id="vid_div">
                    <iframe src={video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; full-screen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div id="info_div">
                    <div id="proj_desc">
                        <p>{text}</p>
                    </div>
                    <div id="tech_stack">

                    </div>
                    <div id="link_div">

                    </div>
                </div>
            </div>
        </div>
    );
}

