import { FaSearch} from "react-icons/fa";

function NavigationSearch() {
  return (
   <form className="my-4">
      <label className='bg-gray-600 flex rounded-md overflow-hidden focus:outline-none'>
         <span className='p-2 '>
           <FaSearch />
         </span>
         <input type='text' placeholder='Search' className='pl-2 bg-gray-600 text-white'/>
        
      </label>
   </form>
  )
}

export default NavigationSearch