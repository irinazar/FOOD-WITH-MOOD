import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

type Props = {
  children: JSX.Element;
  width?: 'fit-content' | '100';
};

export function Reveal({ children, width = 'fit-content' }: Props):JSX.Element {
    const ref= useRef(null)
    const isInView = useInView(ref, {once:true})

    const mainControls = useAnimation();

    

    useEffect(() => {
      if (isInView){
        void mainControls.start('visible')}
    },[isInView])
  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
      variants={{
        hidden:{opacity:0, y:75},
        visible:{opacity:1, y:0}
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.5, delay:0.25}}
      >{children}</motion.div>
    </div>
  );
}
