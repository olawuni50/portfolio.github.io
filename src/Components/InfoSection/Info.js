import React from 'react'
import { Button } from '../ButtonElement'
import {InfoContainer, InfoWrapper, InfoRow, Column1,
TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img} from "./InfoElement"

const Info = ({lightBg, id, imgStart, buttonLabel,
topLine, darkText,lightText,description, headline, img, alt, primary}) => {
    return (
        <>
       <InfoContainer lightBg={lightBg} id={id}>
           <InfoWrapper>
               <InfoRow imgStart={imgStart}>
                   <Column1>
                   <TextWrapper
                   initial={{y:250}}
                   animate={{ y:0}}
                   transition={{delay:6, duration:2, type: "just", stiffness:260, damping:20}}>
                       <TopLine>{topLine}</TopLine>
                       <Heading lightText={lightText}>{headline}</Heading>y
                       <Subtitle darkText={darkText}>{description}</Subtitle>
                       <BtnWrap>
                           <Button to="home" primary={primary}
                           smooth={true} duration={500} spy={true}
                           exact="true" offset={-80}
                           >{buttonLabel}</Button>
                       </BtnWrap>
                   </TextWrapper>
                   </Column1>
                   <Column2>
                   <ImgWrap>
                   <Img src={img} alt={alt}/>
                   </ImgWrap>
                   </Column2>
               </InfoRow>
           </InfoWrapper>
       </InfoContainer>
       </>
    )
}

export default Info
