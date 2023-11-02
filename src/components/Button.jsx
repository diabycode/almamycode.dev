import {motion } from 'framer-motion';


export function Button ({text, href, onClick, children, motionInitial, motionAnimate, ...props}) {
    return (
        <motion.a target={props.target} href={href} className="btn-link" initial={motionInitial} animate={motionAnimate}> 
            { text }
            {children} 
        </motion.a>
    )
}

