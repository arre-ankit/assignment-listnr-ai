import Link from "next/link";

export default function HeroLeft() {
  return (
    <section className="w-[325px] h-[387px] top-[98px] left-[24px] gap-[32px] ml-[50px] mt-[60px] items-start sm:gap-[24px] sm:w-[538px] sm:h-[348px]">
      <div className="flex flex-col items-start gap-[44px] sm:w-[538px] sm:h-[260px] w-[325px] h-[387px] ">
        <div className="flex flex-col items-start gap-[24px] w-[325px] h-[223px] sm:w-[538px] sm:h-[192px] sm:-ml-[60px] sm:-mt-[50px]" >
          <h1 className="text-[64px] font-semibold leading-[100%] tracking-[-0.04em] text-[rgb(53,60,68)] w-[335px] h-[144px] sm:w-[538px] sm:h-[192px]">
            Realistic Voiceovers In Seconds
          </h1>

          <p className="text-[18px] font-normal leading-[22px] text-[#5E5E5E] w-[335px] h-[63px] sm:w-[538px] sm:h-[44px] pt-[35px] sm:pt-0">
            Listnr lets you create voiceovers with 1000+ different voices in over 500 languages, including a clone of your voice.
          </p>
        </div>

        <div className="w-[335px] h-[132px] mt-[40px] justify-center items-center sm:flex sm:flex-row gap-[17px] sm:w-[395px] sm:h-[44px] sm:-ml-[60px]">
          <div className="flex justify-center items-center px-[24px] py-[16px] gap-[8px] w-full sm:w-[199px] sm:h-[44px] bg-[#353C44] rounded-[12px]">
            <Link href="#" className="text-[16px] font-semibold leading-[19px] text-white w-[151px] h-[19px]">
              Get Started for free
            </Link>
          </div>

          <div className="my-[20px] flex justify-center sm:flex sm:justify-center items-center  gap-[8px] w-full sm:w-[179px] h-[44px] bg-white rounded-[12px]">
            <Link href="#" className="text-[16px] font-semibold leading-[19px] text-[#5E5E5E] w-[131px] h-[19px] whitespace-nowrap">
                Clone your Voice
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
