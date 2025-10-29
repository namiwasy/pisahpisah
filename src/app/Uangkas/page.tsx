import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-end space-x-4 items-end p-4 text-black font-bold'
    style={{ backgroundColor: '#FFC5D3' }}>
            <div className="logo">
                <h1>hawooooo</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">about</Link>
            <Link href="/ninjas">contact us</Link>
        </nav>

    
    );
};

export default Navbar;