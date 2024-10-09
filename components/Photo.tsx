"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      {/* photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.5, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.5,
              duration: 0.5,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            },
          }}
          className="relative mx-auto w-[300px] h-[300px] xl:w-[440px] xl:h-[440px] max-w-full max-h-full mix-blend-hard-light"
        >
          <Image
            src="/assets/Swastik2.png"
            priority
            quality={100}
            fill
            alt="Image description"
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* circles */}
      <motion.svg
        className="size-[302px] xl:size-[446px] absolute top-0 left-0"
        fill="transparent"
        viewBox="0 0 446 446"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="223"
          cy="223"
          r="220"
          stroke="#1d4ed8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0", opacity: 0 }}
          animate={{
            opacity: 1,
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
            repeatCount: Infinity,
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
