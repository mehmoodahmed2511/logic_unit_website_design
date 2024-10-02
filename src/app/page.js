"use client"
import React from "react"
import Link from "next/link"
// import myImage from "./imagesFolder/post1.png"

const page = () => {
    return (
        <>
            <div id="post-box">
                <div id="post-1">
                    <img src={'imagesFolder/logic-unit-logo.png'} height='50' width='200'/>
                    <h1>Scalable & Extensible Apps for modern platforms.</h1>
                    <img src="app/imagesFolder/post1.png"></img>
                    <img className="h-10 w-10 cursor-pointer" src="app\images\Forward bracket.png"></img>
                </div>
                <div id="dots">
                    <div id="dot1"></div>
                    <div id="dot1"></div>
                    <div id="dot1"></div>
                    <div id="dot1"></div>
                </div>
            </div>

            <div id="products-box">
                <h1>Poducts we've Invented</h1>
                <div id="products">
                    <div id="product-1" className="flex flex-col justify-center items-center">
                        <img className="h-30 w-30 rounded-lg" src="images/product1.jpg" height={100}></img>
                        <h2 className="text-center font-bold">TITAN</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default page