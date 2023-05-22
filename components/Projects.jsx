import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/intro1.jpg';
import cryptoImg from '../public/assets/projects/intro2.jpg'
import netflixImg from '../public/assets/projects/intro3.jpg'
import twitchImg from '../public/assets/projects/intro4.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Төслийн танилцуулга
        </p>
        <h2 className='py-4'>Бид юу үйлдвэрлэдэг вэ?</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='Тахианы мах, өндөг'
          />
          <ProjectItem
            title='Дотоодын үйлдвэрлэл ба импорт'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='Тахианы мах, өндөг'

          />
          <ProjectItem
            title='Өндөгний үйлдвэрлэл'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='Тахианы мах, өндөг'

          />
          <ProjectItem
            title='Эдийн засгийн үр ашиг'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Тахианы мах, өндөг'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
