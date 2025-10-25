import React from "react";
import InfoCard from "./InfoCard";

function Info() {
  const infoData = [
    {
      title: "What's a meme coin?",
      description: (
        <>
          Meme coins are a type of cryptocurrency with no intrinsic value,
          but are traded amongst a community who share a common interest or humor.
          These coins are often created as a joke or parody, and are not intended
          to be used as a serious investment!
        </>
      ),
    },
    {
      title: "Where can I buy the Keyboard Cat meme coin?",
      description: (
        <>
          The official $KEYCAT token is live on Base and tradable on Coinbase Advanced Trade.
          Visit the{" "}
          <a href="#" className="underline text-blue-600 hover:text-blue-800">
            Keyboard Cat Coinbase listing
          </a>{" "}
          to swap USD, USDC, or other Base assets for the meme coin in a few clicks.
          You can also explore decentralized liquidity via Base-native DEX tools.
        </>
      ),
    },
    {
      title: "So Keycat is like Dogecoin?",
      description: (
        <>
          This token and Dogecoin are indeed very similar.
          However, this meme coin is unique in that it pays tribute to
          the historic, legendary, and iconic Keyboard Cat.
        </>
      ),
    },
    {
      title: "What makes Keycat different from other crypto projects?",
      description: (
        <>
          Keycat is the shorthand for the Keyboard Cat crypto token.
          It blends officially licensed IP, a vibrant meme heritage,
          and the speed of the Base network to deliver an experience
          you can only find here.
        </>
      ),
    },
    // Add more cards if needed
  ];

  return (
    <section className="relative bg-white py-12 md:py-12">
      <div className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-0">
        {/* Optional section label */}

        {/* Info cards grid */}

        <div className="max-w-6xl text-left mb-16 ">
          <h2
            className="text-2xl md:text-4xl leading-snug tracking-wider"
            style={{
              fontFamily: '"Press Start 2P", cursive',
              wordSpacing: "8px",
              lineHeight: "1.4",
              transform: "scale(0.85, 0.95)",
              transformOrigin: "left",
            }}
          >
            Info
          </h2>
        </div>

        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-2 max-w-6xl ">
          {infoData.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="max-w-6xl text-left mb-16 mt-40">
          <h2
            className="text-2xl md:text-3xl leading-snug tracking-wider"
            style={{
              fontFamily: '"Press Start 2P", cursive',
              transform: "scale(0.85, 0.95)",
              transformOrigin: "left",
            }}
          >
            Get Involved!
          </h2>

          <p className="text-xl lg:text-2xl mb-10 mt-14">
            A memecoin is only as strong as it's community so please join us on{" "}{" "} 
            <span
              style={{
                fontFamily: '"Press Start 2P", cursive',
                color: "#0052FF",
                fontSize: "0.7em",
                transform: "scale(0.8, 0.8)",
                display: "inline",
              }}
            >
              X, Telegram, Farcaster!
            </span>
            <br />
            <br />
            Join our community and share your ideas, or just hang out :-)
            <br />
            <br />
            As this is a decentralized cryptocurrency everyone should feel empowered to contribute; it is up to the community to work together and spread the love that is the Keyboard Cat!
          </p>

        </div>
      </div>
    </section>
  );
}

export default Info;
