import Link from 'next/link'
import React from 'react'
import { FaChurch } from "react-icons/fa";

const NavBar = () => {
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Families', href: '/families' },
        { label: 'Prayer Requests', href: '/prayer' },
        { label: 'Admin', href: '/admin' }

    ]
  return (
    <nav className='flex-col space-x-2 border-b mb-5 p-5'>
        <Link href="/">< FaChurch /></Link>
        <ul className='flex flex-col mt-5'>
            {links.map(link =>
            <Link
                key={link.href}
                className='text-blue-500 hover:text-red-500 transition-colors' 
                href={link.href}>{link.label}
            </Link>)}
        </ul>
    </nav>  
    )
}

export default NavBar
