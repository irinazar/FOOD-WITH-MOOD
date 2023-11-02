'useClient';

import React, { useRef } from 'react';
import { motion ,useScroll } from 'framer-motion';
import style from './style.module.css';

export default function Description(): JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
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
      <div className={style.description}>
        <p className={style.descText}>
          Ресторанное руководство представляет собой удобный и информативный ресурс для тех, кто
          ищет место для приятного обеда, ужина или особого события. Проект может быть полезен как
          местным жителям, так и туристам, помогая им найти лучшие рестораны, отвечающие их
          потребностям и вкусам.
        </p>
      </div>
    </motion.section>
  );
}
