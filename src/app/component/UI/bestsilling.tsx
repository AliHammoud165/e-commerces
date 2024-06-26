import React from 'react';
import Button from '../core/button';
import Card, { CardProps } from '../core/card';
import Arrow from '../../../../public/assets/icons/arowe';
import staticData from '../../../../config/static';
import Textcard from '../core/textcard';


const Bestselling: React.FC = () => {
  return (
    <div className='pt-28 inline  xs:grid xs:grid-cols-1  md:grid-cols-4 gap-4 w-full h-128'>
      <div className='col-span-1 md:col-span-4 lg:col-span-1 w-full xs:mt-0 mt-10'>
      <Textcard title='Best Selling Plants' description='Easiest way to healthy life by buying your favorite plants' />
        <div className='w-[168px] h-[51px] mt-4'>
          <Button text='See More' icon={<><Arrow/></>} />
        </div>
      </div>
      {staticData.cardsData.map((card, index) => (
        <div key={index} className='col-span-1 xs:mt-0 mt-10'>
          <Card imageH={363} imageW={300} {...card} cardClassName='pt-4'/>
        </div>
      ))}
    </div>
  );
};

export default Bestselling;
