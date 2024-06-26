import React, { ReactNode } from 'react';

interface LandingLayoutProps {
    Main: ReactNode;
    Footer: ReactNode;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ Main, Footer }) => {
    return (
        <div>
          
            <div className='px-4 xs:px-x-25'>
                {Main }
            </div>
            <div>
                {Footer }
            </div>
        </div>
    );
}

export default LandingLayout
