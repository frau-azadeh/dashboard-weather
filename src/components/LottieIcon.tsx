interface LottieIconProps {
    icon: string; 
  }
  
  const LottieIcon: React.FC<LottieIconProps> = ({ icon }) => {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ height: '100px', width: '100px' }} 
      >
        <source src={`/lottie/${icon}.webm`} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    );
  };
  
  export default LottieIcon;