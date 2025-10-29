import React from 'react'

function maincontent() {
  return (
    <div>
      <div className='bg-gray-100 h-180 w-258'>
        <h1 className='ml-10 font-sans'>Here's what's happening with your projects today.</h1>

        <div className='flex ml-10 mt-5 gap-10'>
            {/* 1 */}
            <div className='bg-white h-50 w-50 rounded-xl border-1 border-gray-300 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                <div className='flex'>
                <div className='bg-blue-300 h-20 w-20 rounded-xl ml-5 mt-5 text-center justify-center flex items-center'>
                    <h1 className='text-blue-600 text-2xl font-bold'>ᝰ.ᐟ</h1>
                </div>
                <h1 className='text-green-600 mt-13 ml-8'>+12%</h1>
                </div>
                <h1 className='text-3xl font-extrabold font-sans ml-5 mt-5'>2,847</h1>
                <h1 className='font-sans text-gray-500 ml-5 '>Total users</h1>
            </div>
            {/* 2 */}
            <div className='bg-white h-50 w-50 rounded-xl border-1 border-gray-300 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                <div className='flex'>
                <div className='bg-green-200 h-20 w-20 rounded-xl ml-5 mt-5 text-center justify-center flex items-center'>
                    <h1 className='text-green-600 text-2xl font-bold'>$</h1>
                </div>
                <h1 className='text-green-600 mt-13 ml-8'>+8%</h1>
                </div>
                <h1 className='text-3xl font-extrabold font-sans ml-5 mt-5'>$45,210</h1>
                <h1 className='font-sans text-gray-500 ml-5 '>Revenue</h1>
            </div>
            {/* 3 */}
            <div className='bg-white h-50 w-50 rounded-xl border-1 border-gray-300 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                <div className='flex'>
                <div className='bg-purple-300 h-20 w-20 rounded-xl ml-5 mt-5 text-center justify-center flex items-center'>
                    <h1 className='text-purple-600 text-2xl font-bold'>⛟</h1>
                </div>
                <h1 className='text-red-500 mt-13 ml-8'>-3%</h1>
                </div>
                <h1 className='text-3xl font-extrabold font-sans ml-5 mt-5'>1,234</h1>
                <h1 className='font-sans text-gray-500 ml-5 '>Orders</h1>
            </div>
            {/* 4 */}
            <div className='bg-white h-50 w-50 rounded-xl border-1 border-gray-300 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                <div className='flex'>
                <div className='bg-orange-200 h-20 w-20 rounded-xl ml-5 mt-5 text-center justify-center flex items-center'>
                    <h1 className='text-orange-600 text-2xl font-bold'>⏱</h1>
                </div>
                <h1 className='text-green-600 mt-13 ml-8'>+15%</h1>
                </div>
                <h1 className='text-3xl font-extrabold font-sans ml-5 mt-5'>98.5%</h1>
                <h1 className='font-sans text-gray-500 ml-5 '>Uptime</h1>
            </div>
        </div>

        <div className='bg-white h-70 w-230 ml-10 rounded-2xl mt-5 border-1 border-gray-300 shadow-md'>
            <div className='flex'>
            <h1 className='font-sans ml-5 mt-5 font-bold'>Recently Activity</h1>
            <h1 className='text-blue-600 font-semibold font-sans mt-5 ml-auto mr-5'>View all</h1>
            </div>
            {/* 1 */}
            <div className='bg-gray-100 rounded-2xl h-20 w-220 ml-5 mt-5 flex items-center'>
                <img src='/assets/Hiii.jpeg' alt='pp' width={40} height={40} className='rounded-full ml-5'/>
                <div className='ml-5'>
                <h1 className='text-xl font-semibold font-sans'>miu completed project</h1>
                <h1 className='text-gray-500 text-xs font-sans'>2 hour ago</h1>
                </div>
                <h1 className='ml-auto mr-5'>✔</h1>
            </div>
            {/* 2 */}
            <div className='bg-gray-100 rounded-2xl h-20 w-220 ml-5 mt-5 flex items-center'>
                <img src='/assets/dearinnie.jpeg' alt='pp' width={40} height={40} className='rounded-full ml-5'/>
                <div className='ml-5'>
                <h1 className='text-xl font-semibold font-sans'>Dk uploaded new design</h1>
                <h1 className='text-gray-500 text-xs font-sans'>4 hour ago</h1>
                </div>
                <h1 className='ml-auto mr-5'>📤</h1>
            </div>
        </div>


      </div>
    </div>
  )
}

export default maincontent
