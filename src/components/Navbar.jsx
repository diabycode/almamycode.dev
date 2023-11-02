import { useEffect, useState } from "react";
import {motion} from 'framer-motion';

import blueModeSvg from "../assets/svg/SvgForBlueMode.jsx";
import whiteModeSvg from "../assets/svg/SvgForWhiteMode.jsx";


export function FullNavBar ( {theme, isMobile} ) {

    const [mobileNavIsOpened, setMobileNavIsOpened] = useState(false)

    return (
        <>
            <Navbar className={mobileNavIsOpened ? "only-mobile show" : "only-mobile"}>
                { theme === "blue" ? <div className="menu-closer" onClick={() => setMobileNavIsOpened(false)}>
                    <blueModeSvg.Cross />
                </div> :  <div className="menu-closer" onClick={() => setMobileNavIsOpened(false)}>
                    <whiteModeSvg.Cross />
                </div>}
            </Navbar>
            <Navbar className={ isMobile ? "navbar mobile" : "navbar"}>
                { theme === "blue" ? <div className="menu-opener" onClick={() => setMobileNavIsOpened(true)}>
                    <blueModeSvg.Burger />
                </div> :  <div className="menu-opener" onClick={() => setMobileNavIsOpened(true)}>
                    <whiteModeSvg.Burger />
                </div>}
            </Navbar>
        </>
    )
}


export function Navbar({className, children, styles}) {

    const links = [
        <a href="#skills"> Skills </a>,
        <a href="#projects"> Projects </a>,
        <a href="#blog"> Blog </a>,
    ]

    return (
        <motion.nav className={className} style={styles}>
            {children}
            <ul>
                {links.map( (link, index) =>  <motion.li key={index}> {link} </motion.li> )}
            </ul>
        </motion.nav>
    );
}




