import React from 'react';

function Page() {
    return (
        <div className="bg-pink-100 min-h-screen py-10">
            <h1 className="text-3xl font-bold text-center mb-8">
                Formulir Pendaftaran Siswa Baru
            </h1>

            <div className="bg-white space-y-5 max-w-4xl mx-auto p-8 rounded-lg shadow-2xl">

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 border-2 p-6 rounded-lg border-gray-300">
                    <h2 className="text-xl font-semibold mb-6 col-span-2">Data Diri</h2>
                    {/* NIS */}
                    <div>
                        <label className="block font-medium">NIS</label>
                        <input
                            type="text"
                            className="w-full border rounded-md p-2 mt-1"
                        />
                    </div>

                    {/* NISN */}
                    <div>
                        <label className="block font-medium">NISN*</label>
                        <input
                            type="text"
                            className="w-full border rounded-md p-2 mt-1"
                            required
                        />
                    </div>

                    {/* Email Sekolah */}
                    <div>
                        <label className="block font-medium">Email dari Sekolah*</label>
                        <input
                            type="email"
                            className="w-full border rounded-md p-2 mt-1"
                            required
                        />
                    </div>

                    {/* Nama Lengkap */}
                    <div>
                        <label className="block font-medium">Nama Lengkap (Sesuai Ijazah)*</label>
                        <input
                            type="text"
                            className="w-full border rounded-md p-2 mt-1"
                            required
                        />
                    </div>

                    {/* Jenis Kelamin */}
                    <div>
                        <label className="block font-medium">Jenis Kelamin*</label>
                        <select className="w-full border rounded-md p-2 mt-1" required>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>

                    {/* Tempat Lahir */}
                    <div>
                        <label className="block font-medium">Tempat Lahir</label>
                        <input
                            type="text"
                            className="w-full border rounded-md p-2 mt-1"
                        />
                    </div>

                    {/* Tanggal Lahir */}
                    <div>
                        <label className="block font-medium">Tanggal Lahir*</label>
                        <input
                            type="date"
                            className="w-full border rounded-md p-2 mt-1"
                            required
                        />
                    </div>

                    {/* Agama */}
                    <div>
                        <label className="block font-medium">Agama*</label>
                        <select className="w-full border rounded-md p-2 mt-1" required>
                            <option value=""></option>
                            <option value="Islam">Islam</option>
                            <option value="Kristen">Kristen</option>
                            <option value="Katolik">Katolik</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Budha">Budha</option>
                            <option value="Konghucu">Konghucu</option>
                        </select>
                    </div>

                    {/* Alamat */}
                    <div className="md:col-span-2">
                        <label className="block font-medium">Alamat</label>
                        <textarea
                            className="w-full border rounded-md p-2 mt-1"
                            rows={3}
                        />
                    </div>
                    {/*Provinsi */}
                    <div>
                        <label className="block font-medium">Provinsi*</label>
                        <input
                            type="text"
                            className="w-full border rounded-md p-2 mt-1"
                            required
                        />
                    </div>
                    {/*Kota/Kabupaten */}
                    <div>
                        <label className="block font-medium">Kota/Kabupaten</label>
                        <input
                            type="text"
                            className="w-full border rounded-md p-2 mt-1"
                        />
                    </div>
                    {/*Kecamatan */}
                    <div>
                        <label className="block font-medium">Kecamatan</label>
                        <input
                            type="text"
                            className="w-full border rounded-md p-2 mt-1"
                        />
                    </div>
                    {/*No.Whatsapp */}
                    <div>
                        <label className="block font-medium">No.Whatsapp</label>
                        <input
                            type="text"
                            className="w-full border rounded-md p-2 mt-1"
                        />
                    </div>
                </form>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 border-2 p-6 rounded-lg border-gray-300">
                    <h2 className="text-xl font-semibold mb-6 col-span-2">Asal Sekolah</h2>
                    {/* Nama Asal Sekolah */}
                    <div>
                        <label className="block font-medium">Nama Asal Sekolah</label>
                        <input
                            type="text"
                            className="w-full border rounded-md p-2 mt-1"
                        />
                    </div>

                    {/* Provinsi Asal Sekolah */}
                    <div>
                        <label className="block font-medium">Provinsi Asal Sekolah*</label>
                        <input
                            type="text"
                            className="w-full border rounded-md p-2 mt-1"
                            required
                        />
                    </div>

                    {/* Kota/Kabupaten Asal Sekolah */}
                    <div>
                        <label className="block font-medium">Kota/Kabupaten Asal Sekolah*</label>
                        <input
                            type="email"
                            className="w-full border rounded-md p-2 mt-1"
                            required
                        />
                    </div>

                    {/* Kecamatan Asal Sekolah */}
                    <div>
                        <label className="block font-medium">Kecamatan Asal Sekolah*</label>
                        <input
                            type="text"
                            className="w-full border rounded-md p-2 mt-1"
                            required
                        />
                    </div>

                    {/* Alamat Asal Sekolah */}
                    <div className="md:col-span-2">
                        <label className="block font-medium">Alamat Asal Sekolah*</label>
                        <textarea
                            className="w-full border rounded-md p-2 mt-1"
                            rows={3}
                        />
                    </div>
                </form>
                <div className='flex gap-5'>

                    <form className="flex-col w-105 gap-6 border-2 p-6 rounded-lg border-gray-300">
                        <h2 className="text-xl font-semibold mb-6 col-span-2">Data Ayah/Wali</h2>
                        {/* Nama Ayah/Wali */}
                        <div className='w-80'>
                            <label className="block font-medium">Nama Ayah/Wali</label>
                            <input
                                type="text"
                                className="w-full border rounded-md p-2 mt-1"
                            />
                        </div>

                        {/* Profesi Ayah/Wali */}
                        <div className='w-80'>
                            <label className="block font-medium">Profesi Ayah/Wali*</label>
                            <input
                                type="text"
                                className="w-full border rounded-md p-2 mt-1"
                                required
                            />
                        </div>

                        {/* No.Whatsapp Ayah/Wali */}
                        <div className='w-80'>
                            <label className="block font-medium">No.Whatsapp Ayah/Wali*</label>
                            <input
                                type="email"
                                className="w-full border rounded-md p-2 mt-1"
                                required
                            />
                        </div>

                        {/* Usia Ayah/Wali */}
                        <div className='w-80'>
                            <label className="block font-medium">Usia Ayah/Wali*</label>
                            <input
                                type="text"
                                className="w-full border rounded-md p-2 mt-1"
                                required
                            />
                        </div>

                        {/* Alamat Ayah/Wali */}
                        <div className='w-80'>
                            <label className="block font-medium">Alamat Ayah/Wali</label>
                            <textarea
                                className="w-full border rounded-md p-2 mt-1"
                                rows={3}
                            />
                        </div>
                    </form>



                    <form className="flex-col w-105  gap-6 border-2 p-6 rounded-lg border-gray-300">
                        <h2 className="text-xl font-semibold mb-6 col-span-2">Data Ayah/Wali</h2>
                        {/* Nama Ibu/Wali */}
                        <div className='w-80'>
                            <label className="block font-medium">Nama Ibu/Wali</label>
                            <input
                                type="text"
                                className="w-full border rounded-md p-2 mt-1"
                            />
                        </div>

                        {/* Profesi Ibu/Wali */}
                        <div className='w-80'>
                            <label className="block font-medium">Profesi Ibu/Wali*</label>
                            <input
                                type="text"
                                className="w-full border rounded-md p-2 mt-1"
                                required
                            />
                        </div>

                        {/* No.Whatsapp Ibu/Wali */}
                        <div className='w-80'>
                            <label className="block font-medium">No.Whatsapp Ibu/Wali*</label>
                            <input
                                type="email"
                                className="w-full border rounded-md p-2 mt-1"
                                required
                            />
                        </div>

                        {/* Usia Ibu/Wali */}
                        <div className='w-80'>
                            <label className="block font-medium">Usia Ibu/Wali*</label>
                            <input
                                type="text"
                                className="w-full border rounded-md p-2 mt-1"
                                required
                            />
                        </div>

                        {/* Alamat Ibu/Wali */}
                        <div className='w-80'>
                            <label className="block font-medium">Alamat Ibu/Wali</label>
                            <textarea
                                className="w-full border rounded-md p-2 mt-1"
                                rows={3}
                            />
                        </div>
                    </form>
                </div>
                <div>
                    <button className="bg-pink-500 text-white px-6 py-3 w-full rounded-md hover:bg-pink-400 transition-colors mt-4"><button/>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Page;