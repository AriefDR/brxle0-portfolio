import { motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

const reserveIndex = (index) => {
    const totalStep = 6;
    return totalStep - index - 1;
};

const Stairs = () => {
  return <>
  {[...Array(6)].map((_, index) => (
    <motion.div
      key={index} variants={stairAnimation} initial="initial"
      animate="animate" exit="exit" transition={{
        duration: 0.4,
        ease: "easeInOut",
        delay: reserveIndex(index) * 0.1,  
      }}
      className="h-full w-full bg-white relative"
    />
  ))}
  </>
};

export default Stairs;