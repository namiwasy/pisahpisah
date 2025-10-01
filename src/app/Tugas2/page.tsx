import React from 'react'
import Image from 'next/image';

export default function page() {
  return (
    <div className="bg-gray-100 h-screen overflow-y-auto">
      <div className="bg-blue-950 flex items-center justify-between w-full h-15 sticky top-0 z-10">
        <div className="border-2 border-white h-5 w-3 ml-3"></div>
        <div className="p-3 ml-20 flex items-center">
          <div className="flex items-center w-auto gap-3">
            <div className="border-2 border-white h-5 w-3 ">
              <div className="absolute text-white h-3 w-3 bg-green-600 text-xs items-center top-3 text-center justify-center flex">
                4
              </div>
            </div>
            <div className="border-2 border-white h-5 w-3 ">
              <div className="absolute text-white h-3 w-3 bg-orange-400 text-xs items-center top-3 text-center justify-center flex">
                10
              </div>
            </div>
            <div className="border-2 border-white h-5 w-3 ">
              <div className="absolute text-white h-3 w-3 bg-red-700 text-xs items-center top-3 text-center justify-center flex">
                9
              </div>
            </div>
            <div className="w-auto gap-2 flex">
              <Image
                src="/assets/dearinnie.jpeg"
                alt="profile"
                width={30}
                height={30}
                className="rounded-full object-cover h-8 w-8"
              />
              <div className="gap-3 w-auto">
                <h1 className="text-white">Namira Syafiqah</h1>
              </div>
            </div>
            <div className="border-2 border-white h-5 w-3"></div>
          </div>
        </div>
      </div>

    
      <div className="p-3 h-auto w-full space-y-5">
        <h3 className="font-bold text-xl ml-5">
          Widgets <span className="font-light text-xs">Preview Page</span>
        </h3>
        <div className="flex flex-col lg:flex-row gap-4">
          
          <div className="space-y-5 flex-1">
            <div className=" bg-white h-20 flex">
              <div className="h-full bg-blue-400 w-20 flex justify-center items-center">
                <div className="border-2 border-white h-8 w-6"></div>
              </div>
              <div className="flex-col pl-5 pt-2 space-y-1">
                <p className="text-xs block">MESSAGES</p>
                <p className="font-bold text-md">1,410</p>
              </div>
            </div>

            <div className=" bg-blue-400 h-20 flex">
              <div className="h-full bg-blue-600 w-20 flex justify-center items-center">
                <div className="border-2 border-white rounded-sm h-8 w-6"></div>
              </div>
              <div className="flex-col pt-2 space-y-1 w-full pr-4">
                <p className="text-sm pl-5 font-medium text-white block">
                  BOOKMARKS
                </p>
                <p className="font-bold pl-5 text-white text-sm">41,410</p>
                <div className="h-[2px] w-full bg-blue-950 ml-5">
                  <div className="h-[2px] w-[70%] bg-white"></div>
                </div>
                <p className="font-extralight pl-5 text-white text-xs">
                  70% Increase in 30 Days
                </p>
              </div>
            </div>

            <div>
              <div className=" bg-blue-400 h-25 flex justify-between items-center p-4">
                <div className="flex-col space-y-3">
                  <p className="text-4xl text-white font-bold">150</p>
                  <p className="font-light text-white text-sm">New Orders</p>
                </div>
                <div className="border-2 border-blue-300 h-13 w-10 "></div>
              </div>
              <div className="bg-blue-500 w-full h-6 flex items-center justify-center gap-5">
                <div className=" text-white text-md ">More Info</div>
                <div className="border-2 border-white rounded-sm h-3 w-3"></div>
              </div>
            </div>

            <div className=" bg-white border-t-4 border-blue-500">
              <div className="grid grid-cols-2 gap-3 justify-items-stretch p-3 w-full">
                <div className="text-gray-500">Direct Chat</div>
                <div className="flex gap-3 justify-end">
                  <div className="rounded-full bg-blue-400 h-5 w-5 flex justify-center items-center text-sm text-white">3</div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                </div>
                <div className="col-span-2 text-sm text-gray-600 space-y-3">
                  
                  <div>
                    <div className="text-xs font-semibold flex justify-between">
                      <div>miwa</div>
                      <div className="text-[10px] text-gray-500 font-light">26 Agustus 22:30 WITA</div>
                    </div>
                    <div className="flex items-end gap-2">
                      <Image src="/assets/dearinnie.jpeg" alt="image" width={40} height={40} className="rounded-full h-10 w-10 border-2 border-gray-400 object-cover"/>
                      <div className="flex-1 rounded-md flex items-center h-8 bg-gray-300">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[15px] border-r-gray-300 -ml-3"></div>
                        <div className="text-gray-800 pl-2 text-xs">helloor main yukk</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs font-semibold flex justify-between">
                      <div className="text-[10px] text-gray-500 font-light">26 Agustus 22:32 WITA</div>
                      <div>ghina</div>
                    </div>
                    <div className="flex items-end gap-2 flex-row-reverse">
                      <Image src="/assets/Hiii.jpeg" alt="image" width={40} height={40} className="rounded-full h-10 w-10 border-2 border-gray-400 object-cover"/>
                      <div className="flex-1 rounded-md flex items-center h-8 bg-blue-500">
                        <div className="text-white text-right pr-2 text-xs w-full">halo hahahahah yuk yuk yuk</div>
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[15px] border-l-blue-500 -mr-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-5 flex-1">
            <div className=" bg-white h-20 flex">
              <div className="h-full bg-green-400 w-20 flex justify-center items-center">
                <div className="border-2 border-white h-8 w-6"></div>
              </div>
              <div className="flex-col pl-5 space-y-1 pt-2">
                <p className="text-xs block">BOOKMARKS</p>
                <p className="font-bold text-md">410</p>
              </div>
            </div>
            <div className=" bg-green-400 h-20 flex">
              <div className="h-full bg-green-600 w-20 flex justify-center items-center">
                <div className="border-2 border-white h-8 w-6"></div>
              </div>
              <div className="flex-col pt-2 space-y-1 w-full pr-4">
                <p className="text-sm pl-5 font-medium text-white block">LIKES</p>
                <p className="font-bold pl-5 text-white text-sm">41,410</p>
                <div className="h-[2px] w-full bg-green-950 ml-5">
                  <div className="h-[2px] w-[70%] bg-white"></div>
                </div>
                <p className="font-extralight pl-5 text-white text-xs">70% Increase in 30 Days</p>
              </div>
            </div>
            <div>
              <div className=" bg-green-400 h-25 flex justify-between items-center p-4">
                <div className="flex-col space-y-3">
                  <p className="text-4xl text-white font-bold">53%</p>
                  <p className="font-light text-white text-sm">Bounce Rate</p>
                </div>
                <div className="border-2 border-green-300 h-13 w-10 "></div>
              </div>
              <div className="bg-green-500 w-full h-6 flex items-center justify-center gap-5">
                <div className=" text-white text-md ">More Info</div>
                <div className="border-2 border-white rounded-sm h-3 w-3"></div>
              </div>
            </div>

            <div className=" bg-white border-t-4 border-green-500">
              <div className="grid grid-cols-2 gap-3 justify-items-stretch p-3 w-full">
                <div className="text-gray-500">Direct Chat</div>
                <div className="flex gap-3 justify-end">
                  <div className="rounded-full bg-green-400 h-5 w-5 flex justify-center items-center text-sm text-white">3</div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                </div>
                <div className="col-span-2 text-sm text-gray-600 space-y-3">
                  
                  <div>
                    <div className="text-xs font-semibold flex justify-between">
                      <div>miwa</div>
                      <div className="text-[10px] text-gray-500 font-light">26 Agustus 22:30 WITA</div>
                    </div>
                    <div className="flex items-end gap-2">
                      <Image src="/assets/dearinnie.jpeg" alt="image" width={40} height={40} className="rounded-full h-10 w-10 border-2 border-gray-400 object-cover"/>
                      <div className="flex-1 rounded-md flex items-center h-8 bg-gray-300">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[15px] border-r-gray-300 -ml-3"></div>
                        <div className="text-gray-800 pl-2 text-xs">halo main yukk</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs font-semibold flex justify-between">
                      <div className="text-[10px] text-gray-500 font-light">26 Agustus 22:32 WITA</div>
                      <div>azza</div>
                    </div>
                    <div className="flex items-end gap-2 flex-row-reverse">
                      <Image src="/assets/X.jpeg" alt="image" width={40} height={40} className="rounded-full h-10 w-10 border-2 border-gray-400 object-cover"/>
                      <div className="flex-1 rounded-md flex items-center h-8 bg-green-500">
                        <div className="text-white text-right pr-2 text-xs w-full">halo hahahahah yuk yuk yuk</div>
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[15px] border-l-green-500 -mr-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-5 flex-1">
            <div className=" bg-white h-20 flex">
              <div className="h-full bg-orange-400 w-20 flex justify-center items-center">
                <div className="border-2 border-white h-8 w-6"></div>
              </div>
              <div className="flex-col space-y-1 pl-5 pt-2">
                <p className="text-xs block">UPLOADS</p>
                <p className="font-bold text-md">13,648</p>
              </div>
            </div>
            <div className=" bg-orange-400 h-20 flex">
              <div className="h-full bg-orange-600 w-20 flex justify-center items-center">
                <div className="border-2 border-white h-8 w-6"></div>
              </div>
              <div className="flex-col pt-2 space-y-1 w-full pr-4">
                <p className="text-sm pl-5 font-medium text-white block">EVENTS</p>
                <p className="font-bold pl-5 text-white text-sm">41,410</p>
                <div className="h-[2px] w-full bg-orange-900 ml-5">
                  <div className="h-[2px] w-[70%] bg-white"></div>
                </div>
                <p className="font-extralight pl-5 text-white text-xs">70% Increase in 30 Days</p>
              </div>
            </div>
            <div>
              <div className=" bg-orange-400 h-25 flex justify-between items-center p-4">
                <div className="flex-col space-y-3">
                  <p className="text-4xl text-white font-bold">44</p>
                  <p className="font-light text-white text-sm">User Registrations</p>
                </div>
                <div className="border-2 border-orange-300 h-13 w-10 "></div>
              </div>
              <div className="bg-orange-500 w-full h-6 flex items-center justify-center gap-5">
                <div className=" text-white text-md ">More Info</div>
                <div className="border-2 border-white rounded-sm h-3 w-3"></div>
              </div>
            </div>

             <div className=" bg-white border-t-4 border-orange-500">
              <div className="grid grid-cols-2 gap-3 justify-items-stretch p-3 w-full">
                <div className="text-gray-500">Direct Chat</div>
                <div className="flex gap-3 justify-end">
                  <div className="rounded-full bg-orange-400 h-5 w-5 flex justify-center items-center text-sm text-white">3</div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                </div>
                <div className="col-span-2 text-sm text-gray-600 space-y-3">
                  
                  <div>
                    <div className="text-xs font-semibold flex justify-between">
                      <div>miwa</div>
                      <div className="text-[10px] text-gray-500 font-light">26 Agustus 22:30 WITA</div>
                    </div>
                    <div className="flex items-end gap-2">
                      <Image src="/assets/dearinnie.jpeg" alt="image" width={40} height={40} className="rounded-full h-10 w-10 border-2 border-gray-400 object-cover"/>
                      <div className="flex-1 rounded-md flex items-center h-8 bg-gray-300">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[15px] border-r-gray-300 -ml-3"></div>
                        <div className="text-gray-800 pl-2 text-xs">halo main yukk</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs font-semibold flex justify-between">
                      <div className="text-[10px] text-gray-500 font-light">26 Agustus 22:32 WITA</div>
                      <div>fitrii</div>
                    </div>
                    <div className="flex items-end gap-2 flex-row-reverse">
                      <Image src="/assets/meow or arf_.jpeg" alt="image" width={40} height={40} className="rounded-full h-10 w-10 border-2 border-gray-400 object-cover"/>
                      <div className="flex-1 rounded-md flex items-center h-8 bg-orange-500">
                        <div className="text-white text-right pr-2 text-xs w-full">halo hahahahah yuk yuk yuk</div>
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[15px] border-l-orange-500 -mr-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-5 flex-1">
            <div className=" bg-white h-20 flex">
              <div className="h-full bg-red-400 w-20 flex justify-center items-center">
                <div className="border-2 border-white h-8 w-6"></div>
              </div>
              <div className="flex-col space-y-1 pl-5 pt-2">
                <p className="text-xs block">LIKES</p>
                <p className="font-bold text-md">193,139</p>
              </div>
            </div>
            <div className=" bg-red-400 h-20 flex">
              <div className="h-full bg-red-600 w-20 flex justify-center items-center">
                <div className="border-2 border-white h-8 w-6"></div>
              </div>
              <div className="flex-col pt-2 space-y-1 w-full pr-4">
                <p className="text-sm pl-5 font-medium text-white block">COMMENTS</p>
                <p className="font-bold pl-5 text-white text-sm">41,410</p>
                <div className="h-[2px] w-full bg-red-950 ml-5">
                  <div className="h-[2px] w-[70%] bg-white"></div>
                </div>
                <p className="font-extralight pl-5 text-white text-xs">70% Incrase in 30 Days</p>
              </div>
            </div>
            <div>
              <div className=" bg-red-400 h-25 flex justify-between items-center p-4">
                <div className="flex-col space-y-3">
                  <p className="text-4xl text-white font-bold">65</p>
                  <p className="font-light text-white text-sm w-auto">Unique Visitors</p>
                </div>
                <div className="border-2 border-red-300 h-13 w-10 "></div>
              </div>
              <div className="bg-red-500 w-full h-6 flex items-center justify-center gap-5">
                <div className=" text-white text-md ">More Info</div>
                <div className="border-2 border-white rounded-sm h-3 w-3"></div>
              </div>
            </div>

            <div className=" bg-white border-t-4 border-red-500">
              <div className="grid grid-cols-2 gap-3 justify-items-stretch p-3 w-full">
                <div className="text-gray-500">Direct Chat</div>
                <div className="flex gap-3 justify-end">
                  <div className="rounded-full bg-red-400 h-5 w-5 flex justify-center items-center text-sm text-white">3</div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                </div>
                <div className="col-span-2 text-sm text-gray-600 space-y-3">
                  
                  <div>
                    <div className="text-xs font-semibold flex justify-between">
                      <div>miwa</div>
                      <div className="text-[10px] text-gray-500 font-light">26 Agustus 22:30 WITA</div>
                    </div>
                    <div className="flex items-end gap-2">
                      <Image src="/assets/dearinnie.jpeg" alt="image" width={40} height={40} className="rounded-full h-10 w-10 border-2 border-gray-400 object-cover"/>
                      <div className="flex-1 rounded-md flex items-center h-8 bg-gray-300">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[15px] border-r-gray-300 -ml-3"></div>
                        <div className="text-gray-800 pl-2 text-xs">halo main yukk</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs font-semibold flex justify-between">
                      <div className="text-[10px] text-gray-500 font-light">26 Agustus 22:32 WITA</div>
                      <div>faniiy</div>
                    </div>
                    <div className="flex items-end gap-2 flex-row-reverse">
                      <Image src="/assets/download (1).jpeg" alt="image" width={40} height={40} className="rounded-full h-10 w-10 border-2 border-gray-400 object-cover"/>
                      <div className="flex-1 rounded-md flex items-center h-8 bg-red-500">
                        <div className="text-white text-right pr-2 text-xs w-full">halo hahahahah yuk yuk yuk</div>
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[15px] border-l-red-500 -mr-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}