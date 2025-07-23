'use client';

import { ReactNode } from 'react';

interface ResponsiveWrapperProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const ResponsiveWrapper = ({ 
  children, 
  className = '', 
  as: Component = 'div' 
}: ResponsiveWrapperProps) => {
  return (
    <Component 
      className={`w-full max-w-full overflow-x-hidden ${className}`}
    >
      {children}
    </Component>
  );
};

export default ResponsiveWrapper;
