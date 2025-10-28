import React from "react";
import { CONTRACT_ADDRESS } from "./constants";

function Footer() {
  return (
    <footer className="bg-[#292035] text-white text-center py-10 px-4 md:px-8 lg:px-20 mt-auto">
      <p
        className="font-['Press_Start_2P'] text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1.2rem]
                   leading-relaxed max-w-[60ch] mx-auto break-words overflow-hidden whitespace-pre-wrap mt-10 mb-10"
      >
        $DISCO is a meme coin with no intrinsic value or expectation of
        financial return.
        {"\n\n"}
        CA: {CONTRACT_ADDRESS}
      </p>
    </footer>
  );
}

export default Footer;
