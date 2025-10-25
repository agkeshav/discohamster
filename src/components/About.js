import imageSrc from "../assets/aboutimg.jpg";

function About() {
  return (
    <>
      <section className="bg-white py-12">
        <div className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-0">
          <h2
            className="text-2xl md:text-4xl  mb-10 leading-snug tracking-wider"
            style={{
              fontFamily: '"Press Start 2P", cursive',
              transform: "scale(0.85, 0.95)",
              transformOrigin: "left",
            }}
          >
            About
          </h2>
          <img
            className="rounded-lg w-full object-cover mb-10 max-w-full"
            src={imageSrc}
            alt="Keyboard Cat"
            style={{ height: "500px", objectPosition: "center" }}
          />
          <p className="text-xl lg:text-2xl mb-10">
            Disco Hamster is an electrifying internet meme featuring a funky little hamster who can’t stop grooving to the beat! Bursting onto the scene with glitter, lights, and unstoppable moves, this disco-loving rodent has spun its way into the hearts of meme lovers everywhere. From dazzling dance floors to viral video loops, Disco Hamster embodies the spirit of fun, rhythm, and chaos that defines meme culture — one spin at a time. 🐹✨🕺
          </p>
        </div>
      </section>
    </>
  );
}

export default About;


