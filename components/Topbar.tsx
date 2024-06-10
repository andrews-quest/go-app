import React, { useRef, useEffect } from "react";
import "./Topbar.scss";
import gitHubLogo from "../resources/github_logo.png";
import linkedInLogo from "../resources/linkedin_logo.png";

export const Topbar: React.FC <{

}> = ({

}) => {
    
    const topbarRef = useRef(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        console.log("lastScroll is " + lastScrollY);

        window.addEventListener("scroll", () => {
            if (lastScrollY < window.scrollY) {
                topbarRef.current!.style.transform = "translateY(-100px)";
            } else {
                topbarRef.current!.style.transform = "translateY(0px)";
            }

            lastScrollY = window.scrollY;
        })
    }, [topbarRef]
    );

    return( 
        <div id="topbar" ref={topbarRef}>
            <div id="topbar_gradient"></div>
            <div id="buttons">
                <a href="https://github.com/andrews-quest" target="_blank">
                    <div id="button">
                        <img src={gitHubLogo}></img> <h2>GitHub</h2>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/andrii-roshkovan/" target="_blank">
                    <div id="button">
                        <img src={linkedInLogo}></img> <h2>LinkedIn</h2> 
                    </div>
                </a>
            </div>
        </div>
    )
}