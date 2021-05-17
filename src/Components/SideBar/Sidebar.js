import React from 'react'
import { CloseIcon, Icon, SidebarContainer,SidebarWrapper, SidebarMenu,
SidebarLink, SideText, SideH1, SideP } from './SideBarElement'
import {HiOutlineMail} from "react-icons/hi";
import {BiPhoneCall} from "react-icons/bi"
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Contact Us</SidebarLink>
                </SidebarMenu>
                <SideText>
                    <SideH1><HiOutlineMail/>Olawuni50@gmail.com</SideH1>
                    <SideP><BiPhoneCall/>+2348118320256, +2348161882454</SideP>
                </SideText>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
