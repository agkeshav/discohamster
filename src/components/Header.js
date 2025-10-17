import React, { useState } from "react";
import imageSrc from "../assets/images.jpeg";
const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div class="relative z-0 overflow-hidden">
      <div class="min-h-screen text-white relative z-10 bg-blue-800">
        <header class="text-white font-bold mb-5 max-w-(--breakpoint-lg) m-auto pt-5 relative px-6 lg:px-0">
          <nav class="flex flex-col gap-4 lg:gap-0">
            <div
              class="flex items-center justify-between lg:border-b lg:border-b-2 pb-2 lg:pb-5"
              style={{ borderColor: "#528AFF" }}
            >
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 lg:hidden"
                aria-controls="mobile-nav-menu"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle navigation</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-menu h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M4 5h16"></path>
                  <path d="M4 12h16"></path>
                  <path d="M4 19h16"></path>
                </svg>
              </button>
              <ul class="hidden lg:flex lg:items-center lg:space-x-6">
                <li class="hover:underline">
                  <a
                    href="https://basescan.org/token/0x9a26F5433671751C3276a065f57e5a02D2817973"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CONTRACT
                  </a>
                </li>
                <li class="hover:underline">
                  <a
                    href="https://en.wikipedia.org/wiki/Keyboard_Cat"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WHITEPAPER
                  </a>
                </li>
              </ul>
              <div class="text-2xl lg:invisible">
                <button
                  type="button"
                  class="flex items-center justify-center rounded-md p-2 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                  aria-label="Play audio"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    font-size="x-large"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M14.42 14.45a3 3 0 1 0 4.138 4.119"></path>
                    <path d="M9 17v-8m0 -4v-1h10v11"></path>
                    <path d="M12 8h7"></path>
                    <path d="M3 3l18 18"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="mobile-nav-menu"
              class="lg:hidden hidden flex-col gap-3 rounded-lg border border-white/10 bg-black/80 p-4 backdrop-blur"
            >
              <a
                href="https://basescan.org/token/0x9a26F5433671751C3276a065f57e5a02D2817973"
                target="_blank"
                rel="noreferrer"
                class="rounded-md px-2 py-2 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                CONTRACT
              </a>
              <a
                href="https://en.wikipedia.org/wiki/Keyboard_Cat"
                target="_blank"
                rel="noreferrer"
                class="rounded-md px-2 py-2 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                WHITEPAPER
              </a>
            </div>
          </nav>
        </header>
        <div class="max-w-(--breakpoint-lg) m-auto relative">
          <div class="lg:flex justify-between pr-3 hidden">
            <div class="lg:flex justify-end hidden">
              <div class="pt-1 w-5">
                <a target="_blank" href="https://x.com/KeyboardCatBase">
                  <img src="https://d2r7wh58zh6z5r.cloudfront.net/public/images/twitterlogo.svg" />
                </a>
              </div>
              <div style={{ width: "1.6rem", marginLeft: "10px" }}>
                <a target="_blank" href="https://t.me/keyboardcatonbase">
                  <img src="https://d2r7wh58zh6z5r.cloudfront.net/public/images/telelogo.svg" />
                </a>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center visible">
            <img
              src="https://d2r7wh58zh6z5r.cloudfront.net/public/images/keycatgif.gif"
              class="mb-3 lg:w-[10%] w-36"
              alt="Keyboard Cat"
              height=""
            />
            <div class="flex items-center mb-4">
              <div
                class="mr-2 hidden lg:block"
                style={{
                  borderRadius: "50%",
                  border: "1px solid #fff",
                  overflow: "hidden",
                }}
              >
                <img class="w-6" src={imageSrc} />
              </div>
              <div
                class="text-lg font-bold font-[250] mt-1"
                style={{
                  background: "linear-gradient(to right, #B0E0E6, #00BFFF)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                <p class="lg:text-[30px] text-2xl">$KEYCAT ON</p>
              </div>
              <div class="ml-2 lg:w-20 mt-0.5 w-16">
                <img
                  src="https://d2r7wh58zh6z5r.cloudfront.net/public/images/baselogo.svg"
                  alt="Base Logo"
                />
              </div>
            </div>
          </div>
          <div class="flex justify-center flex-col items-center">
            <div>
              <div class="mb-3 hidden lg:block">
                <h1 class="lg:text-9xl text-3xl text-center">
                  KEYBOARD <br />
                  CAT
                  <br />
                </h1>
              </div>
              <div class="mb-3 lg:hidden">
                <h1 class="text-6xl text-center">
                  KEYBOARD <br />
                  CAT
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
                <p class="text-center text-md">
                  OFFICIAL MEME COIN
                  <br />
                  THE LEGEND LIVES ON
                  <br />
                </p>
              </div>
            </div>
            <div class="my-10">
              <a
                target="_blank"
                href="https://www.coinbase.com/advanced-trade/spot/KEYCAT-USD"
              >
                <div class="flex w-60 font-semibold py-3 px-10 border rounded-[53px] bg-white text-blue-800 justify-center mb-4 lg:mb-0">
                  Buy Now
                </div>
              </a>
            </div>
            <div class="flex lg:flex-row flex-col lg:w-full lg:justify-around lg:mb-16 border-t border-t-white lg:border-none pt-6 lg:pt-0"></div>
            <div class="lg:w-50 pb-30 flex flex-col items-center lg:mb-16 lg:w-1/4 md:w-1/2 w-3/4">
              <div class="lg:mb-2 mb-6">
                <p class="text-xl font-medium">OFFICIAL LINKS:</p>
              </div>
              <div class="flex pb-8 justify-between ">
                <a href="https://x.com/KeyboardCatBase" target="_blank">
                  <img
                    src="https://d2r7wh58zh6z5r.cloudfront.net/public/images/xlogo.webp"
                    class="h-8"
                    alt="X logo"
                  />
                </a>
                <a href="https://t.me/keyboardcatonbase" target="_blank">
                  <img
                    src="https://d2r7wh58zh6z5r.cloudfront.net/public/images/telelogoblue.webp"
                    class="h-8"
                    alt="Telegram Logo"
                  />
                </a>

                <a
                  href="https://coinmarketcap.com/currencies/keyboard-cat/"
                  target="_blank"
                >
                  <img
                    src="https://d2r7wh58zh6z5r.cloudfront.net/public/images/cmclogo.webp"
                    class="h-8"
                    alt="Coinmarketcap Logo"
                  />
                </a>
                <a
                  href="https://dexscreener.com/base/0x377feeed4820b3b28d1ab429509e7a0789824fca"
                  target="_blank"
                >
                  <img
                    src="https://d2r7wh58zh6z5r.cloudfront.net/public/images/dexscreenerlogo.webp"
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
