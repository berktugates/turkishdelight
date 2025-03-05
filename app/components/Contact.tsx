import React from "react";
import X from "./icons/X";

const Contact: React.FC = () => {
  return (
    <>
      <div id="contact" className="mt-16 mb-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <div id="contact-text" className="mt-4">
          <p className="mx-auto max-w-[600px] text-gray-500">
            Want to chat? Feel free to shoot me a DM on{" "}
            <X href={"https://x.com/karoyildizi"} /> with a clear question, and
            I'll get back to you whenever I can. You can also reach me via{" "}
            <a href="mailto:berktugberke@icloud.com" className="underline text-black">
              email
            </a>{" "}
            for anything important. Just a heads-up—I ignore all solicitations.
          </p>
        </div>
      </div>
    </>
  );
};
export default Contact;
