import React from "react";
import "./App";

export const InfoTab: React.FC <{
    text :  React.JSX.Element 
}> = ({
    text
}) => {
    return (
        <div id="info_tab">
                {text}
        </div>
    )
}