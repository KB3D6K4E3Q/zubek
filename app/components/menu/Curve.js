import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import styles from './Curve.module.scss';

export default function Curve() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  const initialPath = `M0 0 L0 0 Q50 0 100 0`
  const targetPath = `M0 0 L0 ${height} Q50 ${height/2} 100 ${height}`

  const curve = {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
      d: initialPath,
      transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
    }
  }

  return (
    <svg className={styles.svgCurve}>
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  )
} 