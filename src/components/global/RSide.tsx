import React from 'react';
import { PiMagnifyingGlassBold } from 'react-icons/pi';

const RSide = () => {
  return (
    <section className='ml-4'>
      <div className='space-y-4'>
        <div className='sticky flex flex-1 gap-4 py-2'>
          <input
            type='text'
            placeholder='Search...'
            className='flex-grow rounded-full border-2 border-slate-700 bg-slate-800/80 px-5 py-2 text-slate-200 shadow-md focus:outline-none focus:ring-1 focus:ring-sky-400'
          />
          <PiMagnifyingGlassBold className=' hidden h-11 w-11 rotate-90 cursor-pointer rounded-full bg-slate-800 p-2 font-bold text-slate-500 md:inline-flex' />
        </div>
        <div className='h-26 rounded-lg border border-slate-400/40 p-2'>
          Premium
        </div>
        <div className='h-80 rounded-lg border border-slate-400/40 p-2'>
          Trending
        </div>
        <div className='h-80 rounded-lg border border-slate-400/40 p-2'>
          Town Hall
        </div>
        {/* <div className='w-60'> */}
          <p className='w-full text-xs font-thin text-slate-300'>
            Terms of Service Privacy Policy Cookie Policy Accessibility Ads
            © 2023 Alchemy Labs.
          </p>
        {/* </div> */}
      </div>
    </section>
  );
};

export default RSide;
