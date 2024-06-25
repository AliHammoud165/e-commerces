import React from 'react';
import Card from '../core/card'; // Adjust path as per your project structure
import staticData from '../../../../config/static';
import Textcard from '../core/textcard';

const Aboutus = () => {
  return (
    <div className='h-128 w-full mt-20'>
      <Textcard title='About US' description='Order now and appreciate the beauty of nature' classname='text-center' />
      <div className='mt-8 w-full grid grid-cols-3 gap-4 justify-items-center '>
        {staticData.cardsDataAboutus.map((about, index) => (
          <div key={index} className='flex  justify-center items-center'>
            <Card
              {...about}
              imageH={40}
              imageW={40}
              imageClassName='bg-light-green-gray rounded-full h-about w-about flex items-center justify-center'
              cardClassName='text-center mt-4 '
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutus;
