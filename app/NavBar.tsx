'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import React, { useState } from "react";
import { FaBars, FaTimes, FaChurch } from "react-icons/fa";
import classnames from 'classnames';
import Image from "next/image"; // Import the Image component

const Navbar: React.FC = () => {
    const currentPath = usePathname();
    console.log(currentPath);
    const [nav, setNav] = useState(false);
  const links = [
    { id: 1, label: 'Dashboard', href: '/dashboard' },
    { id: 2, label: 'Families', href: '/families' },
    { id: 3, label: 'Prayer Requests', href: '/prayer' },
    { id: 4, label: 'Admin', href: '/admin' },
    { id: 6, label: 'Contact Us', href: '/contact' },
    { id: 5, label: 'About Us', href: '/about' }
];

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 text-black bg-white fixed nav">
      <div>
        <h1 className="text-4xl font-signature ml-2">
          <Link href="/">
          <Image
            src="/assets/TEC App Icon 08.png" // Set the path to your logo image
            width={40} // Set the desired width
            height={40} // Set the desired height
            alt="Your Logo"
            // placeholder="blur"
          />
          </Link>
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
          </a>
        </h1>
      </div>
        <ul className='hidden md:flex'>
            {links.map(link =>
            <Link
                key={link.href}
                className={classnames({
                  'font-bold p-3 capitalize': link.href === currentPath,
                    'text-black p-3 capitalize font-medium': link.href !== currentPath,
                    'hover:bg-blue-300 transition-colors':true
                  })}
                href={link.href}>{link.label}
            </Link>)}
        </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        // <ul className="flex flex-col justify-center items-left absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
        <ul className="flex flex-col justify-normal py-25 items-left absolute top-12 left-0 bg-gradient-to-b from-gray-800 to-gray-400 text-black">
            {/* {links.map(link => */}
          {links.map(({ label,href }) => (
            <li
            //   key={id}
              key={label}
              className="px-4 cursor-pointer capitalize p-2 text-xl"
            >
              {/* <Link onClick={() => setNav(!nav)} href={label}> */}
              <Link
                onClick={() => setNav(!nav)} href={href}>
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