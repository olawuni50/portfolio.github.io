import React, {useState} from 'react'
import {HeroContainer, HeroBg, Image, HeroContent, HeroH1, HeroP, HeroBtnWrapper,
ArrowForward, ArrowRight} from "./HeroElement"
import {Button} from "../ButtonElement"
import img1 from "../../Images/img-2.jpg"

const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }


    return (
        <HeroContainer id="about">
            <HeroBg>
                <Image src={img1} type='images/jpg'/>
            </HeroBg>
            <HeroContent>
                <HeroH1 
                initial={{scale:0}}
                animate={{ scale:1}}
                transition={{delay:3, duration:2, type: "just", stiffness:260, damping:20}}>Hi, I'm Olukunle</HeroH1>
                <HeroP
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay: 4, duration:2}}>I'm a Front-End Developer, specialising in core front end technologies such
                    as HTML, CSS, JavaScript and React, I design and develop websites and apps</HeroP>
                <HeroBtnWrapper>
                    <Button to="contact" onMouseEnter={onHover} 
                    onMouseLeave={onHover} primary="true" fontBig="true"> 
                    Get Started {hover ? <ArrowForward/>: <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            {/* <ShowCase/> */}
        </HeroContainer>
    )
}

export default Hero
