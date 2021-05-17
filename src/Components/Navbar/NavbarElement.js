import styled from "styled-components"
// import {Link as LinkR} from "react-router-dom"
import {Link as LinkS} from "react-scroll"
import {motion} from "framer-motion";

export const Nav = styled.nav`
background-color:${({scrollNav})=>(scrollNav ? "#047aed":"transparent")};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
margin-top: -80px;
z-index: 10;
top:0;
position: sticky;

@media screen and (max-width: 960px){
    transition:0.8s all ease;
}
`

export const NavContainer = styled.div`
display: flex;
justify-content:space-between;
width: 100%;
max-width: auto;
padding:0 24px;
z-index: 1;
`

export const NavTitle = styled(motion.LinkR)`
display:flex;
color: #fff;
justify-self: flex-start;
align-items: center;
cursor: pointer;
font-size: 2.5rem;
margin-left: 24px;
font-weight: bold;
text-decoration:none;
`

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width: 960px){
    display: block;
    position:absolute;
    top: 0;
    color: #fff;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2.3rem;
    cursor:pointer;
}
`

export const NavMenu = styled.ul`
display:flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;


@media screen and (max-width: 768px){
    display: none;
}
`;

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkS)`
color: #fff;
display:flex;
align-items:center;
font-size:20px;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
    border-bottom: 3px solid #fff;
}
`

// export const NavBtn = styled.nav`
// display:flex;
// align-items:center;

// @media screen and (max-width: 768px){
//     display:none;
// }
// `

// export const NavBtnLinks = styled(LinkR)`
// border-radius: 50px;
// background: #fff;
// white-space: nowrap;
// padding: 10px 22px;
// color: #047aed;
// font-size: 20px;
// outline:none;
// border: none;
// cursor: pointer;
// transition: all 0.2s ease-in-out;
// text-decoration: none;

// &:hover{
//     transition: all 0.2s ease-in-out;
//     background:#333;
//     color: #fff;
// }
// `

export const NavText = styled.div`
display:grid;
justify-self:flex-end;
text-align:center;
margin:2rem 4rem;
padding: 0 1rem;
height: 100%;


@media screen and (max-width: 768px){
    display:none;
}
`

export const NavH1 =styled.h1`
font-size: 20px;
color:#fff;
`

export const NavP = styled.p`
font-size:18px;
color:#fff;
`