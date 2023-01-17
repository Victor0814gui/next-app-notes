import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { ContainerWrapper } from "../styles/404";

export default function FourOhFour() {
  const constraintsRef = useRef(null);

  return (
    <ContainerWrapper>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link href="/">
        <a>
          Go back home
        </a>
      </Link>
      <motion.div style={{width: 200,height: 200}} ref={constraintsRef}>
        <motion.div
          style={{width: 50,height: 50,background: 'blueviolet', borderRadius: 12,}} 
          drag
          dragConstraints={constraintsRef}
        />
      </motion.div>
    </ContainerWrapper>
  )
}