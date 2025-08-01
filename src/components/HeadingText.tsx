import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";

export const HeadingText = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));
  useEffect(() => {
    const controls = animate(count, 99, { duration: 2, delay: 1 });

    return () => controls.stop();
  }, []);
  return (
    <div className="bg-slate-700">
      <div className="mx-auto w-full max-w-4xl py-5 md:py-15">
        <div className="text-center mx-auto">
          <p
            // initial={{ opacity: 0, y: -20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ delay: 0.2 }}
            className="dark:text-bg-800 text-slate-50 px-6 py-4 inline-block font-bold text-4xl md:pb-10"
          >
            {/* Why Choose us? */}
          </p>
        </div>
        <div className="grid md:grid-cols-2 md:gap-y-16 gap-x-8 text-slate-100">
          <figure className="block text-center mx-auto max-lg:mt-3">
            {/* Stat - Max 5 Chars */}
            <div className="text-7xl md:text-9xl font-bold text-primary flex justify-center items-end">
              <motion.pre>{rounded}</motion.pre>
              <span className="text-4xl p-2">%</span>
            </div>
            <figcaption className="mt-2 block max-w-[35ch] text-center text-balance mx-auto pt-2 text-lg">
              of organisations provide eLearning to their employees, compared to
              76% in 2015
            </figcaption>
          </figure>
          <div className="p-5 text-xl md:text-3xl sm:text-3xl text-center  leading-normal  mx-auto [&_strong]:text-ice-600">
            ugiat ex laboriosam id ipsum ipsam cumque s qadipisci aliquid
            asperiores
            <h3 className="font-semibold mt-4 text-secondary">
              doloremque. consequatur.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
