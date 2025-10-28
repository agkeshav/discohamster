import React from "react";

function KnowledgeCard({ title, text }) {
  return (
    <div className="rounded-3xl border border-blue-200 shadow-md p-8 text-left bg-white hover:shadow-lg transition-all">
      <h3
        className="text-1xl font-['Press_Start_2P'] mb-4 leading-relaxed"
        style={{ color: "#292035" }}
      >
        {title}
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
    </div>
  );
}

export default KnowledgeCard;
