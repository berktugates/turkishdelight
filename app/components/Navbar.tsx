import React from "react";
import GitHub from "./icons/GitHub";
import LinkedIn from "./icons/LinkedIn";
import Light from "./icons/Light";
import X from "./icons/X";

const Navbar:React.FC = ()=>{
    return (
        <>
            <div
              id="navbar"
              className=" border-b mb-4 flex justify-between items-center"
            >
              <div id="social" className="flex gap-x-4">
                <GitHub />
                <LinkedIn />
                <X href="https://x.com/karoyildizi" isNavbar={true} />
              </div>
              <div id="light-mode">
                <Light />
              </div>
            </div>
        </>
    )
}

export default Navbar;