import React from "react";
import KnowledgeCard from "./KnowledgeCards";

function Knowledge() {
  const infoData = [
    {
      title: "Disco Hamster on Base",
      text: `$DISCO lives on the Base network to deliver fast, low-cost transactions backed by Ethereum security. Whether you call it the Disco Hamster meme coin or simply DISCO, Base keeps the experience smooth for traders and collectors alike.`,
    },
    {
      title: "Coinbase and beyond",
      text: `Prefer centralized exchanges? The Disco Hamster is not currenly listed on Coinbase .Shortly $DISCO will also be tradable on centralized exchanges. From there, explore DeFi pairs, liquidity pools, and creative campaigns powered by the community.`,
    },
    {
      title: "Community-made experiences",
      text: `From artwork to music and digital collectibles, the Disco Hamster community continues to expand its presence with fun, creative contributions and social campaigns.`,
    },
    {
      title: "Fast facts for disco hamster enthusiasts",
      text: `Check live charts, explore transaction stats, and follow the latest community updates to keep your Disco Hamster knowledge sharp.`,
    },
  ];

  return (
    <section className="relative bg-white py-12 md:py-24">
      <div className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-0">
        {/* Left-aligned heading */}
        <span
          className="inline-flex items-center gap-2 rounded-full border  px-4 py-1 text-xs uppercase tracking-widest "
          style={{
            backgroundColor: "#dbeafcff",
            color: "#292035",
            borderColor: "#292035",
          }}
        >
          LEARN MORE
        </span>

        <div className="max-w-6xl text-left mb-16  mt-6">
          <h2
            className="text-2xl md:text-4xl  leading-snug tracking-wider"
            style={{
              color: "#292035",
              fontFamily: '"Press Start 2P", cursive',
              wordSpacing: "8px",
              lineHeight: "1.4",
              transform: "scale(0.85, 0.95)",
              transformOrigin: "left",
            }}
          >
            Everything you need to know about the Disco Hamster meme coin
          </h2>
        </div>

        {/* Responsive card grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl">
          {infoData.map((item, index) => (
            <KnowledgeCard key={index} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Knowledge;
