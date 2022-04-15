import { FaSpeakerDeck,FaVolumeUp,FaList} from "react-icons/fa";
import './Styles/NavigationPlayer.css'
function NavigationPlayer() {
  return (
    <section className='Nav-Player'>
       <aside className='flex items-center'>
            <div className='w-12 h-12 bg-white rounded-full flex justify-center items-center'>
               <span className='bg-black w-4 h-4 rounded-full'>

               </span>
            </div>
            <p className='ml-4 py-2'>
                <span className='block font-bold'>Save Your Tears (With ...</span>
                <span className='block text-sm'>Ariana Grande</span>
            </p>
       </aside>
       <aside className="flex justify-between items-center mt-4">
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
       </aside>
    </section>
  )
}

export default NavigationPlayer