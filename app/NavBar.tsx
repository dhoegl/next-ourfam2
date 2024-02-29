'use client'
import React, { useState, useContext } from 'react';
import {
    MDBContainer,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
} from 'mdb-react-ui-kit';
import Image from "next/image"; // Import the Image component
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classnames from 'classnames';

export default function App() {
    const [openNav, setOpenNav] = useState(false);
    const currentPath = usePathname();
    const links = [
        { label: 'Home', href: '/' },
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Families', href: '/families' },
        { label: 'Prayer Requests', href: '/prayer' },
        { label: 'Admin', href: '/admin' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'About Us', href: '/about' }
    ];
    return (
        <MDBNavbar expand='lg' light bgColor='info'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/'>
                    <Image
                        src="/assets/TEC App Icon 08.png" // Set the path to your logo image
                        width={40} // Set the desired width
                        height={40} // Set the desired height
                        alt="Your Logo"
                    // placeholder="blur"
                    />Trinity Evangel Church

                </MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNav(!openNav)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar open={openNav}>
                    <MDBNavbarNav right fullWidth={false}>
                        <MDBNavbarItem>
                            {/* <MDBNavbarLink active aria-current='page' href='/'> */}
                            <MDBNavbarLink href='/'>Home</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/dashboard'>Dashboard</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/families'>Families</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/prayer'>Prayer Requests</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/admin'>Admin</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/contact'>Contact Us</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>

    );
}