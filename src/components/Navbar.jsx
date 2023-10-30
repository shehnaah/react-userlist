import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav class="fixed top-0 z-50 w-full  text-gray-950 mb-5">
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start">
        <a href="https://flowbite.com" class="flex ml-2 md:mr-24">
        <img src={process.env.PUBLIC_URL + '/img/logo.png'}  />          <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"></span>
        </a>
        <h4 className='fw-bolder fw-5' style={{fontWeight:'600'}}>Sub Admin</h4>
      </div>
      <div class="flex items-center">
          <div class="flex items-center ml-3">
            <div>
            <Link>
          <i class="fa-solid fa-circle-plus fa-2xl" style={{color:' #70b955',marginRight:'15px'}}></i>
            </Link> 
            </div>
            <div>
            <Link>
    <i class="fa-regular fa-bell fa-2xl" style={{color:'black',marginRight:'15px'}}></i>  
</Link> 

            </div>
            <div>
              <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
              </button>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar
