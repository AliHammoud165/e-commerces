
import React from 'react';
import Arrow from '../../../../public/assets/icons/arowe';
import Textcard from '../core/textcard'; 
import Card from '../core/card';
import image from '../../../../public/assets/image/image2.png';
import Button from '../core/button';

const Categories: React.FC = () => {
  return (
    <div className='h-256 flex flex-col justify-between'>
      <Textcard
        title='Categories'
        description='Find what you are looking for'
        classname='text-center' 
      />
      <div className='h-210.25 bg-light-green-gray rounded-2xl xs:px-20 grid grid-cols-3 gap-4'>
        <div className='w-fit mt-[-50px]'><Card src={image} imageH={512} imageW={352} alt='any' title='Natural Plants' cardClassName='text-center mt-4'/></div>
        <div className='w-fit mt-[50px] h-fit'><Card src={image} imageH={512} imageW={352} alt='any' title='Natural Plants' price='Horem ipsum dolor sit amet, consectetur adipiscing elit.'  cardClassName='text-center mt-8 ' />
        <div className='mt-16 flex items-center justify-center'><Button text='Explore' className='bg-white w-full flex font-bold ' icon={<Arrow/>} /></div>
        </div>
        <div className='w-fit mt-[-50px]'><Card src={image} imageH={512} imageW={352} alt='any' title='Natural Plants' cardClassName='text-center mt-4'/></div>
      </div>
    </div>
  );
};

export default Categories;
