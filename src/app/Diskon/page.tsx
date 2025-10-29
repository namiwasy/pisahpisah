import React from 'react'

function page() {
  return (
    <div className='bg-gradient-to-b from-pink-300 to-pink-500 h-300 w-full flex flex-col items-center'>

      <div className='flex'>

      {/*  */}
      <div className='bg-white h-140 w-100 rounded-2xl mt-5 ml-5 shadow-lg shadow-pink-900'>
        <div className='bg-pink-500 h-20 w-100 rounded-t-2xl'>
          <h1 className='text-white font-semibold text-2xl text-center pt-5'>Aplikasi Perhitungan Diskon</h1>
        </div>
      <div>
        <h1 className='text-pink-600 font-semibold mt-3 ml-3'>Masukkan nama barang</h1>
        <div className='bg-white border-2 border-pink-300 h-10 w-80 ml-3 mt-1 rounded-md '></div>
      </div>
      <div>
        <h1 className='text-pink-600 font-semibold mt-3 ml-3'>Masukkan kategori barang</h1>
        <div className='bg-white border-2 border-pink-300 h-10 w-80 ml-3 mt-1 rounded-md '></div>
      </div>
      <div>
        <h1 className='text-pink-600 font-semibold mt-3 ml-3'>Masukkan harga barang</h1>
        <div className='bg-white border-2 border-pink-300 h-10 w-80 ml-3 mt-1 rounded-md '></div>
      </div>
      <div>
        <h1 className='text-pink-600 font-semibold mt-3 ml-3'>Masukkan diskon barang</h1>
        <div className='bg-white border-2 border-pink-300 h-10 w-80 ml-3 mt-1 rounded-md '></div>
      </div>
      <div className='bg-pink-300 h-13 w-80 rounded-2xl ml-3 hover:shadow-pink-900 hover:bg-green-600 hover:shadow-md mt-5   transition hover:scale-105'>
        <h1 className='text-white font-sans font-semibold text-center pt-3 text-shadow-md'>Hitung</h1>
      </div>
      <div className='bg-pink-300 h-13 w-80 rounded-2xl ml-3 hover:shadow-pink-900 hover:bg-red-800 hover:shadow-md mt-3  transition hover:scale-105'>
        <h1 className='text-white font-sans font-semibold text-center pt-3 text-shadow-md'>Bersih</h1>
      </div>
      </div>

      {/*  */}
      <div className='bg-white h-90 w-100 rounded-2xl mt-5 ml-5 shadow-lg shadow-pink-900'>
        <div className='bg-pink-500 h-20 w-100 rounded-t-2xl'>
          <h1 className='text-white font-semibold text-2xl text-center pt-5'>Aplikasi Perhitungan Diskon</h1>
        </div>
        <div>
        <h1 className='text-pink-600 font-semibold mt-3 ml-3'>Nama Barang : Susu dancow</h1>
        <h1 className='text-pink-600 font-semibold mt-3 ml-3'>Kategori barang :   Minuman</h1>
        <h1 className='text-pink-600 font-semibold mt-3 ml-3'>Nilai diskon: 6000.00</h1>
        <h1 className='text-pink-600 font-semibold mt-3 ml-3'>Total harga : 5400.00</h1>
        </div>
      <div className='bg-pink-300 h-13 w-80 rounded-2xl ml-3 hover:shadow-pink-600 hover:bg-amber-200 hover:shadow-md mt-10  transition hover:scale-105'>
        <h1 className='text-white font-sans font-semibold text-center pt-3 text-shadow-md'>Kembali</h1>
      </div>
      </div>


      </div>

      {/*  */}
      


      
    </div>
  )
}

export default page