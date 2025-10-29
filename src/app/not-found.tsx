export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-pink-100'>
      <h1 className='text-6xl font-bold text-pink-600 mb-4'>404</h1>
      <h2 className='text-2xl font-semibold text-pink-500 mb-2'>Halaman Tidak Ditemukan</h2>
      <p className='text-pink-400 mb-6'>Maaf, halaman yang Anda cari tidak ada.</p>
      <a href="/" className='bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition shadow-2xl'>Kembali ke Beranda</a>
    </div>
  );
}
