"use client";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export const Hero = () => {
  return (
    <div className="overflow-hidden w-full md:h-160 relative">
      <Image
        className="flex flex-grow-0 basis-full w-full bg-slate-700"
        src="/hero-image.jpg"
        alt="hero"
        width="1600"
        height="300"
        priority
      />

      <div className="md:absolute top-20 py-5 md:left-5 px-2 text-white">
        <div className="sm:w-40 py-5">
          <Fade
            direction="down"
            delay={100}
            cascade
            damping={0.2}
            triggerOnce={true}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono">
              Flexible learning.
            </h2>
          </Fade>
          <Fade
            // direction="right"
            delay={600}
            cascade
            damping={0.5}
            triggerOnce={true}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-secondary font-mono pt-2">
              Solid results.
            </h2>
          </Fade>
        </div>
        <div className="md:w-180 py-5 mr-0.5 md:text-xl text-lg flex md:pt-20 flex-wrap gap-10 leading-relaxed">
          <div className="bg-primary w-full md:w-auto text-center hover:bg-purple-400 py-2 px-10 text-white font-mono ">
            <a href="/about">About Wax</a>
          </div>
          <p className="text-semibold text-2xl text-balance">
            We design engaging, tailered learning experiences that improve
            performance, sharpen skills, and deliver real impact where it
            matters.
          </p>
        </div>
      </div>
    </div>
  );
};
