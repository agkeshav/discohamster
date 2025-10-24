import React, { useState } from "react";
import imageSrc from "../assets/images.jpeg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import BuyButton from "./BuyBotton";
import BaseLogo from "../assets/baselogo.svg";
import dexscreenerlogo from "../assets/dexscreenerlogo.webp";
import coinmarketcaplogo from "../assets/cmclogo.webp";
import telegramlogo from "../assets/telelogoblue.webp";
import xlogo from "../assets/xlogo.webp";
import { WHITEPAPER_URL } from "./constants";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div class="relative z-0 overflow-hidden">
      <div
        className="min-h-screen text-white relative z-10"
        style={{ backgroundColor: "#0052FF" }}
      >
        <header className="text-white font-bold mb-5 max-w-(--breakpoint-lg) m-auto pt-2 relative px-6 lg:px-0">
          <nav className="flex flex-col gap-4 lg:gap-0">
            {/* Top Nav Row */}
            <div className="flex items-center justify-between py-6">
              {/* Left side links */}
              <ul className="hidden lg:flex items-center space-x-6">
                <li className="hover:underline">
                  <a
                    // the link to the contract
                    href="https://basescan.org/token/0x96DDfa5D0306DD5327015aB40084Fedf258ad2A2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CONTRACT
                  </a>
                </li>
                <li className="hover:underline">
                  <a
                    href={WHITEPAPER_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WHITEPAPER
                  </a>
                </li>
              </ul>

              {/* Mobile menu button */}
              <button
                className="lg:hidden border border-white/30 p-2 rounded-md"
                onClick={toggleMenu}
              >
                {menuOpen ? (
                  <CloseIcon fontSize="medium" />
                ) : (
                  <MenuIcon fontSize="medium" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="flex flex-col gap-3 rounded-lg border border-white/10 bg-black/80 p-4 backdrop-blur lg:hidden">
                <a
                  href="https://basescan.org/token/0x9a26F5433671751C3276a065f57e5a02D2817973"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md px-2 py-2 text-sm font-semibold transition-colors hover:bg-white/10"
                >
                  CONTRACT
                </a>
                <a
                  href={WHITEPAPER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md px-2 py-2 text-sm font-semibold transition-colors hover:bg-white/10"
                >
                  WHITEPAPER
                </a>
              </div>
            )}

            <div className="border-b border-white opacity-80 hidden lg:block"></div>

            {/* Icons below line */}
            <div className="hidden lg:flex justify-end items-center mt-4 space-x-2">
              <a target="_blank" href="https://x.com/KeyboardCatBase">
                <img src={xlogo} alt="Twitter" className="w-5" />
              </a>
              <a target="_blank" href="https://t.me/keyboardcatonbase">
                <img src={telegramlogo} alt="Telegram" className="w-5" />
              </a>
            </div>
          </nav>
        </header>

        <div class="max-w-(--breakpoint-lg) m-auto relative">
          <div class="flex flex-col justify-center items-center visible">
            {/* <img
              src="https://d2r7wh58zh6z5r.cloudfront.net/public/images/keycatgif.gif"
              class="mb-3 lg:w-[10%] w-36"
              alt="Keyboard Cat"
              height=""
            /> */}

            <div class="flex items-center mb-4">
              <div
              
                class="mr-2 hidden lg:block "
                style={{
                  borderRadius: "50%",
                  border: "1px solid #fff",
                  overflow: "hidden",
                }}
              >
                <img class="w-8" src={imageSrc} />
              </div>
              <div
                class="text-lg font-bold font-[250] mt-1"
                style={{
                  background: "linear-gradient(to right, #B0E0E6, #00BFFF)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                <p class="lg:text-[30px] text-2xl">$DISCO ON</p>
              </div>
              <div class="ml-2 lg:w-20 mt-0.5 w-16">
                <img src={BaseLogo} alt="Base Logo" />
              </div>
            </div>
          </div>

          <div class="flex justify-center flex-col items-center">
            <div>
              <div class="mb-3 hidden lg:block">
                <h1
                  class="lg:text-7xl text-5xl text-center"
                  // class="lg:text-6xl text-2xl text-center"
                  style={{
                    fontFamily: '"Press Start 2P", cursive',
                    letterSpacing: "-1px",
                    lineHeight: "1.4",
                  }}
                >
                  DISCO <br />
                  HAMSTER
                  <br />
                </h1>
              </div>
              <div class="mb-3 lg:hidden">
                <h1
                  class="text-3xl text-center"
                  style={{
                    fontFamily: '"Press Start 2P", cursive',
                    letterSpacing: "-1px",
                    lineHeight: "1.4",
                  }}
                >
                  DISCO <br />
                  HAMSTER
                  <br />
                </h1>
              </div>
              <div class="lg:block hidden">
                <p class="text-center lg:text-3xl font-semibold">
                  OFFICIAL MEME COIN
                  <br />
                  THE LEGEND LIVES ON
                  <br />
                </p>
              </div>
              <div class="lg:hidden">
                <p class="text-center text-md font-semibold">
                  OFFICIAL MEME COIN
                  <br />
                  THE LEGEND LIVES ON
                  <br />
                </p>
              </div>
            </div>
            <BuyButton />
            <div class="flex lg:flex-row flex-col lg:w-full lg:justify-around lg:mb-16 border-t border-t-white lg:border-none pt-6 lg:pt-0"></div>
            <div class="lg:w-50 pb-30 flex flex-col items-center lg:mb-16 lg:w-1/4 md:w-1/2 w-3/4">
              <div class="lg:mb-2 mb-6">
                <p class="text-xl font-medium">OFFICIAL LINKS:</p>
              </div>
              <div class="flex pb-8 justify-between ">
                <a href="https://x.com/KeyboardCatBase" target="_blank">
                  <img src={xlogo} class="h-8" alt="X logo" />
                </a>
                <a href="https://t.me/keyboardcatonbase" target="_blank">
                  <img src={telegramlogo} class="h-8" alt="Telegram Logo" />
                </a>

                <a
                  href="https://coinmarketcap.com/currencies/keyboard-cat/"
                  target="_blank"
                >
                  <img
                    src={coinmarketcaplogo}
                    class="h-8"
                    alt="Coinmarketcap Logo"
                  />
                </a>
                <a
                  href="https://dexscreener.com/base/0x377feeed4820b3b28d1ab429509e7a0789824fca"
                  target="_blank"
                >
                  <img
                    src={dexscreenerlogo}
                    class="h-8"
                    alt="Dexscreener Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
