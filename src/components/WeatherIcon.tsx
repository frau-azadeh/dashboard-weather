import { motion } from "framer-motion";

const WeatherIcon = () => {
  return (
    <div className="flex justify-center items-center">
      {/* SVG خورشید */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-24 h-24"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="32" cy="32" r="12" fill="#FFD700" />
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1="32"
            y1="2"
            x2="32"
            y2="12"
            stroke="#FFD700"
            strokeWidth="4"
            transform={`rotate(${i * 45}, 32, 32)`}
          />
        ))}
      </motion.svg>

      {/* SVG ابر */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-32 h-24 ml-4"
      >
        <path
          d="M32 44c-7 0-12-5-12-11s5-11 12-11c2 0 3 .3 5 1 3-6 10-8 16-6 6 2 9 8 9 14 0 7-5 13-12 13H32z"
          fill="#ccc"
        />
      </svg>
    </div>
  );
};

export default WeatherIcon;