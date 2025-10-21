import React from "react";
import InfoCard from "./InfoCard";

function Info() {
  return (
    <div class="md:min-h-screen pt-8 relative bg-white z-10">
      <div class="max-w-(--breakpoint-lg) m-auto px-8 md:px-12 lg:px-0">
        <h1 class="lg:text-5xl  text-4xl mb-2">Info</h1>
        <div class="text-xl lg:text-2xl">
          <div class="grid grid-cols-auto md:gap-20 gap-4 md:grid-cols-1">
            <div class="grid grid-cols-1 md:gap-20 gap-4 md:grid-cols-2 md:pb-24">
              <InfoCard
                title={"What's a meme coin ?"}
                description={
                  "Meme coins are a type of cryptocurrency with no intrinsic value, but are traded amongst a community who share a common interest/humor.These coins are often created as a joke or parody, and are not intended to be used as a serious investment!"
                }
              />
              <InfoCard
                title={"Where can I buy the Keyboard Cat meme coin?"}
                description={
                  "The official $KEYCAT token is live on Base and tradable on Coinbase Advanced Trade. Visit the Keyboard Cat Coinbase listing to swap USD, USDC, or other Base assets for the meme coin in a few clicks. You can also explore decentralized liquidity via Base-native DEX tools."
                }
              />
              <InfoCard
                title={
                  "What makes Keycat different from other crypto projects?"
                }
                description={
                  "Keycat is the shorthand for the Keyboard Cat crypto token. It blends officially licensed IP, a vibrant meme heritage, and the speed of the Base network to deliver an experience you can only find here."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
