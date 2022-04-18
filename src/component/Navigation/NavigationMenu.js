import React from 'react'
import { FaTrashAlt,FaPlus,FaPodcast,FaCompactDisc,FaMicrophone,FaHome,FaCompass,FaBroadcastTower,FaList} from "react-icons/fa";

export function NavigationMenu({isFullNav}) {
  return (
    <section className='Nav-menu py-4'>
               <h3 className='mb-10 uppercase'>Menu</h3>
               {isFullNav ? (
                 <ul> 
                 <li className='flex my-6 capitalize items-center'>
                     <i className='mr-6 text-xl'> 
                        <FaHome />
                     </i>
                      <p>Home</p>
                 </li>
                 <li className='flex my-6 capitalize items-center'>
                     <i className='mr-6 text-xl'> 
                       <FaCompass />
                     </i>
                      <p>Discover</p>
                 </li>
                 <li className='flex my-6 capitalize '>
                     <i className='mr-6 text-xl'> 
                       <FaBroadcastTower />
                     </i>
                      <p>Radio</p>
                 </li>
                 <li className='flex my-6 capitalize items-center'>
                     <i className='mr-6 text-xl'> 
                       <FaMicrophone />
                     </i>
                      <p>Artists</p>
                 </li>
                 <li className='flex my-6 capitalize items-center'>
                     <i className='mr-6 text-xl'> 
                        <FaCompactDisc />
                     </i>
                         <p>Albums</p> 
                 </li>
                 <li className='flex my-6 capitalize items-cnter'>
                     <i className='mr-6 text-xl'>
                       <FaPodcast />
                      </i>
                     <p>Podcasts</p>
                 </li>
                   </ul>
               ) : (
                <ul>
                <li className='flex justify-center my-6 capitalize items-center'>
                    <i className='mr-6 text-xl'> 
                       <FaHome />
                    </i>
                 
                </li>
                <li className='flex justify-center my-6 capitalize items-center'>
                    <i className='mr-6 text-xl'> 
                      <FaCompass />
                    </i>
                  
                </li>
                <li className='flex justify-center my-6 capitalize '>
                    <i className='mr-6 text-xl'> 
                      <FaBroadcastTower />
                    </i>
       
                </li>
                <li className='flex justify-center my-6 capitalize items-center'>
                    <i className='mr-6 text-xl'> 
                      <FaMicrophone />
                    </i>
                   
                </li>
                <li className='flex justify-center my-6 capitalize items-center'>
                    <i className='mr-6 text-xl'> 
                       <FaCompactDisc />
                    </i>
                     
                </li>
                <li className='flex justify-center my-6 capitalize items-cnter'>
                    <i className='mr-6 text-xl'>
                      <FaPodcast />
                     </i>
                    
                </li>
            </ul>
               )}
            </section>
  )
}

export function NavigationPlaylist({isFullNav}){
    return (
        <section className='Nav-playlist'>
        <h3 className='flex uppercase mb-10 justify-between items-center'> 
            {isFullNav && <p> Playlist </p>}
            <i>
                 <FaPlus />
            </i>
       </h3>
       <ul>
                   <li className='flex justify-center my-6 capitalize items-center'>
                     {isFullNav ? (
                         <>
                               <i className='mr-6 text-xl'> 
                                 <FaList/>
                               </i>
                              <aside className='flex justify-between items-center w-full'>
                                  <p>Top Hit 2021</p>
                                  <i className='text-xl opacity-40'> 
                                     <FaTrashAlt />
                                  </i>
                              </aside>
                         </>
                     ): (
                         <>
                            <i className='mr-6 text-xl'> 
                                 <FaList/>
                            </i>
                         </>
                     )}
                   </li>
                   <li className='flex justify-center my-6 capitalize items-center'>
                     {isFullNav ? (
                         <>
                               <i className='mr-6 text-xl'> 
                                 <FaList/>
                               </i>
                              <aside className='flex justify-between items-center w-full'>
                                  <p>Dance</p>
                                  <i className='text-xl opacity-40'> 
                                     <FaTrashAlt />
                                  </i>
                              </aside>
                         </>
                     ): (
                         <>
                            <i className='mr-6 text-xl'> 
                                 <FaList/>
                            </i>
                         </>
                     )}
                   </li>
                   <li className='flex justify-center my-6 capitalize items-center'>
                     {isFullNav ? (
                         <>
                               <i className='mr-6 text-xl'> 
                                 <FaList/>
                               </i>
                              <aside className='flex justify-between items-center w-full'>
                                  <p>Afro Beat</p>
                                  <i className='text-xl opacity-40'> 
                                     <FaTrashAlt />
                                  </i>
                              </aside>
                         </>
                     ): (
                         <>
                            <i className='mr-6 text-xl'> 
                                 <FaList/>
                            </i>
                         </>
                     )}
                   </li>
        </ul>
     </section>
    )
}