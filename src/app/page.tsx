"use client";

import { ComponentWrapper } from "../components/wrapper/ComponentWrapper";
import { Enquiry } from "../components/Enquiry";
import { HeadingText } from "../components/HeadingText";
import { Hero } from "../components/Hero";
import { ServiceCards } from "../components/ServiceCards";
import { TextWithImage } from "../components/TextWithImage";
import { FlexWrapper } from "@/components/wrapper/FlexWrapper";
import Image from "next/image";
import { ListText } from "@/components/ListText";
import { StatWithText } from "@/components/Stat";

export default function HomeHome() {
  return (
    <div>
      <main className="w-full px-2 sm:px-0 grid gap-y-8 bg-slate-800">
        {/* HERO  */}
        <Hero />

        <ComponentWrapper>
          <StatWithText />
        </ComponentWrapper>

        {/* <ComponentWrapper className="bg-slate-700">
          <HeadingText />
        </ComponentWrapper> */}

        <FlexWrapper className="bg-slate-800">
          <TextWithImage>
            {/* IMG */}
            <div
              // initial={{ opacity: 0, x: -100 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ delay: 1, duration: 0.8, ease: "easeIn" }}
              className="hidden md:block w-78 rounded-full bg-yellow-200 overflow-hidden m-5"
            >
              <Image
                src="/img2.jpg"
                alt="hero"
                width="400"
                height="260"
                priority
              />
            </div>
          </TextWithImage>
        </FlexWrapper>

        {/* MAIN CONTENT */}
        <ComponentWrapper className="text-slate-50">
          <ListText />
        </ComponentWrapper>

        <ComponentWrapper>
          <ServiceCards />
        </ComponentWrapper>

        <div id="enquiry">
          <ComponentWrapper>
            <Enquiry />
          </ComponentWrapper>
        </div>
      </main>
    </div>
  );
}
