import React from 'react'

function right() {
  return (
    <div>
      <div className='bg-white h-220 w-50 border-2 border-gray-300'>
        <h1 className='text-gray-700 font-bold mt-5 ml-5 font-sans'>Notification</h1>

        <div className='bg-blue-200 h-15 w-40 ml-5 rounded-md mt-5'></div>
        <div className='bg-blue-200 h-15 w-40 ml-5 rounded-md mt-3'></div>

        <h1 className='text-gray-700 font-bold mt-5 ml-5 font-sans'>Team members</h1>
        {/* 1 */}
        <div className='flex'>
          <img src='/assets/frog.jpeg' alt='pp' width={35} height={35} className='rounded-full ml-5 mt-3'/>
          <div>
            <h1 className='font-bold font-sans mt-2 ml-3'>frog</h1>
            <h1 className='font-sans ml-3 text-xs'>frontend developer</h1>
          </div>
        </div>
        {/* 2 */}
        <div className='flex'>
          <img src='/assets/cat.jpeg' alt='pp' width={35} height={35} className='rounded-full ml-5 mt-3'/>
          <div>
            <h1 className='font-bold font-sans mt-2 ml-3'>Loopy</h1>
            <h1 className='font-sans ml-3 text-xs'>UI designer</h1>
          </div>
        </div>
        {/* 3 */}
        <div className='flex'>
          <img src='/assets/snoopy.jpeg' alt='pp' width={35} height={35} className='rounded-full ml-5 mt-3'/>
          <div>
            <h1 className='font-bold font-sans mt-2 ml-3'>Snoopyyyyy</h1>
            <h1 className='font-sans ml-3 text-xs'>backend developer</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default right