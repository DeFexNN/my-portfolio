import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.2 } },
};

interface AnimatedPageProps {
  children: ReactNode;
}

const AnimatedPage = ({ children }: AnimatedPageProps) => (
  <motion.div
    layout
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

export default AnimatedPage;
