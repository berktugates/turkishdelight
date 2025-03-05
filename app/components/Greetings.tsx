import React from "react";
import Image from "next/image";
import img from "../../public/me.jpg"

const Greetings: React.FC = () => {
  return (
    <>
      <div id="greetings" className="flex flex-row items-center my-4">
        <div id="text">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Hi, I'm Berktug 👋</h1>
          <p className="text-lg">
            A software engineer, guitarist and songwriter who loves developing
            and enjoys creating.
          </p>
        </div>
        <Image src={img} width={100} className="rounded-2xl aspect" alt="berktug's photo" />
      </div>
    </>
  );
};

export default Greetings;
