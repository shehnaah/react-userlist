import { Button } from '@material-tailwind/react'
import React from 'react'

function Add() {
  return (
    <div>
      
<div className='w-25 border grid grid-cols-1 justify-items-center rounded mt-20 shadow' style={{width:'450px',marginLeft:'35%'}}>
<div className='  '>
        <div className='flex justify-center mt-5'>
            <div>
            {/* <img src={process.env.PUBLIC_URL + '/img/Ellipse 17.png'} style={{borderRadius:'100%'}} width={'100px'} className='mr-5' /> */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZKH3bEvIRpMu65iNDTirFTfi4HK9IZ2-hvTzvbo0A7M4KVTQO3CNprfK5CQqBmE81_f8&usqp=CAU" alt="" style={{borderRadius:'100%'}} width={'100px'} className='mr-5'/>
            </div>
            <div className='mt-5 flex items-center justify-center ' style={{color:'#95BF47',fontSize:'20px'}}>
            <i class="fa-solid fa-cloud-arrow-up fa-2xl mr-3"></i>
                Upload photo
            </div>
            
        </div>
<div className='justify-center'>
    <div className='grid grid-cols-1 justify-items-start mt-5'>
    
    <label htmlFor="" className='font-semibold'>Name</label>        
      <input type="text" placeholder='Enter Name' className='border border-gray-300 rounded p-1 px-3 shadow mt-2 w-11/12'/>
      <label htmlFor="" className='font-semibold mt-2'>Email</label>
      <input type="text" placeholder='abc2domain.com' className='border border-gray-300 rounded p-1 px-3 shadow mt-2 w-11/12'/>
      <label htmlFor="" className='font-semibold mt-2'>Phone</label>
      <input type="text" placeholder='9914578063 ' className='border border-gray-300 rounded p-1 px-3 shadow mt-2 w-11/12'/>
      <label htmlFor="" className='font-semibold mt-2'>Assign Country</label>
<select name="" id="" className='border border-gray-300 rounded p-1 px-3 shadow mt-2 w-11/12'>
<option value="" selected disabled className='text-gray-300' >Select</option>
    <option value="">India</option>
</select>
    </div>   
    <div className='flex mt-24 justify-between mb-10'>
        <Button className=' hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' style={{backgroundColor:
'#E0E0E0'}}>Cancel</Button>
        <Button className='hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' style={{backgroundColor:
'#95BF47'}}>Submit</Button>
        </div> 
    
</div>
</div>    
</div>    </div>
  )
}

export default Add
