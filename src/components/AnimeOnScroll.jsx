import {motion, useInView, useAnimation} from 'framer-motion';
import { useEffect, useRef } from 'react';

export function AnimeOnScroll ( {children} ) {

    const ref = useRef() 
    const isInView = useInView(ref)

    const baseStyles = {
        transition: "all 430ms cubic-bezier(.47,1.64,.41,.8)",
    }

    const styles = isInView ? {
        ...baseStyles,
        transform: "translateY(0px)",
        filter: "blur(0px)",
        opacity: 1
    } : {
        ...baseStyles,
        transform: "rotate(10deg) scale(0.4)",
        filter: "blur(5px)",
        opacity: 0
    }  
    
    return (
        <div ref={ref} style={styles}>
            {children}
        </div>
    )
}