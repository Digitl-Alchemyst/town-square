import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LogoLink = () => {
  return (
    <div>
      {' '}
      <Link href='./' className='flex items-center'>
        <Image src='/Logo.png' alt='Logo with Name' width={60} height={60} />
        <h1 className='text-6xl ml-2 font-bold text-slate-100'>Town Square</h1>
      </Link>
    </div>
  );
};

export default LogoLink;
