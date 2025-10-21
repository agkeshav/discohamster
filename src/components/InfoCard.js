import React from "react";

function InfoCard({ title, description }) {
  return (
    <article class="flex flex-col justify-between rounded-3xl border border-blue-800/20 bg-white p-3 ">
      <div class="md:mr-10">
        <h2 class=" lg:text-3xl  text-2xl md:mb-2 my-10 text-blue-800">
          {title}
        </h2>
        <p class="text-xl">{description}</p>
      </div>
    </article>
  );
}

export default InfoCard;
