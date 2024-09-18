import Image from "next/image";
import Link from "next/link";
import LanguageSelection from "./component/Hero";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <main className="relative w-[1440px] h-[872px]">
      <div
          className="absolute -z-10"
          style={{
            width: "1775.69px",
            height: "887.84px",
            left: "-200.39px",
            top: "726.13px",
            background: "linear-gradient(281.1deg, #657EFF 200%, #076AC6 400%)",
            mixBlendMode: "soft-light",
            filter: "blur(600px)",
            transform: "rotate(-38.9deg)",
          }}>
      </div>
      
      <div
          className="absolute -z-20"
          style={{
            width: "1505px",
            height: "1630px",
            top: "-408px",
            left: "-21px",
            gap: "20px",
            mixBlendMode: "normal",
          }}
        >
          <Image src="/Frame 455.svg" alt="SVG Image" layout="fill" />
      </div>
      

      <Navbar />
      <Hero />
    </main>
  );
}
