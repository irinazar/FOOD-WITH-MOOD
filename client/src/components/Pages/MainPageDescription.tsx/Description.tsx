'useClient';

import React, { useRef } from 'react';
import { motion ,useScroll } from 'framer-motion';
import style from './style.module.css';

export default function Description(): JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.00 1'],
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
        Добро пожаловать в <b>Food with Mood</b> - путешествие по вкусам мира, прямо в Москве! Наш сервис предоставляет вам уникальную возможность открыть для себя многообразие культур и национальных кухонь, не покидая столицу. Откройте двери в волшебный мир кулинарных приключений, который позволит вам путешествовать по вкусам и ароматам разных стран, прямо в самом сердце Москвы.
        </p>
      </div>
    </motion.section>
  );
}
