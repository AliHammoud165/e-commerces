// Textcard.tsx

import React from 'react';
import { cn } from '../../../../utils/helpers';

interface TextcardProps {
  title: string;
  description: string;
  classname?:string
}

const Textcard: React.FC<TextcardProps> = ({ title, description,classname }) => {
  return (
    <div>
      <p className='text-center text-3.5xl font-bold'>{title}</p>
      <p className={cn('text-text-gray text-lg mt-4',classname)}>{description}</p>
    </div>
  );
};

export default Textcard;
