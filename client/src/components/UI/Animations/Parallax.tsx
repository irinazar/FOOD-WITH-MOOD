import React, {  useRef } from 'react';
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';

type Props = {
  children: JSX.Element;
  width?: 'fit-content' | '100';
};

export function ParallaxUp({ children, width = 'fit-content' }: Props):JSX.Element {
    const ref= useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })
   
    const backgroundY = useTransform(scrollYProgress, [0,1], ['0%', '100%'])
    const textY = useTransform(scrollYProgress, [0,1], ['0%', '-100%'])

    


  return (
    <div ref={ref} style={{  width }}>
      <motion.div
      style={{y: textY}}
      >{children}</motion.div>
    </div>
  );
}
