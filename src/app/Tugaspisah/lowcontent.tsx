import React from 'react'

function lowcontent() {
  return (
    <div>
      <div className='bg-white h-25 w-230 ml-10 border-1 border-gray-300 rounded-xl shadow-md'>
        <h1 className='ml-5 text-xs mt-3 font-bold font-sans'>Quick Action</h1>
        <div className='flex'>
          {/* 1 */}
          <div className='bg-white h-13 w-70 border-1 border-gray-300 rounded-xl ml-5 mt-2'>
            <div className='flex'>
              <h1 className='text-blue-600 mt-1.5 ml-3 text-2xl'>+ 
                <span className='text-xl ml-3 text-gray-500 font-sans'>Create Project</span>
              </h1>
            </div>
          </div>
          {/* 2 */}
          <div className='bg-white h-13 w-70 border-1 border-gray-300 rounded-xl ml-5 mt-2'>
            <div className='flex'>
              <h1 className='text-blue-600 mt-1.5 ml-3 text-2xl'>👤 
                <span className='text-xl ml-3 text-gray-500 font-sans'>Invite team</span>
              </h1>
            </div>
          </div>
          {/* 3 */}
          <div className='bg-white h-13 w-70 border-1 border-gray-300 rounded-xl ml-5 mt-2'>
            <div className='flex'>
              <h1 className='text-blue-600 mt-1.5 ml-3 text-2xl'>⌯⌲ 
                <span className='text-xl ml-3 text-gray-500 font-sans'>Export data</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default lowcontent