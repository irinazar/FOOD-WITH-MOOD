'useClient';

import React, { useRef } from 'react';
import { motion ,useScroll } from 'framer-motion';


type Props = {
  children: JSX.Element;
  width?: 'fit-content' | '100';
};

export default function Hide({ children, width = 'fit-content' }: Props):JSX.Element{
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['1 0', '1.00 1'],
  });

  return (
    <motion.section
     ref={ref}
     style={
        {
            scale: scrollYProgress,
            opacity:scrollYProgress
        }
     }
    
    >
   {children}
    </motion.section>
  );
}
