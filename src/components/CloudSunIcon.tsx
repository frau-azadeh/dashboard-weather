import { WiCloudy, WiDaySunny } from "react-icons/wi";
import { motion } from "framer-motion";

const CloudIcon = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "200px",
        backgroundColor: "#1e293b", // رنگ آبی برای آسمان
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px", // لبه‌های نرم‌تر
        overflow: "hidden", // جلوگیری از نمایش بخش‌های اضافی
      }}
    >
      {/* خورشید */}
      <div
        style={{
          position: "absolute",
          
          zIndex: 1,
          color: "#FFD700", // رنگ زرد خورشید
        }}
      >
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
        height: "5", // ارتفاع کامل صفحه
      }}
    >
        <WiDaySunny className="text-5xl" />
        </motion.div>
      </div>

      {/* ابر */}
      <div
        style={{
          position: "absolute",
          zIndex: 2, // بالای خورشید
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top:"85px",
        }}
      >
        <WiCloudy className="text-white text-7xl" />
      </div>
    </div>
  );
};

export default CloudIcon;
