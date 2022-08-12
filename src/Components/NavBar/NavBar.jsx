import React, { Component,useState } from 'react';
import {BsSunFill,BsSunglasses } from "react-icons/bs";
import {HiOutlineMenu} from "react-icons/hi";

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }
    return (
            <nav className='flex item-center'>
                <div className='flex item-center'>
                    <div className='text-20 font-bold mr-2'>
                        NerdCard
                    </div>
                    <BsSunFill size={"24px"} color="e9c46a" cursor={"pointer"}/>

                </div>
                <ul className='ml-auto text-16 font-semibold'>
                    { openMenu ? (
                        <BsSunglasses 
                        size={"24px"} color="white" cursor={"pointer"} onClick={handleMenu} />
                        ) : (
                        <HiOutlineMenu
                         size={"24px"} color="white" cursor={"pointer"} onClick={handleMenu} />
                        )}        
                </ul>
            </nav>
        );
    };


export default NavBar;