import Image from "next/image";
export default function Page({ params }) {
    const { Demoid } = params;

    return (
        <div className="bg-pink-200 h-screen">

            {/* Navbar*/}
            <div>
                <div className="bg-pink-600 h-20 w-full drop-shadow-md flex items-center">
                    <h1 className="text-white text-2xl font-medium p-5 drop-shadow-md">cutesy</h1>
                    <h1 className="text-white text-2xl font-medium p-2 drop-shadow-md ml-240">made by:</h1>
                    <span className="text-pink-300 text-2xl font-bold">{Demoid} </span>
                </div>
            </div>

            {/* Kotak  */}
            <div className="p-3 ml-5 mt-5">
                <div className="bg-pink-600 h-110 w-300 rounded-md drop-shadow-md p-3">
                    <h1 className="text-3xl font-bold text-white">halo friendsss</h1>
                    <ul className="mt-2">
                        <li className="text-white drop-shadow-md">kalian tau tidakk hewan fav aku? </li>
                        <li className="text-white drop-shadow-md">ini diaaa kucingggg, kenapa? </li>
                        <li className="text-white drop-shadow-md">karena kucing sangat menggemaskan walau mereka sangat chaotic (walau bpkku anti kucing) </li>
                        <li className="text-white drop-shadow-md mt-3">ini diaa:</li>
                   <Image src="/assets/download (1).jpeg" alt="Gambar Pak Okta" width={200} height={200} className="rounded-md mt-3" />
                        <li className="text-white drop-shadow-md font-bold">jujur sy nd tau knp ada yg geli sm kucing</li>
                        <p className="text-white drop-shadow-md">ril rel rol by: {Demoid} </p>
                    </ul>
                </div>

            </div>

        </div>
    );
}