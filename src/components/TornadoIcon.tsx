import { motion } from "framer-motion";
import { WiTornado } from "react-icons/wi";

const TornadoIcon = () => {
  return (
    <motion.div
      animate={{
        x: [-5, 5, -5], // حرکت به سمت چپ و راست
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
        height: "1", // ارتفاع کامل صفحه
      }}
    >
      <WiTornado className="text-white text-5xl" />
    </motion.div>
  );
};

export default TornadoIcon;