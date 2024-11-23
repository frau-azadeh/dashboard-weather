import { motion } from "framer-motion";
import { WiCloudy } from "react-icons/wi";

const CloudIcon = () => {
  return (
    <motion.div
      animate={{
        x: [-10, 10, -10], // حرکت به سمت چپ و راست
      }}
      transition={{
        duration: 3, // مدت زمان حرکت
        repeat: Infinity, // تکرار بی‌پایان
        repeatType: "reverse", // حرکت برگشتی
        ease: "easeInOut", // حرکت روان
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "5", // ارتفاع کامل صفحه
      }}
    >
      <WiCloudy className="text-white text-7xl" />
    </motion.div>
  );
};

export default CloudIcon;