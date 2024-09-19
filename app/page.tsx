import Image from "next/image";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

export const runtime = 'edge'

export default function Home() {
  return (
    <main className="relative w-[390px] h-[1546px] sm:w-[1440px] sm:h-[872px] ">
      <div>
        {/* Desktop Styles */}
        <div
          className="absolute -z-20 "
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
          <Image src="/Background.png" alt="SVG Image" fill />
        </div>

        <div
          className="absolute -z-20 "
          style={{
            width: "1555px",
            height: "1630px",
            top: "-320px",
            left: "-21px",
            gap: "50px",
            mixBlendMode: "lighten",
          }}
        >
          <Image src="/Frame 455.svg" alt="SVG Image" fill />
        </div>
      </div>

      
      <Navbar />
      <Hero />
    </main>
  );
}
