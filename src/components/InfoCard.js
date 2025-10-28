import React from "react";

// Props: title (string), description (string, supports children as markup)
function InfoCard({ title, description }) {
  return (
    <div>

      <h2 className="font-mono font-bold text-1xl md:text-3xl mb-4 leading-tight"
        style={{
          fontFamily: '"Press Start 2P", cursive',
          wordSpacing: "8px",
          lineHeight: "1.4",
          transform: "scale(0.85, 0.95)",
          transformOrigin: "left",
          color: "#292035",
        }}
      >
        {title}
      </h2>
      <div className="text-xl md:text-1xl font-normal">
        {description}
      </div>
    </div>
  );
}

export default InfoCard;
