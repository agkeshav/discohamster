import buttoniconblue from "../assets/buttoniconblue.svg"
import baselogo from "../assets/baselogo.svg"
import Knowledge from "./Knowledge";
import About from "./About";
import Info from "./Info";
function Hero() {
    return (
        <>
            <section className="relative bg-white py-16 md:py-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(58,102,230,0.1),_transparent_60%)]"></div>
                <div className="relative max-w-screen-lg mx-auto px-4 md:px-6 lg:px-0">
                    <div className="max-w-6xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400 px-4 py-1 text-xs uppercase tracking-widest text-blue-600" style={{ backgroundColor: '#dbeafcff' }}>
                            Coming Soon
                        </span>

                        <h2 className="mt-6 text-2xl md:text-3xl lg:text-5xl leading-tight tracking-normal"
                            style={{
                                fontFamily: '"Press Start 2P", cursive',
                                color: "#0052FF",
                                transform: "scale(0.60, 0.90)",
                                transformOrigin: "left",
                                wordSpacing: "8px",
                                lineHeight: "1.4",
                            }}>
                            Building the next chapter of the Disco Hamster universe
                        </h2>

                        <p className="mt-4 text-lg md:text-xl text-slate-700">
                            We&#x27;re crafting new ways for fans to play, trade, and create together. Here&#x27;s a sneak peek at the experiences arriving soon.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3 xl:grid-cols-3">
                        {/* Feature Cards */}
                        {/* Swap Page */}
                        <article className="flex flex-col justify-between rounded-3xl border border-blue-200 bg-white/80 p-6 shadow-md backdrop-blur">
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                                        <img
                                            src={buttoniconblue}
                                            alt="Swap Page icon"
                                            className="h-9 w-9 object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="text-1xl md:text-1xl lg:text-2xl text-blue-800 leading-snug"
                                        style={{
                                            fontFamily: '"Press Start 2P", cursive',
                                            color: "#0052FF",
                                            transform: "scale(0.60, 0.90)",
                                            transformOrigin: "left",
                                        }}>
                                        Swap Page
                                    </h3>
                                </div>
                                <p className="mt-6 text-base md:text-lg text-slate-700">
                                    Trade $DISCO and any other Base token with a playful interface built for speed, clarity, and memecoin magic.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-2 text-sm uppercase tracking-widest text-blue-700">
                                <span className="inline-flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                                    Stay tuned
                                </span>
                            </div>
                        </article>

                        {/* Launch Pad */}
                        <article className="flex flex-col justify-between rounded-3xl border border-blue-200 bg-white/80 p-6 shadow-md backdrop-blur">
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                                        <img
                                            src={baselogo}
                                            alt="Launch Pad icon"
                                            className="h-9 w-9 object-contain"
                                            loading="lazy"
                                        />
                                    </div>

                                    <h3 className="text-1xl md:text-1xl lg:text-2xl text-blue-800 leading-snug"
                                        style={{
                                            fontFamily: '"Press Start 2P", cursive',
                                            color: "#0052FF",
                                            transform: "scale(0.60, 0.90)",
                                            transformOrigin: "left",
                                        }}>
                                        Launch Pad
                                    </h3>
                                </div>
                                <p className="mt-6 text-base md:text-lg text-slate-700">
                                    Support community creations from day one with tokens paired with $DISCO.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-2 text-sm uppercase tracking-widest text-blue-700">
                                <span className="inline-flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                                    Stay tuned
                                </span>
                            </div>
                        </article>


                    </div>

                    {/* Join Links */}
                    <div className="mt-14 flex flex-col gap-3 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:text-base">
                        <span className="font-semibold text-blue-800"
                            style={{ color: "#0052FF" }}>
                            Want to be first in line?
                        </span>
                        <p className="flex flex-wrap gap-1">
                            Join us on{" "}
                            <a href="https://t.me/keyboardcatonbase" target="_blank" className="text-blue-600 underline decoration-dotted underline-offset-4">
                                Telegram
                            </a>
                            ,{" "}
                            <a href="https://x.com/KeyboardCatBase" target="_blank" className="text-blue-600 underline decoration-dotted underline-offset-4">
                                X(formally known as Twitter)
                            </a>{" "}
                            to help shape these features before they go live.
                        </p>
                    </div>
                </div>
            </section>
            <Knowledge />
            <Info />
            <About />
        </>
    );
}

export default Hero;


