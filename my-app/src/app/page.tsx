"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
          className="text-7xl font-bold  bg-gradient-to-r  from-pink-800 to-blue-950 bg-clip-text text-transparent">
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
          transition={{ duration: 0.35,delay:0.35 }} className="text-center text-blue-950 font-semibold">Your Ideas, Our AI – A Creative Partnership</motion.p>
          <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.35,delay:0.7 }} 
          >
        <Link href="/create">
        <Button className="mt-3 font-bold p-5 bg-gradient-to-r  from-pink-800 to-blue-950">Start Creating</Button>
        </Link>
        </motion.div>
      </div>
    </div>
  );
}
