import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface AnimationLayoutProps {
    children?: React.ReactElement
}

function AnimationLayout({ children }: AnimationLayoutProps) {
  const { pathname } = useLocation();

  return (
    <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
    >
        { children }
    </motion.div>
  );
};

export default AnimationLayout;