import Link from "next/link";

export default function HeroLeft() {
  return (
    <section className=" items-start gap-[24px] w-[538px] h-[348px]">
      {/* Main Text Section */}
      <div className="flex flex-col items-start gap-[44px]  w-[538px] h-[348px]">
        <div className="flex flex-col items-start gap-[24px] w-[538px] h-[260px]">
          {/* Title */}
          <h1 className="text-[64px] font-semibold leading-[100%] tracking-[-0.04em] text-[#353C44] w-[538px] h-[192px]">
            Realistic Voiceovers In Seconds
          </h1>

          {/* Subtext */}
          <p className="text-[18px] font-normal leading-[22px] text-[#5E5E5E] w-[538px] h-[44px]">
            Listnr lets you create voiceovers with 1000+ different voices in over 500 languages, including a clone of your voice.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-row items-start gap-[17px] w-[395px] h-[44px]">
          {/* Get Started Button */}
          <div className="flex justify-center items-center px-[24px] py-[16px] gap-[8px] w-[199px] h-[44px] bg-[#353C44] rounded-[12px]">
            <Link href="#" className="text-[16px] font-semibold leading-[19px] text-white w-[151px] h-[19px]">
              Get Started for free
            </Link>
          </div>

          {/* Clone your Voice Button */}
          <div className="flex justify-center items-center px-[24px] gap-[8px] w-[179px] h-[44px] bg-white rounded-[12px]">
            <Link href="#" className="text-[16px] font-semibold leading-[19px] text-[#5E5E5E] w-[131px] h-[19px] whitespace-nowrap">
                Clone your Voice
            </Link>
</div>

        </div>
      </div>
    </section>
  );
}
