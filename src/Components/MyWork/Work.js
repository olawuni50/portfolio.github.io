import React from 'react'
// import {Link} from "react-router-dom";
import {WorkContainer, WorkWrapper, WorkTitle, WorkCard, WorkText,
WorkStacks, WorkP, Image, BtnWrap, WorkButton} from "./WorkElement"
import img from "../../Images/pf2.jpg"
import img2 from "../../Images/pf4.jpg"
import img3 from "../../Images/pf5.jpg"
import img4 from "../../Images/img-11.jpg"
import img1 from "../../Images/p2.svg"

const Work = () => {
    return (
        <WorkContainer id="portfolio">
            <Image src={img1}/>
            <WorkTitle>My Portfolios</WorkTitle>
            <WorkWrapper>            
                <WorkCard
                initial={{x:-250}}
                animate={{x:-1}}
                transition={{delay: 10, duration:4, type:"spring", stiffness:120}}>
                    <Image src={img} type="images/jpg"/>
                    <WorkText>
                    <WorkStacks>Stacks:</WorkStacks>
                    <WorkP>React Js</WorkP>
                    <WorkP>Styled Components</WorkP>
                    <WorkP>React Router</WorkP>
                    <WorkP>React Icons</WorkP>
                    <WorkP>Framer Motion</WorkP>
                    </WorkText>
                    <BtnWrap>
                        
                    <WorkButton to="/ultratech.netlify.app" target="_blank">Visit Site</WorkButton>
                    <WorkButton>GitHub</WorkButton>
                    </BtnWrap>
                </WorkCard>
                <WorkCard>
                    <Image src={img2} type="images/jpg"/>
                    <WorkText>
                    <WorkStacks>Stacks:</WorkStacks>
                    <WorkP>React Js</WorkP>
                    <WorkP>Styled Components</WorkP>
                    <WorkP>React Router</WorkP>
                    <WorkP>React Icons</WorkP>
                    <WorkP>Framer Motion</WorkP>
                    </WorkText>
                    <BtnWrap>
                    <WorkButton to="/idevl.netlify.app" target="_blank">Visit Site</WorkButton>
                    <WorkButton>GitHub</WorkButton>
                    </BtnWrap>
                </WorkCard>

                <WorkCard>
                    <Image src={img4} type="images/jpg"/>
                    <WorkText>
                    <WorkStacks>Stacks:</WorkStacks>
                    <WorkP>React Js</WorkP>
                    <WorkP>Styled Components</WorkP>
                    <WorkP>React Router</WorkP>
                    <WorkP>React Icons</WorkP>
                    <WorkP>Framer Motion</WorkP>
                    </WorkText>
                    <BtnWrap>
                    <WorkButton to="/reacttech.netlify.app" target="_blank">Visit Site</WorkButton>
                    <WorkButton>GitHub</WorkButton>
                    </BtnWrap>
                </WorkCard>
                
                <WorkCard>
                    <Image src={img3} type="images/jpg"/>
                    <WorkText>
                    <WorkStacks>Stacks:</WorkStacks>
                    <WorkP>HTML</WorkP>
                    <WorkP>CSS</WorkP>
                    </WorkText>
                    <BtnWrap>
                    <WorkButton to="/olukunlehtml.netlify.app" target="_blank">Visit Site</WorkButton>
                    <WorkButton>GitHub</WorkButton>
                    </BtnWrap>
                </WorkCard>
                
            </WorkWrapper>
        </WorkContainer>
    )
}

export default Work
