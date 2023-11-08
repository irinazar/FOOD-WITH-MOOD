import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

type Props = {
  children: JSX.Element;
};

export function Hide({ children }: Props):JSX.Element {
    const ref= useRef(null)
    const isInView = useInView(ref, {once:true})

    const mainControls = useAnimation();

    

    useEffect(() => {
      if (isInView){
        void mainControls.start('visible')}
    },[isInView])
  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
      variants={{
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.5, delay:0.25}}
      >{children}</motion.div>
    </div>
  );
}
