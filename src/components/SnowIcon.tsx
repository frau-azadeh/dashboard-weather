import { motion } from "framer-motion";
import { WiSnowflakeCold } from "react-icons/wi";

const SnowIcon = () => {
  const snowflakes = Array.from({ length: 6 }); // ایجاد 6 دانه برف

  return (
    <div
      style={{
        position: "relative",
        width: "50px", // عرض محدود به 100px
        height: "50px", // ارتفاع محدود به 100px
        overflow: "hidden", // جلوگیری از نمایش خارج از محدوده
        
      }}
    >
      {snowflakes.map((_, index) => (
        <motion.div
          key={index}
          initial={{ y: -20, x: Math.random() * 50 }} // شروع بالای محدوده با موقعیت افقی تصادفی
          animate={{ y: 60 }} // حرکت به پایین خارج از محدوده
          transition={{
            duration: Math.random() * 1.5 + 1, // مدت زمان حرکت تصادفی
            repeat: Infinity, // تکرار بی‌پایان
            delay: Math.random() * 1, // تأخیر تصادفی
            ease: "linear", // حرکت یکنواخت
          }}
          style={{
            position: "absolute",
            top: 0,
          }}
        >
          <WiSnowflakeCold className="text-white text-2xl" />
        </motion.div>
      ))}
    </div>
  );
};

export default SnowIcon;