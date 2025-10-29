import React from "react";
import Navbar2 from "../Component/navbar2";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-pink-400 h-full">
      <Navbar2 />

      {/* Section 1: Hero */}
      <div className="flex items-center justify-between px-10">
        {/* Text */}
        <div>
          <h1 className="text-white text-2xl font-bold mt-23 ml-25">
            Hello, it's me
          </h1>
          <h1 className="text-white text-3xl font-bold ml-25">namiwa (miw)</h1>
          <h1 className="text-white text-2xl font-bold ml-25">
            And I am a frontend student
          </h1>
          <h1 className="text-white text-2xl font-light mt-10 ml-25">
            I am a frontend student
          </h1>

          {/* Lingkaran */}
          <div className="flex mt-4">
            <div className="h-12 w-12 rounded-full border-2 border-pink-200 ml-25"></div>
            <div className="h-12 w-12 rounded-full border-2 border-pink-200 ml-4"></div>
            <div className="h-12 w-12 rounded-full border-2 border-pink-200 ml-4"></div>
            <div className="h-12 w-12 rounded-full border-2 border-pink-200 ml-4"></div>
          </div>

          {/* Tombol */}
          <div className="bg-pink-200 h-13 w-50 mt-5 rounded-3xl border border-black drop-shadow-2xl shadow-[0_4px_20px_#FFFFC5] cursor-pointer hover:scale-105 transition ml-25">
            <div className="text-pink-400 mt-3 ml-10 font-bold">More About Me</div>
          </div>
        </div>

        {/* Foto */}
        <div className="cursor-pointer hover:scale-105 transition">
          <Image
            src="/assets/fotomiw.jpg"
            alt="foto"
            width={300}
            height={300}
            className="rounded-full mt-10 ml-70 border-4 border-pink-300 shadow-[0_4px_20px_#FFFFC5]"
          />
        </div>
      </div>

      {/* About Me Section */}
      <div className="flex items-center justify-between">
        {/* Foto */}
        <div className="ml-25 mt-80">
          <Image
            src="/assets/fotomiw.jpg"
            alt="gambar"
            width={300}
            height={300}
            className="rounded-full border-4 border-pink-300 shadow-[0_4px_20px_#FFFFC5] cursor-pointer hover:scale-105 transition"
          />
        </div>

        {/* Teks */}
        <div className="p-3">
          <h1 className="text-white font-medium text-5xl mt-55 mr-180 text-shadow-md">
            About <span className="text-pink-300">Me</span>
          </h1>
          <h1 className="text-white font-bold text-3xl mt-5">Namira Syafiqah</h1>
          <h1 className="text-white font-medium text-2xl mt-10">
            Namira adalah seorang anak yang dikenal memiliki kepribadian
          </h1>
          <h1 className="text-white font-medium text-2xl">
            pemalu tetapi menyenangkan. Sifat baik hatinya membuat ia selalu
            ringan tangan
          </h1>
          <h1 className="text-white font-medium text-2xl">
            membantu orang lain, sementara kemurahan hatinya menjadikan ia
            pribadi yang
          </h1>
          <h1 className="text-white font-medium text-2xl">
            disukai banyak orang. Ia juga dikenal sangat penyabar, mampu
            menghadapi
          </h1>
          <h1 className="text-white font-medium text-2xl">
            berbagai situasi dengan tenang. Selain itu, Namira adalah sosok
          </h1>
          <h1 className="text-white font-medium text-2xl">
            yang periang, selalu ceria, penuh semangat, dan mampu menciptakan
            suasana yang
          </h1>
          <h1 className="text-white font-medium text-2xl">
            menyenangkan di sekitarnya.
          </h1>

          {/* Tombol */}
          <div className="bg-pink-200 h-13 w-50 mt-5 rounded-3xl border border-black drop-shadow-2xl shadow-[0_4px_20px_#FFFFC5] cursor-pointer hover:scale-105 transition ml-25">
            <h1 className="text-pink-400 mt-3 ml-10 font-bold">More About Me</h1>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <h1 className="text-white font-medium text-5xl mt-40 text-center text-shadow-md">
        My <span className="text-pink-300">Services ᥫ᭡</span>
      </h1>

      <div className="p-3 flex mt-10">
        {/* Box 1 */}
        <div className="bg-pink-600 h-150 w-100 ml-10 rounded-3xl shadow-[0_4px_20px_#FFFFC5] cursor-pointer hover:scale-105 transition flex flex-col p-10">
          <h1 className="text-pink-300 p-3 text-3xl font-bold ml-5 mt-5">⌞ ⌝</h1>
          <h1 className="text-white p-3 mt-3 text-2xl font-normal ml-5">
            UI/UX Design
          </h1>
          <h1 className="text-white p-1 text-xl font-normal ml-7">
            I provide professional UI/UX design services focused on intuitive,
            aesthetic and functional user interfaces. I ensure designs that are
            visually appealing and effective in achieving your business goals.
          </h1>
          <div className="bg-pink-200 h-15 w-50 rounded-full mt-9 ml-7 shadow-[0_4px_20px_#FFFFC5] flex items-center justify-center cursor-pointer hover:scale-105 transition">
            <h1 className="text-pink-400 font-bold">Contact Me</h1>
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-pink-600 h-150 w-100 ml-15 rounded-3xl shadow-[0_4px_20px_#FFFFC5] cursor-pointer hover:scale-105 transition flex flex-col p-10">
          <h1 className="text-pink-300 p-3 text-3xl font-bold ml-5 mt-2">🗁</h1>
          <h1 className="text-white p-3 mt-3 text-2xl font-normal ml-5">
            Graphic Design
          </h1>
          <h1 className="text-white p-1 text-xl font-normal ml-7">
            I provide creative graphic design services that will bring your
            ideas to life into stunning visual masterpieces.
          </h1>
          <div className="bg-pink-200 h-15 w-50 rounded-full mt-39 ml-7 shadow-[0_4px_20px_#FFFFC5] flex items-center justify-center cursor-pointer hover:scale-105 transition">
            <h1 className="text-pink-400 font-bold">Contact Me</h1>
          </div>
        </div>

        {/* Box 3 */}
        <div className="bg-pink-600 h-150 w-100 ml-15 rounded-3xl shadow-[0_4px_20px_#FFFFC5] cursor-pointer hover:scale-105 transition flex flex-col p-10 mr-10">
          <h1 className="text-pink-300 p-3 text-3xl font-bold ml-5 mt-2">🖧</h1>
          <h1 className="text-white p-3 mt-3 text-2xl font-normal ml-5">
            Frontend Dev
          </h1>
          <h1 className="text-white p-1 text-xl font-normal ml-7">
            I offer frontend development services that focus on creating
            attractive and responsive user interfaces.
          </h1>
          <div className="bg-pink-200 h-15 w-50 rounded-full mt-39 ml-7 shadow-[0_4px_20px_#FFFFC5] flex items-center justify-center cursor-pointer hover:scale-105 transition">
            <h1 className="text-pink-400 font-bold">Contact Me</h1>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <h1 className="text-white font-medium text-5xl mt-60 text-center text-shadow-md ">
        My <span className="text-pink-300">Skills ⌯⌲</span>
      </h1>

      <div className="flex items-start justify-between mt-20 px-20">
        <div className="w-150">
          <h1 className="text-white text-2xl font-medium">Technical Skills</h1>
          <div className="bg-white h-1 w-41"></div>

          {/* Skill Bars */}
          {[
            { name: "HTML", percent: "90%" },
            { name: "CSS", percent: "60%" },
            { name: "JavaScript", percent: "45%" },
            { name: "Python", percent: "50%" },
            { name: "React", percent: "75%" },
          ].map((skill) => (
            <div className="mt-5" key={skill.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-white flex items-center gap-2">
                  <i className={`fa-brands fa-${skill.name.toLowerCase()}`}></i>
                  {skill.name}
                </span>
                <span className="text-[#ffffff]">{skill.percent}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3">
                <div
                  className="bg-[#ff97e7] h-3 rounded-full"
                  style={{ width: skill.percent }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
