import React from 'react';
import Intro1 from '../public/assets/projects/intro1.jpg';
import Intro2 from '../public/assets/projects/intro2.jpg'
import Intro3 from '../public/assets/projects/intro3.jpg'
import Intro4 from '../public/assets/projects/intro4.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl font-bold tracking-widest uppercase text-[#5651e5]'>
          Төслийн танилцуулга
        </p>
        <h2 className='py-4'>Бид юу үйлдвэрлэдэг вэ?</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={Intro1}
            projectUrl='/projectDetail'
            tech='Тахианы мах, өндөг'
          />
          <ProjectItem
            title='Дотоодын үйлдвэрлэл ба импорт'
            backgroundImg={Intro2}
            projectUrl='/projectDetail'
            tech='Тахианы мах, өндөг'
          />
          <ProjectItem
            title='Өндөгний үйлдвэрлэл'
            backgroundImg={Intro3}
            projectUrl='/projectDetail'
            tech='Тахианы мах, өндөг'
          />
          <ProjectItem
            title='Эдийн засгийн үр ашиг'
            backgroundImg={Intro4}
            projectUrl='/projectDetail'
            tech='Тахианы мах, өндөг'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
