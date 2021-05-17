import React, {useState} from 'react'
import Footers from '../Components/Footer/Footers'
import Hero from '../Components/HeroSection/Hero'
import { homeObjOne, homeObjTwo } from '../Components/InfoSection/Data'
import Info from '../Components/InfoSection/Info'
import Work from '../Components/MyWork/Work'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/SideBar/Sidebar'


const Home = () => {
    const [isOpen, setIsOpen] =useState(false)

    const toggle =()=>{
        setIsOpen(!isOpen)

    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Hero/>
        <Info {...homeObjOne}/>
        <Work/>    
        <Info {...homeObjTwo}/>
        <Footers/>
        
        </>
    )
}

export default Home
