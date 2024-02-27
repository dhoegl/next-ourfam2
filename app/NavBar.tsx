'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import classnames from 'classnames';


const Navbar: React.FC = () => {
    const currentPath = usePathname();
    const [nav, setNav] = useState(false);
  const links = [
    // { id: 1, link: "home" },
    // { id: 2, link: "about" },
    // { id: 3, link: "portfolio" },
    // { id: 4, link: "experience" },
    // { id: 5, link: "contact" },
    { id: 1, label: 'Dashboard', href: '/' },
    { id: 2, label: 'Families', href: '/families' },
    { id: 3, label: 'Prayer Requests', href: '/prayer' },
    { id: 4, label: 'Admin', href: '/admin' }
];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Logo
          </a>
        </h1>
      </div>
      {/* <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul> */}
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
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, label }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={label}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;