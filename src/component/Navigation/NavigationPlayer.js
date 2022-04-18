import { FaSpeakerDeck,FaVolumeUp,FaList} from "react-icons/fa";
import './Styles/NavigationPlayer.css'
function NavigationPlayer({isFullNav}) {
  return (
    <section className='Nav-Player'>
       <aside className='flex items-center'>
           {isFullNav ? (
               <>
                 <div className='w-12 h-12 bg-white rounded-full flex justify-center items-center'>
                    <span className='bg-black w-4 h-4 rounded-full'> </span>
                 </div>
                <p className='ml-2 py-2'>
                    <span className='block font-bold'>Save Your Tears</span>
                    <span className='block text-sm'>Ariana Grande</span>
                 </p>
               </>
           ): (
               <>
                  <div className='w-12 h-12 bg-white rounded-full flex justify-center items-center'>
                     <span className='bg-black w-4 h-4 rounded-full'> </span>
                  </div>
               </>
           )}
       </aside>
       { isFullNav ?
       (<aside className="flex justify-between items-center mt-4">
           <div className="flex items-center">
               <span className="mr-2">
                     <FaVolumeUp />       
               </span>
               <p className="Player-control">
                   <span className=""></span>
               </p>
           </div>
           <p className="flex">
               <span className="mx-4">
                       <FaList />     
               </span>
               <span>
                      <FaSpeakerDeck />              
               </span>
           </p>
       </aside>) :
       (
        <aside className="flex justify-between items-center mt-4">
         <div className="flex items-center">
            <span className="mr-2"> <FaVolumeUp /> </span>    
         </div>
      
       </aside>
       )
     }
    </section>
  )
}

export default NavigationPlayer