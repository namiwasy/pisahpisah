import React from 'react'

 function page() {
  return (

    <div className="bg-pink-300 h-screen">
      {/* title  */}
      <div><div className= "text-3xl text-white font-bold text-shadow-lg">Math Solver </div>
      </div>
    
    {/* Kotak hasil  */}
    <div className="bg-white h-100 w-190 mt-5 rounded-2xl ml-3 border-1 border-black drop-shadow-2xl">
    <div className="h-20 w-180 bg-pink-500 mt-5 rounded-2xl ml-3 border-1 border-pink-900">
    <div className="text-white mt-2 ml-4 text-2xl font-bold">⟳</div>
    <div className="text-white ml-170 text-3xl font-bold">0</div>
    </div>

    {/* Kotak kecil  */}
    <div className="flex p-2 ml-2">
      <div className=" bg-pink-300 h-12 w-50 rounded-3xl border-2 border-black">
        <h1 className="text-blue-900 ml-10 mt-3 font-bold">Rad
          <span className="text-gray-700 ml-7 mt-3">│</span>
          <span className="text-white ml-7 mt-3">Deg</span>
        </h1>
      </div>
      <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-10 mt-3">x!</h1>
         </div>

         <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-11 mt-3"> ( </h1>
         </div>

         <div className="bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-12 mt-3">)</h1>
         </div>

         <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-11 mt-3">%</h1>
         </div>

         <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-9 mt-3">AC</h1>
         </div>


    </div>

    {/* Kotak kecil2   */}
    <div className="flex p-0.5 ml-3">
      <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-9 mt-3">Inv</h1>
         </div>

         <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-10 mt-3">sin</h1>
         </div>

      <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-10 mt-3">In</h1>
         </div>

         <div className=" bg-pink-200 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-black ml-11 mt-3"> 7 </h1>
         </div>

         <div className=" bg-pink-200 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-black ml-11 mt-3">8</h1>
         </div>

         <div className=" bg-pink-200 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-black ml-11 mt-3">9</h1>
         </div>

         <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-11 mt-3">÷</h1>
         </div>


    </div>

    {/* Kotak kecil3   */}
      <div className="flex p-1.5 ml-2">
      <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-10 mt-3">π</h1>
         </div>

         <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-9 mt-3">cos</h1>
         </div>

      <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-9 mt-3">log</h1>
         </div>

         <div className=" bg-pink-200 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-black ml-11 mt-3"> 4 </h1>
         </div>

         <div className=" bg-pink-200 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-black ml-11 mt-3">5</h1>
         </div>

         <div className=" bg-pink-200 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-black ml-11 mt-3">6</h1>
         </div>

         <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-11 mt-3">x</h1>
         </div>


    </div>

    {/* Kotak kecil4   */}
    <div className="flex p-1 ml-3">
      <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-10 mt-3">e</h1>
         </div>

         <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-9 mt-3">tan</h1>
         </div>

      <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-10 mt-3">√</h1>
         </div>

         <div className=" bg-pink-200 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-black ml-11 mt-3"> 1 </h1>
         </div>

         <div className=" bg-pink-200 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-black ml-11 mt-3">2</h1>
         </div>

         <div className=" bg-pink-200 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-black ml-11 mt-3">3</h1>
         </div>

         <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-11 mt-3">-</h1>
         </div>


    </div>
    {/* Kotak kecil4   */}
    <div className="flex p-1 ml-3">
      <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-8 mt-3">Ans</h1>
         </div>

         <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-8 mt-3">EXP</h1>
         </div>

      <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-10 mt-3">x
          <span className="text-white text-xs top-3">y</span>
        </h1>
         </div>

         <div className=" bg-pink-200 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-11 mt-3"> 0 </h1>
         </div>

         <div className=" bg-pink-200 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-11 mt-3">.</h1>
         </div>

         <div className=" bg-pink-500 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-blue-950 ml-11 mt-3 font-bold">=</h1>
         </div>

         <div className=" bg-pink-300 h-12 w-25 rounded-3xl ml-1 border-2 border-black">
        <h1 className="text-white ml-11 mt-3">+</h1>
         </div>


    </div>
    </div>
    </div>
  )
}
export default page