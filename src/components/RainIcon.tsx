import { motion } from "framer-motion";
import { WiRaindrops, WiCloudy } from "react-icons/wi";

const RainIcon = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "300px",
        overflow: "hidden", // جلوگیری از نمایش انیمیشن خارج از محدوده
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* آیکون ابر */}
      <WiCloudy className="text-white text-7xl" />

      {/* قطرات باران */}
      <motion.div
        initial={{ y: -10 }} // شروع کمی بالاتر از ابر
        animate={{ y: 5 }} // حرکت به پایین صفحه
        transition={{
          duration: 1.5, // مدت زمان حرکت
          repeat: Infinity, // تکرار بی‌پایان
          ease: "linear", // حرکت یکنواخت
        }}
        style={{
          position: "absolute",
          top: "65px", // قرار گرفتن زیر ابر
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <WiRaindrops className="text-white text-4xl mr-5" />
        </motion.div>
        <motion.div
        initial={{ y: -20 }} // شروع کمی بالاتر از ابر
        animate={{ y: 10 }} // حرکت به پایین صفحه
        transition={{
          duration: 1.5, // مدت زمان حرکت
          repeat: Infinity, // تکرار بی‌پایان
          ease: "linear", // حرکت یکنواخت
        }}
        style={{
          position: "absolute",
          top: "65px", // قرار گرفتن زیر ابر
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <WiRaindrops className="text-white text-4xl" />
       
      </motion.div>

      <motion.div
        initial={{ y: -15 }} // شروع کمی بالاتر از ابر
        animate={{ y: 5 }} // حرکت به پایین صفحه
        transition={{
          duration: 1.5, // مدت زمان حرکت
          repeat: Infinity, // تکرار بی‌پایان
          ease: "linear", // حرکت یکنواخت
        }}
        style={{
          position: "absolute",
          top: "65px", // قرار گرفتن زیر ابر
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <WiRaindrops className="text-white text-4xl mr-8" />
       
      </motion.div>
    </div>
  );
};

export default RainIcon;
