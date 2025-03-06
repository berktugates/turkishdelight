import React, { useContext } from "react";
import { Tcontext } from "@/store/context/ThemeContext";
import Image from "next/image";
import img from "../../public/me.jpg";
import { motion } from "framer-motion";

const Greetings: React.FC = () => {
  const context = useContext(Tcontext);
  if (!context) return null;
  const { theme } = context;
  return (
    <>
      <div id="greetings" className="flex flex-row items-center my-4">
        <div id="text">
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.6,
              },
            }}
            className={`text-3xl md:text-5xl font-bold mb-2 ${
              theme == "light" ? "" : "text-white"
            }`}
          >
            Hi, I&apos;m Berktug 👋
          </motion.h1>
          <p className={`text-lg ${theme == "light" ? "" : "text-white"}`}>
            A software engineer, guitarist and songwriter who loves developing
            and enjoys creating.
          </p>
        </div>
        <Image
          src={img}
          width={100}
          className={`rounded-2xl aspect ${
            theme == "light" ? "" : "border border-white"
          }`}
          alt="berktug's photo"
        />
      </div>
    </>
  );
};

export default Greetings;
