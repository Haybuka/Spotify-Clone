import React,{useState} from 'react'
import NavigationFull from './NavigationFull'

function Navigation() {
  const [navActive,setNavActive] = useState(false)

  function handleClick(){
    setNavActive(!navActive)
  }
  return (
    <header className='Nav px-4 py-6  text-white bg-spotify-100 inline-block' onClick={ handleClick}>
    
 
           {navActive ?  <NavigationFull isFullNav={true}/> : <NavigationFull isFullNav={false}/>}

    </header>
  )
}

export default Navigation