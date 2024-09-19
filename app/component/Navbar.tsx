'use client';
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <section className="w-[390px] h-[64px] sm:w-[1216px] sm:h-[30px] sm:left-[112px] flex justify-between mt-[48px] ml-[52px] ">    
            <div className="flex justify-between w-[342px] h-[24px] sm:w-[67.74px] sm:h-[20px]">
            <Image src="/Frame 139 (1).png" width={2000} height={2000} alt="Listnr" className="ml-[4px] sm:ml-[55px] sm:h-[28px] w-[67.74px] h-[20px] gap-[5px]" />
            <div className="hidden sm:flex sm:ml-[10px]">
                <Link href="#" className="text-lg font-medium w-[60px] h-[14px] mx-[18px]" prefetch={false}>
                    Products
                </Link>
                <Link href="#" className="text-lg font-medium w-[58px] h-[14px] mx-[18px]" prefetch={false}>
                    Features
                </Link>
                <Link href="#" className="text-lg font-medium w-[46px] h-[14px] mx-[18px]" prefetch={false}>
                    Pricing
                </Link>
            </div>
        
            <div className="sm:flex justify-between items-center sm:pl-[750px] w-[342px] h-[24px] sm:w-[217px] sm:h-[44px] sm:gap-[24px] ">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className=" sm:hidden ml-[230px] h-[24px] ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"  viewBox="0 0 24 24">
                        <path stroke="#353C44" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                    </button>
                <Link href="#" className="text-black font-medium text-[14px] whitespace-nowrap hidden sm:flex">
                    Sign In
                </Link>
                <Link href="#" className="hidden sm:flex items-center justify-center px-[24px] py-[8px] gap-[8px] w-[99px] h-[30px] bg-gradient-to-t from-[#353C44] to-[#353C44] rounded-[8px] text-white font-normal text-[14px] whitespace-nowrap">
                    Sign Up
                </Link>
            </div>
            </div>

        </section>
  )
}
