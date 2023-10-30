import { Button, button } from '@material-tailwind/react'
import userInstance from '../instance'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function List({fetchUrl}) {

    const [showModal,setShowModal]=useState(false)
    const base_url = 'https://api.slingacademy.com/v1/sample-data/users'
    
    const [users,setUsers]= useState([]);
    // const fetchInfo = () => { 
    //     return fetch(base_url) 
    //             .then((res) => res.json()) 
    //             .then((d) => setUsers(d)) 
    //     }
        
    //     useEffect(() => {
    //         fetchInfo();
    //     }, [])
    fetch("https://api.slingacademy.com/v1/sample-data/users/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setUsers(json.users);
    });

// useEffect hook is used to fetch the data on page reload 
// useEffect hook tells react what the component needs to do when the page is rendered 
  // useEffect(() => {
  //   apiGet();
  // }, []);
  return (
    <div >
           
       
<div className=''>
    <div className='mt-5' style={{marginTop:'100px'}}>
    </div>
    </div>
         
<div style={{marginLeft:'30px'}}>
    <div className="min-h-screen " style={{marginTop:'80px'}}>
      <div className="">
        <div className="">
          <div className="border rounded-lg divide-y divide-gray-100  dark:divide-gray-200 shadow" style={{marginLeft:'130px',marginRight:'130px'}}>
            <div className="py-3 px-4">
              <div className='flex justify-between mt-5'>
        <div>
                                 Total ({users.length})
            
        </div>    
        <div>
        <i class="fa-solid fa-magnifying-glass"></i>
           <input type="text" className='border-b border-grey-600 dark:text-gray-400 mr-5 p-3 pl-5 rounded'  placeholder='Search by name'/>
           
               <Button type='button' className='mr-5 ' style={{backgroundColor:'#17494D',color:'white'}} onClick={() => setShowModal(true)}>
               <i class="fa-solid fa-filter mr-1"></i>
                          Filter
                    
                </Button> 
        
<Link to={'/add'}>
                    <Button type='button' className='mr-5 ' style={{backgroundColor:'#95BF47'}}>
                    <i class="fa-solid fa-plus mr-1"></i>
                              Add New
                        
                    </Button> 
    
</Link>            
        </div>    
        
    </div>    

            </div>
            <div className="sm:justify-center ml-4 sm:ml-0">
              <table className="table-fixed min-w-full divide-y divide-gray-200 dark:divide-gray-200 ">
                <thead  style={{color:'black'}} >
                  <tr>
                   
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Country</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>


                  </tr>
                </thead>

{            users.map(item=>(    
 <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                  
                    <td className="px-6 py-3 text-left text-sm flex">
                        <img src={item.profile_picture} alt="" width={'30px'} style={{borderRadius:"100%"}} className='mr-1'/>
                        {item.first_name} {item.last_name}</td>
                    <td className="px-6 py-4py-3 text-left text-sm">{item.email}</td>
                    <td className="px-6 py-3 text-left  text-sm ">{item.phone}</td>
                    <td className="px-6 py-3 text-left  text-sm ">{item.country}</td>

                    <td className="px-6 py-4   text-sm ">
                      <a className="text-yellow-500 hover:text-blue-700 border border-yellow-600 pr-1 pl-1 pt-1 pb-1 rounded mr-1" href="#">
                      <i class="fa-regular fa-eye fa-xl "></i>
                      </a>      
                      <a className="text-green-500 hover:text-blue-700 border border-green-600 pr-1 pl-1 pt-1 pb-1 rounded mr-1" href="#">
                      <i class="fa-solid fa-pencil fa-xl "></i>
                      </a>
                      <a className="text-red-500 hover:text-blue-700 border border-red-600 pr-1 pl-1 pt-1 pb-1 rounded mr-1" href="#">
                      <i class="fa-solid fa-trash-can fa-xl "></i>
                      </a>


                    </td>
                  </tr>
    
                </tbody>
))}         
   </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    
</div>  
{showModal ? (
        <>
          <div className="w-screen h-screen fixed inset-0 mt-10" style={{width:'400px',marginLeft:'35%'}}>
            <div className="  my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white ">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Filter</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-10 text-xl block  py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>

                <div className='justify-center p-5'>
    <div className='grid grid-cols-1 justify-items-start mt-5 p-5'>
    
      <label htmlFor="" className='font-semibold mt-2'>Assign Country</label>
<select name="" id="" className='border border-gray-300 rounded p-1 px-3 shadow mt-2 w-11/12'>
<option value="" selected disabled className='text-gray-300' >Select</option>
    <option value="">India</option>
</select>
    </div> 
<div className='grid grid-rows-1 px-6'>
<div className='grid grid-cols-2'>
            <div className='grid grid-cols-1 justify-items-start'>
                <label htmlFor="" className=''>From</label>
                <input type="date" className='border boder-gray-300 w-36 rounded p-1'/>    
                </div>  
                <div className='grid grid-cols-1 '>
<div className='grid grid-cols-1  justify-items-start'>
                    <label htmlFor="" className=''>To</label>
    
</div>                <input type="date" className='border boder-gray-300 w-36 rounded p-1'/>    
                </div>  
    
</div>
    
        {/* <div className='flex justify-between px-6'>
            <input type="date" className='border boder-gray-300 w-36 rounded p-1'/>
            <input type="date" className='border boder-gray-300 w-36 rounded p-1'/>
            </div>   */}
    
</div>    
</div>

                <div className="flex mt-24 justify-between mb-10 px-11">
                  <Button
                    className=' hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' style={{backgroundColor:
                        '#E0E0E0'}}
                    onClick={() => setShowModal(false)}
                  >
                    Reset
                  </Button>
                  <Button
                   className='hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' style={{backgroundColor:
                    '#95BF47'}}
                    onClick={() => setShowModal(false)}
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

</div>
  )
}

export default List
