import Link from 'next/link';

import HeroLeft from './Hero-Left';
import HeroRight from './Hero-Right';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="sm:flex grid-cols-1 sm:justify-between sm:w-[1216px] sm:height-[348px] sm:ml-[112px] sm:mt-[134px] sm:gap-[17px] ">
        <HeroLeft />
        <div className='sm:hidden relative mt-[80px] flex justify-center'>
          <div className='flex flex-row justify-center items-center p-2 gap-2 w-[137px] h-[34px] bg-[#657EFF] rounded-[24px]'>
            <span className='text-white font-inter font-semibold text-[12px] leading-[150%]'>
              Try it yourself
            </span>
            <div className='w-[16px] h-[16px]'>
              <ArrowDown size={16} color='#ffffff' />
            </div>
          </div>
        </div>

        <HeroRight />
    </section>
  );
}
