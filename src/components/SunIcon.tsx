import { TiWeatherSunny } from "react-icons/ti";
import { motion } from "framer-motion";

const AnimatedRotatingSun = () => {
  return (
    
     <>
        {/* آیکون خورشید */}
        <motion.div
        initial={{ color: "#ffde1a" }}
        animate={{ color: "#ff7400" }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <TiWeatherSunny className="text-7xl" />
      </motion.div>
     </>

    
  );
};

export default AnimatedRotatingSun;