import { AnimeOnScroll } from "./animeOnScroll"
import { motion } from 'framer-motion';

import {OpenIcon, } from "../assets/svg/SvgForBlueMode.jsx";


export const projects = [
    {
        name: "ALocation",
        desc: "A full web app for locals renting management.",
        icon: {
            blue: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15H22.5V16.5H12V15ZM12 18H22.5V19.5H12V18ZM12 21H17.25V22.5H12V21Z" fill="#FBEAFF"/>
                <path d="M10.5 19.5H3V4.5H8.3775L10.9425 7.0575L11.3775 7.5H21V13.5H22.5V7.5C22.5 7.10218 22.342 6.72064 22.0607 6.43934C21.7794 6.15804 21.3978 6 21 6H12L9.4425 3.4425C9.30296 3.30212 9.13701 3.19075 8.95423 3.11481C8.77144 3.03886 8.57543 2.99984 8.3775 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V19.5C1.5 19.8978 1.65804 20.2794 1.93934 20.5607C2.22064 20.842 2.60218 21 3 21H10.5V19.5Z" fill="#FBEAFF"/>
            </svg>,
            white: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15H22.5V16.5H12V15ZM12 18H22.5V19.5H12V18ZM12 21H17.25V22.5H12V21Z" fill="#210637"/>
                <path d="M10.5 19.5H3V4.5H8.3775L10.9425 7.0575L11.3775 7.5H21V13.5H22.5V7.5C22.5 7.10218 22.342 6.72064 22.0607 6.43934C21.7794 6.15804 21.3978 6 21 6H12L9.4425 3.4425C9.30296 3.30212 9.13701 3.19075 8.95423 3.11481C8.77144 3.03886 8.57543 2.99984 8.3775 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V19.5C1.5 19.8978 1.65804 20.2794 1.93934 20.5607C2.22064 20.842 2.60218 21 3 21H10.5V19.5Z" fill="#210637"/>
            </svg>

        },
        showLink: "https://diabycode.pythonanywhere.com/",
        tags: [
            "Django",
            "Python",
            "JavaScript",
            "SQLite"
        ]
    },
    {
        name: "AlmamyCode",
        desc: "My portfolio website.",
        icon: {
            blue: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15H22.5V16.5H12V15ZM12 18H22.5V19.5H12V18ZM12 21H17.25V22.5H12V21Z" fill="#FBEAFF"/>
                <path d="M10.5 19.5H3V4.5H8.3775L10.9425 7.0575L11.3775 7.5H21V13.5H22.5V7.5C22.5 7.10218 22.342 6.72064 22.0607 6.43934C21.7794 6.15804 21.3978 6 21 6H12L9.4425 3.4425C9.30296 3.30212 9.13701 3.19075 8.95423 3.11481C8.77144 3.03886 8.57543 2.99984 8.3775 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V19.5C1.5 19.8978 1.65804 20.2794 1.93934 20.5607C2.22064 20.842 2.60218 21 3 21H10.5V19.5Z" fill="#FBEAFF"/>
            </svg>,
            white: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15H22.5V16.5H12V15ZM12 18H22.5V19.5H12V18ZM12 21H17.25V22.5H12V21Z" fill="#210637"/>
                <path d="M10.5 19.5H3V4.5H8.3775L10.9425 7.0575L11.3775 7.5H21V13.5H22.5V7.5C22.5 7.10218 22.342 6.72064 22.0607 6.43934C21.7794 6.15804 21.3978 6 21 6H12L9.4425 3.4425C9.30296 3.30212 9.13701 3.19075 8.95423 3.11481C8.77144 3.03886 8.57543 2.99984 8.3775 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V19.5C1.5 19.8978 1.65804 20.2794 1.93934 20.5607C2.22064 20.842 2.60218 21 3 21H10.5V19.5Z" fill="#210637"/>
            </svg>
        },
        showLink: "https://diabycode.github.io/almamycode.dev/",
        tags: [
            "ReactJS",
            "Framer-motion",
        ] 
    },
    {
        name: "JComments",
        desc: "Social networking comment system.",
        icon: {
            blue: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15H22.5V16.5H12V15ZM12 18H22.5V19.5H12V18ZM12 21H17.25V22.5H12V21Z" fill="#FBEAFF"/>
                <path d="M10.5 19.5H3V4.5H8.3775L10.9425 7.0575L11.3775 7.5H21V13.5H22.5V7.5C22.5 7.10218 22.342 6.72064 22.0607 6.43934C21.7794 6.15804 21.3978 6 21 6H12L9.4425 3.4425C9.30296 3.30212 9.13701 3.19075 8.95423 3.11481C8.77144 3.03886 8.57543 2.99984 8.3775 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V19.5C1.5 19.8978 1.65804 20.2794 1.93934 20.5607C2.22064 20.842 2.60218 21 3 21H10.5V19.5Z" fill="#FBEAFF"/>
            </svg>,
            white: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15H22.5V16.5H12V15ZM12 18H22.5V19.5H12V18ZM12 21H17.25V22.5H12V21Z" fill="#210637"/>
                <path d="M10.5 19.5H3V4.5H8.3775L10.9425 7.0575L11.3775 7.5H21V13.5H22.5V7.5C22.5 7.10218 22.342 6.72064 22.0607 6.43934C21.7794 6.15804 21.3978 6 21 6H12L9.4425 3.4425C9.30296 3.30212 9.13701 3.19075 8.95423 3.11481C8.77144 3.03886 8.57543 2.99984 8.3775 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V19.5C1.5 19.8978 1.65804 20.2794 1.93934 20.5607C2.22064 20.842 2.60218 21 3 21H10.5V19.5Z" fill="#210637"/>
            </svg>

        } ,
        showLink: "https://github.com/diabycode/JComments",
        tags: [
            "Django",
            "Python",
            "JavaScript"
        ]
    }
]



export function ProjectItem ( { name, desc, icon, showLink, ...props } ) {

    return (
        <div className="project-item">
            <div className="heading">
                <p className="p-name"> { name } </p>
                <a href={showLink} target="_blank"> 
                    <OpenIcon />
                </a>
            </div>
            <p className="p-desc"> { desc } </p>
            <div className="tags">
                <ul>

                    { props.tags.map( (tag) => {
                        return <li> {tag} </li>
                    } )}

                </ul>
            </div>
        </div>
    )
}


