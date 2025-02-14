import { motion } from 'framer-motion';

const Heart: React.FC = () => {
  return (
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
      className="text-red-500 text-4xl"
    >
      ❤️
    </motion.div>
  );
};

export default Heart;
