import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";

export const StatWithText = () => {
  const count = useMotionValue(1);
  const rounded = useTransform(() => Math.round(count.get()));
  useEffect(() => {
    const controls = animate(count, 99, { duration: 2, delay: 1 });

    return () => controls.stop();
  }, []);
  return (
    <div className="bg-slate-800">
      <div className="mx-auto w-full max-w-4xl">
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
        <div className="grid md:grid-cols-4 md:gap-y-16 gap-x-8 text-slate-100">
          <figure className="block text-center mx-auto max-lg:mt-3">
            {/* Stat - Max 5 Chars */}
            <div className="text-8xl md:text-9xl font-bold text-primary flex justify-center items-end">
              <motion.pre>{rounded}</motion.pre>
              <span className="text-4xl p-2">%</span>
            </div>
          </figure>
          <div className="p-5 md:col-span-3 md:text-3xl text-2xl leading-normal md:text-balance mx-auto [&_strong]:text-ice-600">
            of organisations provide eLearning to their employees, compared to
            76% in 2015
            <h3 className="font-semibold mt-4 text-secondary">{/* text */}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
