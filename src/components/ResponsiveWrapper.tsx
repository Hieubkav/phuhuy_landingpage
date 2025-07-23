'use client';

import { ReactNode, ElementType } from 'react';

interface ResponsiveWrapperProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
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
