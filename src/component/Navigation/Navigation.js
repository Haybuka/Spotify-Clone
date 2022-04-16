import React from 'react'
import { FaPlus,FaEllipsisH, FaChevronLeft, FaChevronRight} from "react-icons/fa";
import  { NavigationLogo,NavigationTop } from './NavigationLogo';
import {NavigationMenu,NavigationPlaylist} from './NavigationMenu';
import NavigationPlayer from './NavigationPlayer';

function Navigation() {
  return (
    <header className='Nav px-6 py-6  text-white bg-black w-1/5'>
        <NavigationTop />
        <NavigationLogo />
        <nav>
            <NavigationMenu />
            <NavigationPlaylist />    
        </nav>
        <NavigationPlayer />
    </header>
  )
}

export default Navigation