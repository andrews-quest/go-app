import React from 'react'
import "./ProjectViewer.scss"

export const ProjectViewer: React.FC<{
    header : string,
    text : string,
    color : string
}> = ({
    header,
    text, 
    color
}) => {
    return (
        <div id="project_viewer" >
            <h2>{header}</h2>
            <p>{text}</p>
        </div>
    );
}

