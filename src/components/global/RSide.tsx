import React from 'react';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import Premium from '../cards/Premium';
import Trending from '../cards/Trending';
import TownHall from '../cards/TownHall';

const RSide = () => {
  return (
    <section className='ml-4'>
      <div className=''>
        <div className='fixed top-0 flex flex-1 gap-4 py-2 bg-slate-900/80 rounded-md'>
          <input
            type='text'
            placeholder='Search...'
            className='flex-grow rounded-full border-2 border-slate-700 bg-slate-800/80 px-5 py-2 text-slate-200 shadow-md focus:outline-none focus:ring-1 focus:ring-sky-400'
          />
          <PiMagnifyingGlassBold className=' hidden h-11 w-11 rotate-90 cursor-pointer rounded-full bg-slate-800 p-2 font-bold text-slate-500 md:inline-flex' />
        </div>
        <div className='mt-18 space-y-4 fixed'>
          
            <Premium />
            <Trending />

          <TownHall />
          {/* <div className='w-60'> */}
          <p className='w-80 text-xs font-thin text-slate-300'>
            Terms of Service Privacy Policy Cookie Policy Accessibility Ads ©
            2023 Alchemy Labs.
          </p>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default RSide;
