import {motion} from 'framer-motion';

export function AnimatedIntroduce () {

    const introduce = {
        hidden: {
            opacity: 0,
            y: -50,
        },

        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1,
            }
        }
    }    

    return (
        <motion.p
            variants={introduce}
            initial='hidden'
            animate='visible'

        >Hello, my name is <span className='name'>DIABY Almamy</span>, I am a software developper based in Abidjan, Ivory Cost !</motion.p>

    )
}