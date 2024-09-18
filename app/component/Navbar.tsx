
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
        <section className="w-[1216px] h-[30px] left-[112px] flex justify-between mt-[48px] ml-[60px]">
        <div className="w-[363px] h-[30px] gap-[44px] flex justify-between">
            <div className="w-[67.74px] h-[20px] mx-[14px]">
            <Image src="/Frame 139.svg" width={500} height={500} alt="Listnr" className="mx-12 w-[67.74px] h-[30px] " />
            </div>
            <div>
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
        </div>
        <div className="flex justify-between items-center w-[168px] h-[30px] gap-[24px]">
            <Link href="#" className="text-black font-medium text-[14px] whitespace-nowrap">
                Sign In
            </Link>
            <Link
                href="#"
                className="flex items-center justify-center px-[24px] py-[8px] gap-[8px] w-[99px] h-[30px] bg-gradient-to-t from-[#353C44] to-[#353C44] rounded-[8px] text-white font-normal text-[14px] whitespace-nowrap"
            >
                Sign Up
            </Link>
        </div>
        </section>
  )
}
