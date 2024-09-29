"use client";

import React from "react";
import { motion } from "framer-motion";
import { filter } from "framer-motion/client";
export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center">
        <motion.h2
          initial={{
            opacity: 0,
            scale: 0.95,
             filter:"blur(10px)"
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter:"blur(0px)"
          }}
          transition={{ duration: 0.35 }}
          className="text-7xl font-bold bg-gradient-to-r from-blue-950 to-blue-400 bg-clip-text text-transparent">
  ArtifyAI
        </motion.h2>
        <motion.p   initial={{
            opacity: 0,
            scale: 0.95,
             filter:"blur(10px)"
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter:"blur(0px)"
          }}
          transition={{ duration: 0.35,delay:0.35 }} className="text-center">Your Ideas, Our AI – A Creative Partnership</motion.p>
      </div>
    </div>
  );
}
