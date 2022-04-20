import { FaSearch} from "react-icons/fa";

function NavigationSearch() {
  return (
   <form className="my-4">
      <label className='bg-spotify-200 py-2 px-1 flex rounded-md overflow-hidden focus:outline-none'>
         <span className='p-2 '>
           <FaSearch />
         </span>
         <input type='text' placeholder='Search' className='pl-2 bg-spotify-200 text-white'/>
        
      </label>
   </form>
  )
}

export default NavigationSearch