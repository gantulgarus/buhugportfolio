import Image from 'next/image';
import React from 'react';
import projectImg from '../public/assets/farm-bg.jpg';
import Intro1 from '../public/assets/projects/intro1.jpg';
import Intro2 from '../public/assets/projects/intro2.jpg';
import Intro3 from '../public/assets/projects/intro3.jpg';
import Intro4 from '../public/assets/projects/intro4.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={projectImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Тахианы мах, өндөгний үйлдвэрлэл</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-5'>
          <h2>Төслийн танилцуулга</h2>
          <Image
            className='py-4'
            src={Intro1}
            alt='/'
          />
          <Image
            className='py-4'
            src={Intro2}
            alt='/'
          />
          <Image
            className='py-4'
            src={Intro3}
            alt='/'
          />
          <Image
            className='py-4'
            src={Intro4}
            alt='/'
          />
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
