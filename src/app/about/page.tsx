"use client";

import { FlexWrapper } from "@/components/wrapper/FlexWrapper";
import { Accordion } from "@/components/Accordion";
import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { motion } from "motion/react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { Fade } from "react-awesome-reveal";
import { ABOUTPAGE_TEXTS } from "@/content/texts";

export default function About() {
  return (
    <div>
      <main className="bg-gray-50 w-full px-2 sm:px-0 grid gap-y-8 lg:gap-y-16 lg:py-10">
        <FlexWrapper>
          <div className="md:w-1/2 py-5 flex xl:gap-10 flex-wrap md:flex-col gap-5">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 1,
                ease: "easeIn",
              }}
              className="py-5 text-3xl md:text-5xl"
            >
              Learning consultancy.
            </motion.h1>

            <ul className="text-xl flex flex-col gap-1 text-pretty">
              <li>{ABOUTPAGE_TEXTS.intro.description1}</li>
              <li>{ABOUTPAGE_TEXTS.intro.description2}</li>
              <li>{ABOUTPAGE_TEXTS.intro.description3}</li>
            </ul>

            <div className="w-full flex items-center justify-center  md:justify-start font-semibold px-5 py-1 border-gray-500 text-xl font-mono hover:underline underline-offset-8 ">
              How We Help
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -5, 0] }} // bounce effect
                transition={{
                  delay: 1.2,
                  duration: 0.5,
                  repeat: 2,
                  ease: "easeInOut",
                }}
              >
                <ArrowDownCircleIcon className="p-1 w-10 text-primary ml-2" />
              </motion.div>
            </div>
          </div>
        </FlexWrapper>
        <FlexWrapper>
          <Accordion>
            <Image
              className="md:w-1/4 hidden md:block md:max-h-86 object-cover"
              src="/img-mobile-2.png"
              alt="accordion-img"
              width="400"
              height="260"
              priority
            />
          </Accordion>
        </FlexWrapper>
        <FlexWrapper>
          <section className="px-auto grid lg:grid-cols-5 grid-cols-1 lg:gap-x-12 ">
            <div className="lg:col-2">
              <Fade delay={300} cascade damping={0.6} triggerOnce={true}>
                <h3 className="text-4xl lg:text-5xl text-center md:text-left lg:pt-10 font-bold">
                  How We Work?
                </h3>
                <p className="mt-5 lg:mt-10 text-xl text-center md:text-left md:my-5 px-2 lg:px-0">
                  Interested in starting a project? Tell us a little about what
                  you are looking to achieve.
                </p>
              </Fade>
            </div>
            <div className="xl:mt-4 lg:col-3 xl:p-6 md:w-160 my-5 relative">
              <img src="/bg-img-4.png" alt="learning-content-2" />
              <button className="absolute inset-0 flex items-center justify-center cursor-pointer">
                <PlayCircleIcon className="text-red-700 w-24 md:w-28 hover:text-red-500" />
              </button>
            </div>

            {/* <div className="xl:mt-4 lg:col-3 xl:p-6 md:w-160 my-5">
              <img src="/bg-img-4.png" alt="learning-content-2" />
              <PlayCircleIcon className="text-red-700 w-20" />
            </div> */}
          </section>
        </FlexWrapper>
        <FlexWrapper>
          <p>Technologies We Use</p>
          <div className="px-auto bg-yellow-100 ">
            <ul className="flex gap-25 xl:gap-50">
              {[
                "Illustrator",
                "Photoshop",
                "After Effects",
                "Premiere Pro",
                "InDesign",
                "Storyline",
                "Rise",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </FlexWrapper>
      </main>
    </div>
  );
}
