import { motion } from "framer-motion";
export const AnimateComponent = ({ children }) => {
  const animation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    }
  };
  return <motion.div {...animation}>{children}</motion.div>;
};
