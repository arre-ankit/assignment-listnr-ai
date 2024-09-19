import Image from "next/image";
import Link from "next/link";
import LanguageSelection from "./component/Hero";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <main className="relative w-[390px] h-[1546px] sm:w-[1440px] sm:h-[872px] ">

      <div
          className="absolute -z-20"
          style={{
            width: "1775px",
            height: "1000px",
            top: "76px",
            left: "-200px",
            gap: "20px",
            transform: "rotate(-38.9deg)",
            mixBlendMode: "saturation",
            filter: "blur(200px)",
          }}
        >
          <Image src="/Background.png" alt="SVG Image" fill  />
      </div>

      <div
          className="absolute -z-20"
          style={{
            width: "1505px",
            height: "1630px",
            top: "-208px",
            left: "-21px",
            gap: "20px",
            mixBlendMode: "overlay",
          }}
        >
          <Image src="/Frame 455.svg" alt="SVG Image" fill />
      </div>
      
      <Navbar />
      <Hero />
    </main>
  );
}
