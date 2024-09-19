import React from 'react';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';

const HeroRight = () => {
  return (
    <div className=" left-[120px] sm:left-[585px] w-[380px] sm:w-[631px] h-[326px] sm:h-[348px] bg-white rounded-lg p-5 sm:p-8 mt-[70px] sm:mt-0 ml-[20px] sm:ml-[25px] flex flex-col">
      <div className="flex flex-col justify-between w-[334px] sm:w-full gap-7 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-[26px] h-[26px] bg-[#EBEBEB] rounded-full"></div>
          <span className="font-semibold text-[15px] text-black">Daniel</span>
          <ChevronDown size={20} />
        </div>

        <p className="font-semibold text-[18px] leading-[150%] text-[#353C44]">
          a language model can be fine-tuned{' '}
          <span className="text-[#868e96] font-normal">
            to have whatever set of values or moral judgements or politics. there is no such thing as an amoral or apolitical chatbot because they are all playing characters drawn from the internet prior
          </span>
        </p>

        <div className="flex items-center gap-5 w-full">
          <Play size={24} className="text-[#353C44]" />
          <div className="flex-grow h-1 bg-[#353C44] rounded-full">
            <div className="w-3/4 h-full bg-[#353C44] rounded-full"></div>
          </div>
        </div>
      </div>

      <div className=" hidden sm:flex justify-between w-full lg:w-[600px] h-[41px] mt-[26.5px] ">
        {['English (US)', 'German', 'French', 'Spanish', 'Hindi'].map((lang, index) => (
          <button
            key={lang}
            className={`w-[80px] lg:w-[100px] h-[41px] py-[12px] text-sm font-medium ${
              index === 0 ? 'text-[#353C44]' : 'text-[#353C44] opacity-40'
            }`}
          >
            {lang}
          </button>
        ))}
        <button className="flex items-center gap-5 py-[12px] px-[12px] bg-[#657EFF] text-white text-sm font-semibold rounded-r-md whitespace-nowrap">
          + 567 Languages
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default HeroRight;
