import React from 'react'
import Navbar from '../components/Navbar'
import Side from '../components/Side'
import List from '../components/List'
function Home({fetchUrl}) {
  return (
    <div>
        <Navbar/>
            <Side/>
            <List fetchUrl={fetchUrl}/>
      
    </div>
  )
}

export default Home
