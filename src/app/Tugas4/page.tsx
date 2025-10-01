import React from 'react';
import Image from "next/image";
function page() {
    return (
        <div className="bg-blue-950 h-screen gap-5">
            <div className="p-2 ml-3">
                <h1 className="text-white font-bold text-3xl">Dashboard Monitoring Jaringan</h1>
                <h3 className="text-white font-medium text-sm mt-1">Status Koneksi internet dan perangkat lokal secara real-time</h3>

            </div>
            {/*kotak pertama*/}
            <div className='p-5 space-y-5'>
                <div className="bg-blue-900 h-17 w-full rounded-2xl flex items-center">
                    <h1 className="text-white font-bold  ml-2">Rentang IP Lokal (CDIR)</h1>
                    <div className='bg-gray-800 h-10 w-60 rounded-md ml-2'>
                        <h1 className='text-white mt-2 ml-3'>198:62738234</h1>
                    </div>

                    <div className='bg-blue-400 h-10 w-50 rounded-md flex justify-center ml-2'>
                        <h1 className='text-white mt-2'>🔎︎ Mulai Scan Lokal</h1>
                    </div>

                </div>
                {/*kotak baris  ke 2*/}
                <div className="flex gap-3">
                    <div className="bg-green-700 h-20 w-80 rounded-md flex items-center px-3">
                        <h1 className="text-2xl bg-green-900 p-1 h-10 rounded-full">🌐</h1>
                        <div>
                            <h1 className="text-black ml-2 text-xs ">Status Internet</h1>
                            <h1 className="text-white ml-2 font-bold text-2xl ">Online</h1>
                        </div>
                    </div>

                    <div className="bg-blue-900 h-20 w-80 rounded-md flex items-center px-3">
                        <h1 className="text-2xl bg-gray-900 p-1 h-10 rounded-full text-white">🌍</h1>
                        <div>
                            <h1 className="text-gray-400 ml-2 text-xs ">Lokal Internet
                            </h1>
                            <h1 className="text-white ml-2 font-bold text-2xl">16
                                    <span className="text-white ml-2 text-xs">ms</span>
                                
                            </h1>
                        </div>
                    </div>
                    <div className="bg-blue-900 h-20 w-80 rounded-md flex items-center px-3">
                        <h1 className="text-2xl bg-gray-900 p-1 h-10 rounded-full text-white">🚫</h1>
                        <div>
                            <h1 className="text-gray-400 ml-2 text-xs ">Pocket loss
                            </h1>
                            <h1 className="text-white ml-2 font-bold text-2xl">0,30
                                
                                    <span className="text-white ml-2 text-xs">%</span>
                                
                            </h1>
                        </div>
                    </div>
                    <div className="bg-blue-900 h-20 w-80 rounded-md flex items-center px-3">
                        <h1 className="text-2xl bg-gray-900 p-1 h-10 rounded-full text-white">🟢</h1>
                        <div>
                            <h1 className="text-gray-400 ml-2 text-xs ">Perangkat Lokal Aktif</h1>
                            <h1 className="text-white ml-2 font-bold text-2xl">1786/2379</h1>
                        </div>
                    </div>
                </div>

                <div className='flex gap-3'>
                {/*kotak baris ke 3 big*/}

                <div className="">
                    <div className="bg-blue-900 h-70 w-180 overflow-hidden gap-3 rounded-md py-3 px-10 ">
                        <h1 className="text-white font-bold text-2xl">Penggunaan Bandwidth Internet (Mbps)</h1>
                        <Image
                                src="/assets/wifi_speed-removebg-preview.png"
                                alt="WiFi Speed"
                                width={900}
                                height={900}
                                className='w-full h-full mt-3 object-cover'
                            />
                    </div>
                </div>

                {/*kotak baris ke 3 small*/}
                 <div className="">
                    <div className="bg-blue-900 h-20 w-127 rounded-md ">
                        <div className='p-3 '>
                            <h1 className="text-white  ml-2 text-2xl font-bold">Top 20 Pengguna Internet</h1>
                            <h1 className="text-gray-400 ml-45 text-xs">Tidak ada perangkat online</h1>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )



}

export default page;