import { useEffect, useState } from 'react';
import logo from '../assets/images/profile- round -  with shadows.png';
import {  motion } from 'framer-motion';


export function LogoImg () {

    const [isOpen, setIsOpen] = useState(false)

    const styles = isOpen ? {
        position: "fixed",
        top: "50px",
        left: "50px",
        width: "50vw",
        maxWidth: "400px",
        zIndex: "1000",
    }  : {}

    // outside click listener
    useEffect(() => {

        if (isOpen) {
            document.addEventListener("click", (e) => {
                e.stopPropagation()

                if (!e.target.classList.contains("profile-img")) {
                    setIsOpen(isOpen => false)
                } 
            })
        } 
        

    }, [isOpen])


    if (isOpen) {
        return (
            <motion.img 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}

            style={styles}
            layoutId="profile-img"
            className="profile-img"
            onClick={() => setIsOpen(!isOpen)} src={logo} alt="Profile image of Diaby"/>
        )
    }

    return (
        <motion.img 
        style={styles}
        layoutId="profile-img"
        className="profile-img"
        onClick={() => setIsOpen(!isOpen)} src={logo} alt="Profile image of Diaby"/>
    )
}