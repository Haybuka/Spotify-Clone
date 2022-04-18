import React from 'react'
import  { NavigationLogo,NavigationTop } from './NavigationLogo';
import {NavigationMenu,NavigationPlaylist} from './NavigationMenu';
import NavigationPlayer from './NavigationPlayer';
import { AnimatePresence, motion } from 'framer-motion';
import NavigationSearch from './NavigationSearch';
function NavigationFull({isFullNav}) {
  return (

  <motion.div initial={{x:'-100vw'}} animate={{x:0}} transition={{ease:'easeInOut'}}>
        <NavigationTop isFullNav={isFullNav}/>
        <NavigationLogo isFullNav={isFullNav}/>
        {isFullNav && <NavigationSearch /> }
        <nav>
            <NavigationMenu isFullNav={isFullNav} />
            <NavigationPlaylist isFullNav={isFullNav}/>    
        </nav>
        <NavigationPlayer isFullNav={isFullNav}/>
  </motion.div>

  )
}

export default NavigationFull