'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaChurch } from "react-icons/fa";
import classnames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();
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
                className={classnames({
                    'text-yellow-500': link.href === currentPath,
                    'text-blue-500': link.href !== currentPath,
                    'hover:text-red-500 transition-colors':true
                })}
                // className={`${link.href === currentPath ? 'text-green-900' : 'text-blue-500'} hover:text-red-500 transition-colors` }
                href={link.href}>{link.label}
            </Link>)}
        </ul>
    </nav>  
    )
}

export default NavBar
