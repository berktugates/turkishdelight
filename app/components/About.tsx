import React from "react";

const About: React.FC = () => {
  return (
    <>
      <div id="about" className="my-4">
        <h1 className="text-lg font-bold">About</h1>
        <p className="text-sm text-gray-600 tracking-wide">
          I graduated with a degree in{" "}
          <span className="font-semibold underline text-black">
            software engineering
          </span>{" "}
          in 2025 and currently work as a{" "}
          <span className="font-semibold underline text-black">full-stack developer</span>.
          I love coding, learning new things, and sharing my knowledge, which is
          why{" "}
          <span className="font-semibold underline  text-black">
            I volunteer as an assistant at <a href="https://www.kodluyoruz.org/">Kodluyoruz</a>{" "}
          </span>
          to contribute to the developer community. I also work on projects
          focused on AI and health tech. In my free time, I play the guitar,
          write songs, and explore music. I enjoy combining technology and
          creativity.
        </p>
        <p></p>
      </div>
    </>
  );
};
export default About;
