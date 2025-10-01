import React from 'react';
import Ujian544241160 from './Ujian/ujian-544241160';
import Textbox from '../ujian/Textbox/textbox';
function Page() {
  return (
    <div className="bg-pink-400 h-full">
      <Ujian544241160 />
      <Textbox />
      <div className="text-white text-6xl flex justify-center font-bold">Namira Syafiqah</div>
      <div className="flex justify-center">
        <div className="bg-pink-200 w-50 h-70 rounded-2xl mt-7 border-pink-400 shadow-[0_4px_20px_#FFFFC5]"></div>
        <div className="bg-pink-200 w-50 h-70 rounded-2xl mt-7 ml-10 border-pink-400 shadow-[0_4px_20px_#FFFFC5]"></div>
      </div>
      <div className="flex justify-center">
        <div className="bg-pink-200 w-50 h-70 rounded-2xl mt-7 border-pink-400 shadow-[0_4px_20px_#FFFFC5]"></div>
        <div className="bg-pink-200 w-50 h-70 rounded-2xl mt-7 ml-10 border-pink-400 shadow-[0_4px_20px_#FFFFC5]"></div>
        <div className="bg-pink-200 w-50 h-70 rounded-2xl mt-7 ml-10 border-pink-400 shadow-[0_4px_20px_#FFFFC5]"></div>
      </div>
    </div>
  );
}

export default Page;