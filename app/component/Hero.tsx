import Link from 'next/link';

import HeroLeft from './Hero-Left';
import HeroRight from './Hero-Right';

export default function Hero() {
  return (
    <section className=" flex justify-between w-[1216px] height-[348px]  ml-[112px] mt-[134px] gap-[17px] ">
        <HeroLeft />
        <HeroRight />
    </section>
  );
}
