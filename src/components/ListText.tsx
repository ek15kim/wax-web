import React from "react";

import { HOMEPAGE_TEXTS } from "@/content/texts";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { Fade } from "react-awesome-reveal";

export const ListText = () => {
  return (
    <div className="flex flex-wrap justify-center items-center px-5 gap-5 md:gap-10 pb-5 md:pb-10">
      {/* <div className="w-78 rounded-full overflow-hidden m-5 animate-fade-in"></div> */}

      <div className="grid gap-2">
        <h2 className="text-2xl md:text-4xl font-bold md:w-100 py-5 pb-10">
          {HOMEPAGE_TEXTS[2].heading}
        </h2>
        <ul className="md:pl-10  space-y-4 ">
          <Fade cascade delay={200} damping={0.4} triggerOnce={true}>
            {HOMEPAGE_TEXTS[2].cards?.map(({ icon, text }, index) => (
              <li
                key={index}
                className="text-xl flex gap-2 text-gray-300 items-center leading-loose"
              >
                <div className="flex-shrink-0">
                  <CheckCircleIcon className="w-5 text-primary" />
                </div>
                {text}
              </li>
            ))}
          </Fade>
        </ul>
      </div>
    </div>
  );
};
