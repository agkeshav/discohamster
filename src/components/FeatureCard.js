import React from "react";
import ButtonImageIcon from "../assets/buttoniconblue.svg";
function FeatureCard({imageSrc, title, description}) {
  return (
    <article class="flex flex-col justify-between rounded-3xl border border-blue-800 bg-white p-6 ">
      <div>
        <div class="flex items-center gap-4">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-800/20">
            <img
              src={imageSrc}
              alt="Swap Page icon"
              class="h-9 w-9 object-contain"
              loading="lazy"
            />
          </div>
          <h3 class="text-2xl md:text-3xl text-blue-800 leading-snug">
            {title}
          </h3>
        </div>
        <p class="mt-6 text-base md:text-lg text-slate-700">{description}</p>
      </div>
      <div class="mt-8 flex items-center gap-2 text-sm uppercase tracking-widest text-blue-800">
        <span class="inline-flex items-center gap-2">
          <span class="h-2 w-2 rounded-full bg-blue-800"></span>Stay tuned
        </span>
      </div>
    </article>
  );
}

export default FeatureCard;
