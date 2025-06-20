import React from "react";
import { ContactUs } from "./ContactUs";
import { Fade } from "react-awesome-reveal";

export const Enquiry = () => {
  return (
    <section className="px-auto grid lg:grid-cols-5 grid-cols-1 lg:gap-x-12 text-slate-200">
      <div className="lg:col-2 ">
        <Fade
          // direction="left"
          delay={800}
          cascade
          damping={0.5}
          triggerOnce={true}
        >
          <h3 className="text-3xl lg:text-5xl text-center md:text-left lg:pt-10 font-bold">
            Talk to an expert today
          </h3>
          <p className="my-5 lg:mt-10 text-lg text-center md:text-left md:my-5 px-2 lg:px-0 text-slate-400">
            Interested in starting a project? Tell us a little about what you
            are looking to achieve.
          </p>
        </Fade>
      </div>

      <div className="xl:mt-4 lg:col-3 xl:p-6 pt-5 md:w-160 bg-slate-300 p-2">
        <ContactUs />
      </div>
    </section>
  );
};
