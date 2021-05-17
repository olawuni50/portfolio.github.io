import styled from "styled-components";
import {Link} from "react-router-dom"
import {motion} from "framer-motion"

export const WorkContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background: #fff;
height:auto;
margin-bottom:30px;


/* @media screen and (max-width: 768px){
    height: 1100px;
}

@media screen and (max-width: 480px){
    height: 1300px;
} */
`

export const WorkWrapper= styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap:16px;
padding: 0 50px;
margin:0 auto;
justify-content: center;
align-items: center;
text-align:center;
max-width: 1000px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`

export const WorkCard = styled(motion.div)`
/* background: #010606; */
border-radius:15px;
/* display:flex; */
width: 250px;
height:500px;
text-decoration: none;
align-items:center;
margin-top:1rem;
/* justify-content:center; */
/* margin-left: 2rem; */
/* max-height: 340px; */
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-out;
    cursor:pointer;
  }
`

export const WorkTitle =styled.h1`
font-size:30px;
font-weight:700;
color: #333;
text-align:center;
margin-top:1rem;
`
export const Image = styled.img`
width:100%;
height: 160px;
object-fit:contain;
margin-bottom: 10px;

`
export const WorkText = styled.div`
margin-top:5px;
align-items:center;
justify-content:center;

`
export const WorkStacks = styled.h2`
font-size: 24px;
color: #333;
text-align:center;
margin-bottom:5px;
font-weight:700;
text-decoration:underline;
`

export const WorkP = styled.p`
font-size: 20px;
color:#333;
line-height:1.3;
`

export const BtnWrap = styled.div`
margin-top: 1rem;
margin-bottom: 10px;
`

export const WorkButton = styled(Link)`
border-radius:50px;
background: #047aed;
white-space:nowrap;
padding: 10px 25px;
text-decoration:none;
color: #fff;
font-size: 18px;
outline:none;
margin-bottom:5px;
font-weight:bold;
border: none;
cursor:pointer;
display:flex;
justify-content:center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
  transition:all 0.2s ease-in-out;
  color: #333
}
`