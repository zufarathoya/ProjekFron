'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import './NavBar.css';


const Navbar = () => {
  const router = useRouter()
  return (
    <>
    <nav>
        <p className='dishcovery'>Dishcovery.</p>
        <ul>
            <li className='tombol'><a href='/login'>Login</a></li>
            <li className='tombol'><a href='/signup'>Signup</a></li>
        </ul>
    </nav>
    </>
  );
};
export default Navbar;