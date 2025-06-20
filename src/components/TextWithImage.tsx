"use client";
import { HOMEPAGE_TEXTS } from "@/content/texts";
import React from "react";
import { Fade } from "react-awesome-reveal";

export const TextWithImage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Fade delay={800} damping={0.5} triggerOnce>
        {children}
      </Fade>
      {/* CONTENT */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold md:w-100 leading-loose px-auto text-center md:text-left py-5 pb-10 text-secondary">
          {HOMEPAGE_TEXTS[1].heading}
        </h2>
        <ul className="list-disc pl-10 space-y-4">
          {HOMEPAGE_TEXTS[1].list?.map((item) => (
            <li key={item} className="text-xl text-slate-200">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-auto text-center border-1 rounded-3xl  hover:bg-slate-200 hover:text-slate-900 text-white font-semibold bg-primary py-2 px-10 font-mono my-5">
        <a href="/services">Learn More</a>
      </div>
    </>
  );
};
