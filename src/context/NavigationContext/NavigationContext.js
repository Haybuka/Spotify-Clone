import React,{createContext,useState} from 'react'

export const navigationContext = createContext ()
export function NavigationProvider({children}) {
  const [navActive,setNavActive] = useState(true)

  return (
    <navigationContext.Provider value={{navActive}}>
         {children}
    </navigationContext.Provider>
  )
}
