import React from 'react'

export default function header() {
    return (
        <div>
            <div className="bg-white h-16 w-358 flex text-center items-center drop-shadow-2xl border-gray-300 border-2">
                <h1 className="font-bold text-2xl ml-10 ">Dashboard</h1>
                <div className="ml-50 flex gap-10">
                    <h1 className=" text-xl gap-5">Home</h1>
                    <h1 className=" text-xl gap-5 ">Analytics</h1>
                    <h1 className=" text-xl gap-5 ">Projects</h1>
                    <h1 className=" text-xl gap-5 ">Reports</h1>
                    <h1 className=" text-xl gap-5 ">Contacts</h1>
                </div>

                <div className="ml-auto flex items-center">
                    <h1 className=" text-xl ml-auto mr-10">🔔</h1>
                    <h1 className=" text-xl ml-auto mr-10">🔎</h1>
                    <img src="/assets/fotomiw.jpg" alt="foto" className="h-10 w-10 rounded-full mr-10 cursor-pointer hover:scale-105 transition"/>
                </div>
            </div>
        </div>
    )
}
