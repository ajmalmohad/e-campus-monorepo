import React from 'react'
import Sidebar from './Sidebar'

function Templated({ children }) {
  return (
    <div className='flex'>
        <div className='flex-1 min-w-[260px] max-w-[300px]'>
            <Sidebar />
        </div>
        <div className='flex-3 w-[100%] p-4'>
            {children}
        </div>
    </div>
  )
}

export default Templated