import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0052FF] text-white text-center py-10 px-4 md:px-8 lg:px-20 mt-auto">
      <p
        className="font-['Press_Start_2P'] text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem]
                   leading-relaxed max-w-[60ch] mx-auto break-words overflow-hidden whitespace-pre-wrap"
      >
        $DISCO is a meme coin with no intrinsic value or expectation of financial return.
        {"\n\n"}
        CA: 0x9a26F5433671751C3276a065f57e5a02D2817973
        {"\n\n"}
        Contact: info@keyboardcat.fun
      </p>
    </footer>
  );
}

export default Footer;
