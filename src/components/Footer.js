import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0052FF] text-white text-center py-10 px-4 md:px-8 lg:px-20 mt-auto">
      <p
        className="font-['Press_Start_2P'] text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1.3rem]
                   leading-relaxed max-w-[60ch] mx-auto break-words overflow-hidden whitespace-pre-wrap"
      >
        $DISCO is a meme coin with no intrinsic value or expectation of
        financial return.
        {"\n\n"}
        CA: 0x96DDfa5D0306DD5327015aB40084Fedf258ad2A2
      </p>
    </footer>
  );
}

export default Footer;
