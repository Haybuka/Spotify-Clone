import React from 'react'
import arianaImage from '../../Assets/Images/Album-banner.jfif'
import { FaWaveSquare, FaHeadphonesAlt, FaClock, FaHeart, FaEllipsisH} from "react-icons/fa";

import './MusicList.css'
function MusicListing() {
  return (

        <ul className=' MusicList-List'>
            <li className='MusicList-ListItem'>
               <aside>
                  <section className='flex items-center justify-between active'>
                        <p className=''> <i><FaWaveSquare /></i> </p>
                        <div className='Music-img_div overflow-hidden mx-4 w-10 h-10 bg-red-500 rounded-md'>
                           <img className='w-full h-full' src={arianaImage} alt="" />

                        </div>
                        <h4 className='mx-4'>Music Name</h4>
                        <p className='mx-10 tracking-wider'>Hunting High and Low</p>
                   </section>
               </aside>
               <aside>
                    <section className='flex items-center justify-between'>
                         <p className='flex items-center'> 
                             <i className='inline-block mr-4'><FaHeadphonesAlt /></i>
                             <span className='inline-block'> 537,058,915</span>
                         </p>
                         <p className='flex items-center mx-6'> 
                             <i className='inline-block mr-4'><FaClock /></i>
                             <span className='inline-block'> 3:11</span>
                         </p>
                         <p className='flex items-center mx-6'> 
                             <i className='inline-block'><FaHeart /></i>
                         </p>
                         <p className='flex items-center mx-6'> 
                             <i className='inline-block'><FaEllipsisH /></i>
                         </p>
                    </section>
                 </aside>
            </li>
            <li className='MusicList-ListItem'>
               <aside>
                  <section className='flex items-center justify-between'>
                        <p className=''> #2 </p>
                        <div className='Music-img_div overflow-hidden mx-4 w-10 h-10 bg-red-500 rounded-md'>
                           <img className='w-full h-full' src={arianaImage} alt="" />

                        </div>
                        <h4 className='mx-4'>Music Name</h4>
                        <p className='mx-10 tracking-wider'>Hunting High and Low</p>
                   </section>
               </aside>
               <aside>
                    <section className='flex items-center justify-between'>
                         <p className='flex items-center'> 
                             <i className='inline-block mr-4'><FaHeadphonesAlt /></i>
                             <span className='inline-block'> 537,058,915</span>
                         </p>
                         <p className='flex items-center mx-6'> 
                             <i className='inline-block mr-4'><FaClock /></i>
                             <span className='inline-block'> 3:11</span>
                         </p>
                         <p className='flex items-center mx-6'> 
                             <i className='inline-block'><FaHeart /></i>
                         </p>
                         <p className='flex items-center mx-6'> 
                             <i className='inline-block'><FaEllipsisH /></i>
                         </p>
                    </section>
                 </aside>
            </li>
            <li className='MusicList-ListItem'>
               <aside>
                  <section className='flex items-center justify-between'>
                        <p className=''> #3 </p>
                        <div className='Music-img_div overflow-hidden mx-4 w-10 h-10 bg-red-500 rounded-md'>
                           <img className='w-full h-full' src={arianaImage} alt="" />

                        </div>
                        <h4 className='mx-4'>Music Name</h4>
                        <p className='mx-10 tracking-wider'>Hunting High and Low</p>
                   </section>
               </aside>
               <aside>
                    <section className='flex items-center justify-between'>
                         <p className='flex items-center'> 
                             <i className='inline-block mr-4'><FaHeadphonesAlt /></i>
                             <span className='inline-block'> 537,058,915</span>
                         </p>
                         <p className='flex items-center mx-6'> 
                             <i className='inline-block mr-4'><FaClock /></i>
                             <span className='inline-block'> 3:11</span>
                         </p>
                         <p className='flex items-center mx-6'> 
                             <i className='inline-block'><FaHeart /></i>
                         </p>
                         <p className='flex items-center mx-6'> 
                             <i className='inline-block'><FaEllipsisH /></i>
                         </p>
                    </section>
                 </aside>
            </li>
            <li className='MusicList-ListItem'>
               <aside>
                  <section className='flex items-center justify-between'>
                        <p className=''> #4 </p>
                        <div className='Music-img_div overflow-hidden mx-4 w-10 h-10 bg-red-500 rounded-md'>
                           <img className='w-full h-full' src={arianaImage} alt="" />

                        </div>
                        <h4 className='mx-4'>Music Name</h4>
                        <p className='mx-10 tracking-wider'>Hunting High and Low</p>
                   </section>
               </aside>
               <aside>
                    <section className='flex items-center justify-between'>
                         <p className='flex items-center'> 
                             <i className='inline-block mr-4'><FaHeadphonesAlt /></i>
                             <span className='inline-block'> 537,058,915</span>
                         </p>
                         <p className='flex items-center mx-6'> 
                             <i className='inline-block mr-4'><FaClock /></i>
                             <span className='inline-block'> 3:11</span>
                         </p>
                         <p className='flex items-center mx-6'> 
                             <i className='inline-block'><FaHeart /></i>
                         </p>
                         <p className='flex items-center mx-6'> 
                             <i className='inline-block'><FaEllipsisH /></i>
                         </p>
                    </section>
                 </aside>
            </li>
            <li className='MusicList-ListItem'>
               <aside>
                  <section className='flex items-center justify-between'>
                        <p className=''> #5 </p>
                        <div className='Music-img_div overflow-hidden mx-4 w-10 h-10 bg-red-500 rounded-md'>
                           <img className='w-full h-full' src={arianaImage} alt="" />

                        </div>
                        <h4 className='mx-4'>Music Name</h4>
                        <p className='mx-10 tracking-wider'>Hunting High and Low</p>
                   </section>
               </aside>
               <aside>
                    <section className='flex items-center justify-between'>
                         <p className='flex items-center'> 
                             <i className='inline-block mr-4'><FaHeadphonesAlt /></i>
                             <span className='inline-block'> 537,058,915</span>
                         </p>
                         <p className='flex items-center mx-6'> 
                             <i className='inline-block mr-4'><FaClock /></i>
                             <span className='inline-block'> 3:11</span>
                         </p>
                         <p className='flex items-center mx-6'> 
                             <i className='inline-block'><FaHeart /></i>
                         </p>
                         <p className='flex items-center mx-6'> 
                             <i className='inline-block'><FaEllipsisH /></i>
                         </p>
                    </section>
                 </aside>
            </li>
        </ul>
  )
}

export default MusicListing



// below lies component same as in the musiclisting above
const Music = () => {
 return (
    <aside>
        <section className='flex items-center justify-between'>
            <p className='text-green-500'> #1</p>
            <div className='Music-img_div mx-4 w-10 h-10 bg-red-500 rounded-md'></div>
            <h4 className='mx-4 text-green-500'>Music Name</h4>
            <p className='mx-10 tracking-wider'>Hunting High and Low</p>
       </section>
      
    </aside>
 )
}

const MusicAction = () => {
    return (
       <aside>
           <section className='flex items-center justify-between'>
               <p> #1</p>
               <div className='Music-img_div mx-4'></div>
               <h4 className='mx-4'>Music Name</h4>
               <p>Music Album</p>
         </section>
       </aside>
    )
   }