import React, {useState, useEffect} from 'react'
import {Nav, NavContainer, NavTitle, MobileIcon, NavMenu,
NavItem, NavLinks, NavText, NavH1, NavP} from "./NavbarElement";
import {BiPhoneCall} from "react-icons/bi"
import {HiOutlineMail} from "react-icons/hi"

import {FiAlignRight} from "react-icons/fi"
import {IconContext} from "react-icons/lib";
import {animateScroll as scroll} from "react-scroll"

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect (() => {
        window.addEventListener('scroll', changeNav)

    })

    const toggleHome = ()=>{
        scroll.scrollToTop()
    }
    return (
        <IconContext.Provider value ={{color: "#fff"}}>
        <Nav scrollNav={scrollNav}>
            <NavContainer>
                <NavTitle 
                initial={{y:-250}}
                animate={{y:-1}}
                transition={{delay: 1, type:"spring", stiffness:120}} onClick={toggleHome}>Portfolio</NavTitle>
                <MobileIcon onClick={toggle}>
                    <FiAlignRight/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true"
                    offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact="true"
                    offset={-80}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="portfolio" smooth={true} duration={500} spy={true} exact="true"
                    offset={-80}>Portfolio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact" smooth={true} duration={500} spy={true} exact="true"
                    offset={-80}>Contact Us</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavText>
                    
                    <NavH1><HiOutlineMail/>Olawuni50@gmail.com</NavH1>
                    <NavP><BiPhoneCall/>+2348118320256, +2348161882454</NavP>
                </NavText>
            </NavContainer>
        </Nav>
        </IconContext.Provider>
    )
}

export default Navbar
