import {AnimatedIntroduce} from "./AnimatedIntroduce.jsx";
import { Button } from "./Button.jsx";
import { Socials } from "./Socials.jsx";

export function HomeViewContent () {

    return (
        <div className='home-view-content'>
            <AnimatedIntroduce />
            <div>
                <Button text="Go projects" href="#projects"
                
                    motionInitial={{
                        opacity: 0,
                        y: -20,
                    }}

                    motionAnimate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.25,
                        }
                    }}
                />
                <Socials />
            </div>
        </div>
    )
}