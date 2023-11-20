import React, { useEffect, useState } from 'react';
import {motion, useScroll} from 'framer-motion';

import logo2 from './assets/images/profile - dark type.png';
import {Button} from './components/Button.jsx';
import {skills, SkillItem, Skills} from "./components/Skills.jsx";
import {projects, ProjectItem} from "./components/Projects.jsx";
import { blogPosts, BlogItem } from "./components/BlogPosts.jsx"
import {AnimatedIntroduce} from "./components/AnimatedIntroduce.jsx";
import {Socials} from "./components/Socials.jsx";
import { LogoImg } from './components/LogoImg.jsx';
import {Header} from "./components/Header.jsx";
import {BlogPostDetails} from "./components/BlogPostDetails.jsx"
import { AnimeOnScroll } from "./components/animeOnScroll";

import blueModeSvg from "./assets/svg/SvgForBlueMode.jsx";
import whiteModeSvg from "./assets/svg/SvgForWhiteMode.jsx";
import { HomeViewContent } from './components/HomeViewContent';
import { Section } from './components/Section';
import { Footer } from './components/Footer';



function App() {

    const [theme, setTheme] = useState("blue")
    const [mobile, setMobile] = useState(false)

    const [reader, setReader] = useState(false)
    let [postData, setPostData] = useState({})

    // getting post 
    const getPost = ( postData ) => {
        
        setPostData(postData)
        setReader(true)
    }

    // white and blue mode
    const switchMode = (mode) => {
        if (mode === "mobile") {
            setMobile(mobile => true)
        } else if (mode === "large") {
            setMobile(mobile => false)
        }
    }

    // set theme
    useEffect(() => {
        if (theme === "blue") {
            const root = document.querySelector(":root")
            root.style.setProperty("--bg", "#210637")
            root.style.setProperty("--accent-1", "#FBEAFF")
            root.style.setProperty("--accent-2", "#7F6A9B")
            root.style.setProperty("--accent-3", "#7B7484")
            root.style.setProperty("--linear-1", "linear-gradient(100deg, #FBEAFF 34.82%, #7F6A9B 93.68%)")
            root.style.setProperty("--linear-2", "linear-gradient(269deg, #FBEAFF 37.02%, #7F6A9B 92.17%)")
            root.style.setProperty("--footer-linear", "linear-gradient(180deg, #7B7484 -130.5%, #210637 41.17%)")
            root.style.setProperty("--linear-name", "linear-gradient(90deg, #7F6A9B 44.3%, #FFF 57.28%, #4F3382 84.26%)")
        } else {
            const root = document.querySelector(":root")
            
            // reset colors
            root.style.setProperty("--bg", "#F5F5F5")
            root.style.setProperty("--accent-1", "#210637")
            root.style.setProperty("--accent-2", "#7F6A9B")
            root.style.setProperty("--accent-3", "#7B7484")
            root.style.setProperty("--linear-1", "linear-gradient(100deg, #210637 34.82%, #7F6A9B 93.68%)")
            root.style.setProperty("--linear-2", "linear-gradient(269deg, #210637 37.02%, #7F6A9B 92.17%)")
            root.style.setProperty("--footer-linear", "linear-gradient(180deg, #7B7484 -130.5%, #F5F5F5 41.17%)")
            root.style.setProperty("--linear-name", "linear-gradient(90deg, #7F6A9B 44.3%, #FFF 57.28%, #4F3382 84.26%)")
        }
    }, [theme])

    // set mobile
    useEffect(() => {
        if (window.innerWidth < 650) {setMobile(true)}

        // on resize
        window.addEventListener("resize", () => {
            if (window.innerWidth < 650) {
                switchMode( "mobile" )
            } else {
                switchMode( "large" )
            }
        })

    }, [])


    return (
        <> 
            <div className="decorator">
                {theme === "blue" ? <blueModeSvg.HomeViewDecorator /> : <whiteModeSvg.HomeViewDecorator /> }
            </div>
            <div className={ reader ? "body-content reader" : "body-content" } >
                <Section id="home" className={"home-view"}>
                    <div className="profile-indicator">
                        <p>
                            Click on my head to zoom in 
                        </p>
                        { theme === "blue" ? <blueModeSvg.Arrow /> : <whiteModeSvg.Arrow /> }
                    </div>
                    <Header theme={theme} isMobile={mobile} />  
                    <HomeViewContent />
                </Section>
                <Section id="skills" className="skills section">
                    <Skills />
                </Section>
                <Section id="projects" className="projects section">
                    <AnimeOnScroll>
                        <motion.h3 className='extra'> Projects </motion.h3>
                    </AnimeOnScroll>
                    <ul>
                        { projects.map( project => {
                            return <AnimeOnScroll key={ project.name }>
                                <li key={project.name}> <ProjectItem name={project.name} desc={project.desc} showLink={project.showLink} icon={ theme == "blue" ? project.icon.blue : project.icon.white } tags={project.tags} />  </li>
                            </AnimeOnScroll>
                        })}
                    </ul>
                </Section>
                <Section id="blog" className="blogposts section">
                    <AnimeOnScroll>
                        <h3 className='extra'> Some articles </h3>
                    </AnimeOnScroll>
                    <ul>
                        { blogPosts.map( post => {
                            return <AnimeOnScroll key={post.title}>
                                <li key={post.title}> <BlogItem onOpened={getPost} postData={post} />  </li>
                            </AnimeOnScroll>
                        })}
                    </ul>
                </Section>
                <Section className='footer section'>
                    <Footer theme={theme}/>
                </Section>
            </div>
            <div className={reader ? "post-details" : "post-details closed"}>

                { reader ? <BlogPostDetails readerCloser={() => setReader(false)} post={postData} /> : "" }

            </div>
        </>
    )
}

export default App
