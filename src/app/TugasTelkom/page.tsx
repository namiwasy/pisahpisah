function Page() {
  return (
    
    <div className="bg-white h-full ">
      <div className="flex">
        <img
          src="/assets/logo_telkom.png"
          alt="logo telkom"
          width={50}
          height={50}
          style={{ objectFit: 'contain' }}
          className="ml-4 mt-2"
        />
        <h1 className="text-gray-900 text-2xl font-bold mt-5 ml-4">
          SMK TELKOM MAKASSAR
        </h1>
        <div className="flex ml-auto mr-10">
          <img
            src="/assets/pp_biru1.png"
            alt="pp biru"
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
          
          <h1 className="text-[#2b2b2b] text-2xl font-bold mt-3 ml-4 hover:scale-108">Oktavianto</h1>
          <h1 className="text-gray-900 text-2xl font-bold mt-3 ml-4 hover:scale-108 ">⏷</h1>
          
        </div>
      </div>
      <div className="flex">
      <div className="flex justify-between ">
        <div className="bg-white h-40 w-160 rounded-2xl shadow-2xl ml-4 mt-4">
          <div className="bg-[#D3E5F8] h-10 w-160 rounded-t-lg pt-1.5 pl-5 flex">
            <h1 className="text-gray-800 font-semibold">📢 Jurnal Mengajar</h1>
            <div className="flex ml-auto mr-5">
              <select className="border border-gray-800 rounded-md h-7 w-30 text-sm font-normal text-gray-800">
                <option>XI RPL 4</option>
                <option>XI RPL 3</option>
                <option>XI RPL 2</option>
                <option>XI RPL 2</option>
              </select>
              <input type="date" defaultValue="2025-09-29" className="border border-gray-800 rounded-md h-7 w-35 text-sm font-normal text-gray-800 ml-2" />
            </div>
          </div>
          <div className='flex'>
            <h1 className='text-gray-900 font-bold text-xl ml-20 mt-0.5'>Status Kehadiran</h1>
            <h1 className='text-gray-900 font-bold text-xl ml-45 mt-0.5'>Status Jurnal</h1>
          </div>
          <div className='flex mt-3'>
            <h1 className='text-gray-600 font-bold text-4xl ml-23'>0</h1>
            <h1 className='text-gray-600 font-bold text-4xl ml-23'>0</h1>
            <h1 className='text-gray-600 font-bold text-4xl ml-28'>0</h1>
            <h1 className='text-gray-600 font-bold text-4xl ml-25'>0</h1>
            <h1 className='text-gray-600 font-bold text-4xl ml-25'>0</h1>
          </div>
          <div className="flex">
            <h1 className="text-gray-900 font-semibold text-xs ml-22">Hadir</h1>
            <h1 className="text-gray-900 font-semibold text-xs ml-18">Tidak hadir</h1>
            <h1 className="text-gray-900 font-semibold text-xs ml-19">Belum</h1>
            <h1 className="text-gray-900 font-semibold text-xs ml-22">Draft</h1>
            <h1 className="text-gray-900 font-semibold text-xs ml-20">Simpan</h1>
          </div>
        </div>
        <div className="bg-white h-40 w-80 shadow-2xl mr-auto ml-5 rounded-2xl flex mt-4">
          <div className="justify-center mt-15 text-xs ml-20">
            <h1 className="text-gray-800 font-bold font-sans text-center"> Guru Terbaik</h1>
            <h1 className="text-gray-400 font-bold font-sans text-center italic"> Belum Ada Guru Terbaik</h1>
          </div>
          <img
            src="/assets/pp_abuabu.png"
            alt="pp abu"
            width={70}
            height={70}
            style={{ objectFit: 'contain' }}
            className="ml-4"
          />
        </div>
      </div>
      <div>
      </div>
      </div>
      {/* Aplikasi dan News Section */}
      <div>
       <div className="flex justify-between">
        <div className='bg-white shadow-2xl h-130 ml-5 mt-5 w-180 rounded-2xl '>
          <div className='bg-[#d7dff8] h-10 w-180 rounded-t-lg pt-1.5 pl-5 flex'>
            <h1 className='text-gray-800 font-semibold'>📢 Aplikasi</h1>
          </div>
          <div className='flex gap-10 justify-center mt-50'>
            <div className='bg-[#30385b]   hover:bg-[#87CEFA]  h-15 w-15 rounded-md cursor-pointer hover:scale-108 transition'>
              <h1 className='text-center text-3xl mt-2.5'>📑</h1>
            </div>
            <div className='bg-[#30385b]  hover:bg-[#87CEFA] h-15 w-15 rounded-md cursor-pointer hover:scale-108 transition'>
              <h1 className='text-center text-3xl mt-2.5'>💯</h1>
            </div>
            <div className='bg-[#30385b] hover:bg-[#87CEFA] h-15 w-15 rounded-md cursor-pointer hover:scale-108 transition'>
              <h1 className='text-center text-3xl mt-2.5'>📖</h1>
            </div>
            <div className='bg-[#30385b] hover:bg-[#87CEFA] h-15 w-15 rounded-md cursor-pointer hover:scale-108 transition'>
              <h1 className='text-center text-3xl mt-2.5'>📋</h1>
            </div>
            <div className='bg-[#30385b] hover:bg-[#87CEFA] h-15 w-15 rounded-md cursor-pointer hover:scale-108 transition'>
              <h1 className='text-center text-3xl mt-2.5'>📚</h1>
            </div>
          </div>
          <div className="flex">
            <h1 className='text-black font-semibold font-sans mt-1 ml-33'>Jurnal</h1>
            <h1 className='text-black font-semibold font-sans mt-1 ml-15'>Nilai</h1>
            <h1 className='text-black font-semibold font-sans mt-1 ml-12'>Akademik</h1>
            <h1 className='text-black font-semibold font-sans mt-1 ml-7'>Presensi</h1>
            <h1 className='text-black font-semibold font-sans mt-1 ml-11'>Rapor</h1>
          </div>
          <div>
            <h1 className='text-black font-semibold font-sans  ml-31'>Penilaian</h1>
          </div>
        </div>
        <div className="bg-white h-130 w-60 shadow-2xl ml-5 mt-5 rounded-2xl mr-67 ">
          <div className="bg-[#d7dff8] h-10 w-60 rounded-t-lg pt-1.5 pl-5 flex">
            <h1 className='text-gray-800 font-semibold'>📢 News</h1>
            <h1 className='text-gray-900 font-bold ml-28'>⌞ ⌝</h1>
          </div>
          <div className='bg-gradient-to-b from-[#006aff] to-[#00d9ff] h-50 w-55 rounded-md mt-2 ml-2.5 flex items-center justify-center'>
            <div className='bg-white h-30 w-48 rounded-md flex flex-col items-center justify-center p-3'>
              <h1 className='text-[#24b4b7] font-bold font-sans text-center'>APLIKASI CUTI TERBARU</h1>
              <h1 className='text-[#24b4b7] text-xs font-sans text-center'>────୨ৎ────</h1>
              <div className='bg-[#24b4b7] h-6 w-36 rounded-md hover:bg-[#1fa1a3] transition flex items-center justify-center mt-2'>
                <h1 className='text-white text-xs font-semibold'>🔗 Link download</h1>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default Page;