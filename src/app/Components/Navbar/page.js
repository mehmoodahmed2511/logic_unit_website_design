"use client"
import React from "react"
import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <div id="navbar" className="p-2 bg-blue-500 text-white">
                <img src='imagesFolder/logic-unit-logo.png' 
                className="h-20 w-20"/>
                <div id="links" className="flex justify-around items-center">
                    <Link href="/">Home</Link>
                    <Link href="/About">About</Link>
                    <Link href="/ServicesRoute">Services</Link>
                    <Link href="/Products">Products</Link>
                    <Link href="/Contact">Contact</Link>
                </div>
                <div id="nav-right" className="flex flex-col justify-center items-center m-5">
                    <Link href="">
                        <p className="bg-blue-400 text-white">E:</p>info@logic-unit.com
                    </Link>
                    <button className="px-10 py-5 bg-blue-400 text-white rounded-md">Get a Free Quote</button>
                </div>
            </div>
        </>
    )
}
