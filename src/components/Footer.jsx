import logo2 from "../assets/images/profile - dark type.png"
import blueModeSvg from "../assets/svg/SvgForBlueMode.jsx";
import whiteModeSvg from "../assets/svg/SvgForWhiteMode.jsx";
import { AnimeOnScroll } from "./animeOnScroll";


export function Footer ( {theme} ) {

    return (
        <>
            <AnimeOnScroll>
                <div className="footer-logo">
                    <img src={logo2} alt="Dark profile image of Diaby" />
                </div>
            </AnimeOnScroll>
            <div className='socials'>
                <ul>
                    <li>
                        { theme === "blue" ? <blueModeSvg.GitHubLogo /> : <whiteModeSvg.GitHubLogo /> }
                        <p>GitHub</p>
                        <a target="_blank" href="https://github.com/diabycode"></a>
                    </li>
                    <li>
                        { theme === "blue" ? <blueModeSvg.LinkedInLogo /> : <whiteModeSvg.LinkedInLogo /> }
                        <p>LinkedIn</p>
                        <a target="_blank" href="https://www.linkedin.com/in/youssouf-diaby/"></a>
                    </li>
                    <li>
                        { theme === "blue" ? <blueModeSvg.FacebookLogo /> : <whiteModeSvg.FacebookLogo /> }
                        <p>Facebook</p>
                        <a target="_blank" href="https://web.facebook.com/profile.php?id=100094068235918"></a>
                    </li>
                </ul>
            </div>

            <div className='review'>
                <AnimeOnScroll>
                <h3> review </h3>
                </AnimeOnScroll>
                <ul>
                    <li> <a href="#home"> Home </a> </li>
                    <li> <a href="#skills"> Skills </a> </li>
                    <li> <a href="#projects"> Projects </a> </li>
                    <li> <a href="#blog"> Blog </a> </li>
                </ul>
            </div>

            <p>
                Designed and built with 
                { theme === "blue" ? <blueModeSvg.Heart /> : <whiteModeSvg.Heart />  }
                - by <span className='name'> Diaby Almamy </span>
            </p>
            <p> ©Copyright 2023 </p>
        </>
    )
}