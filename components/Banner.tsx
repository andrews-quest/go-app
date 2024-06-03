import React, { useRef, useEffect, useState } from "react";
import "./Banner.scss";
import {Signature} from "./Signature.tsx"

import backImg from "../resources/avatar.jpg"

export const Banner: React.FC <{

}> = ({

}) => {

    const backRef = useRef(null);

    const [parallaxReached, setParallaxReached] = useState<boolean>();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[-1];
            setParallaxReached(entry.isIntersecting)

        }, {threshold: 0})
        observer.observe(backRef.current!)
    }, [])

    return (        
        <>
        <Signature />
        <div id="banner" >
            <div id={parallaxReached ? "background" : "background_parallax"} ref={backRef}></div>
            <div id="gradient"></div>
        </div>
        </>
    )
}