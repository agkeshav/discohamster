import imageSrc from "../assets/images.jpeg";
import ButtonImageIcon from "../assets/buttoniconblue.svg";
import BaseLogo from "../assets/baselogo.svg";
import FeatureCard from "./FeatureCard";
function About() {
  return (
    <section class="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 text-center">
      <div class="mb-4">
        <span class="bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full border border-blue-200">
          COMING SOON
        </span>
      </div>
      <h1 class="text-4xl md:text-6xl font-bold text-blue-700 mb-4 leading-tight font-mono">
        Building the next chapter of <br />
        the Keyboard Cat universe
      </h1>
      <p class="text-gray-600 max-w-2xl mb-12">
        We're crafting new ways for fans to play, trade, and create together.
        Here's a sneak peek at the experiences arriving soon.
      </p>
      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-2 max-w-5xl w-full">
        <FeatureCard
          imageSrc={ButtonImageIcon}
          title="Swap Page"
          description="Trade $KEYCAT and any other Base token with a playful interface built for speed, clarity, and memecoin magic."
        />
        <FeatureCard
          imageSrc={BaseLogo}
          title="Launch Pad"
          description="Support community creations from day one with tokens paired with $KEYCAT."
        />
      </div>
      <div class=" mt-14 flex flex-col gap-3 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:text-base">
        <span class="font-semibold text-blue-800">Want to be first in line?</span>
        <p>
          Join us on{" "}
          <a
            href="https://t.me/keyboardcatonbase"
            target="_blank"
            rel="noreferrer"
            class="text-blue-800 underline decoration-dotted underline-offset-4"
          >
            Telegram
          </a>{" "}
          , or{" "}
          <a
            href="https://x.com/KeyboardCatBase"
            target="_blank"
            rel="noreferrer"
            class="text-blue-800 underline decoration-dotted underline-offset-4"
          >
            X (formally known as Twitter)
          </a>
          to help shape these features before they go live.
        </p>
      </div>
    </section>
  );
}

export default About;
