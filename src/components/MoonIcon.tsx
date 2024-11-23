import { motion } from "framer-motion";

const MoonIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className="w-24 h-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    >
      <path
        d="M32 4a20 20 0 1020 20A20 20 0 0032 4zm0 36a16 16 0 1116-16 16 16 0 01-16 16z"
        fill="#FFD700"
      />
    </motion.svg>
  );
};

export default MoonIcon;