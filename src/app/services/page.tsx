"use client";

import { FlexWrapper } from "@/components/wrapper/FlexWrapper";
import Image from "next/image";

const EXAMPLES = [
  {
    beforeImage: "/service-before-1.png",
    afterImage: "/service-after-1.png",
    title1: "Quaerat ipsam atque",
    description1:
      " Lorem ipsum dolor sit consectetur adipisicing elit. Magnam, beatae Q eligendi dolore hic vel. Quaerat ipsam atque corrupti libero.",
    title2: "Ddolore hic vel",
    description2:
      " Lorem ipsum dolor sit consectetur adipisicing elit. Magnam,eligendi dolore hic vel. Quaerat ipsam atque corrupti libero.",
  },
  {
    beforeImage: "/service-before-2.png",
    afterImage: "/service-after-2.png",
    title1: "Quaepsam atque",
    description1:
      " Lorem ipsum dolor sit consectetur adipisicing elit. Magnam, beatae Q eligendi dolore hic vel. Quaerat ipsam atque corrupti libero.",
    title2: "Ddoloric vel",
    description2:
      " Lorem ipsum dolor sit consectetur adip. Magnam,eligendi dolore hic vel. Quaerat ipsam atque corrupti libero.",
  },
  {
    beforeImage: "/service-before-3.png",
    afterImage: "/service-after-3.png",
    title1: "Consectetu ipsam atque",
    description1:
      " Lorem ipsum dolor sit consectetur adipisicing eQ eligendi dolore hic vel. Quaerat ipsam atqpti libero.",
    title2: "DClore hic vel",
    description2:
      " Lorem ipsum dolor sit consectetur adipisicing elit. Magnam,eligendi dolore hic vel. Quaerat ipsam atque corrupti libero.",
  },
];

const Cards = ({ cardData }) => {
  const {
    beforeImage,
    afterImage,
    title1,
    description1,
    title2,
    description2,
  } = cardData;
  return (
    <>
      {/* TITLE COMES HERE */}
      {/* BEFORE */}
      <div className="relative flex flex-col items-center pt-4 p-2 border-gray-200 rounded-lg shadow-sm ">
        <img
          src={beforeImage}
          alt="before-1-img"
          className="w-full h-46 md:h-76 object-fit"
        />

        <div className="absolute -left-2 -top-4 bg-opacity-75 p-1">
          <Image
            className="w-1/5 md:w-1/4 md:block md:max-h-86 object-cover"
            src="/BeforeIcon.png"
            alt="accordion-img"
            width="200"
            height="220"
            priority
          />
        </div>
        <div className="py-1">
          <p className="text-2xl">{title1}</p>
          <p>{description1}</p>
        </div>
      </div>
      {/* AFTER */}

      <div className="relative p-2 flex flex-col pt-4 items-center border-gray-200 rounded-lg shadow-sm ">
        <img
          src={afterImage}
          alt="after-1-img"
          className="w-full h-46 md:h-76 object-fit"
        />
        <div className="absolute -left-4 -top-2 bg-opacity-75 p-1">
          <Image
            className="w-1/5 md:w-1/4 md:block md:max-h-86 object-cover"
            src="/AfterIcon.png"
            alt="accordion-img"
            width="300"
            height="280"
            priority
          />
        </div>
        <div className="py-1">
          <p className="text-2xl">{title2}</p>
          <p>{description2}</p>
        </div>
      </div>
    </>
  );
};

export default function Services() {
  return (
    <div>
      <main className="bg-gray-50 w-full px-2 sm:px-0 grid gap-y-8 lg:gap-y-16 lg:py-10">
        <FlexWrapper>
          <div className="md:w-1/2 py-5 flex xl:gap-10 flex-wrap md:flex-col gap-5">
            <h1 className="py-5 text-3xl md:text-5xl">Our Work</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, animi? Nesciunt corporis esse, obcaecati voluptatibus,
              voluptatum enim delectus dolorum aut eligendi deleniti aliquam.
              Explicabo aliquid ullam in, eos eligendi aspernatur!
            </p>
          </div>
        </FlexWrapper>

        <FlexWrapper>
          <div className="grid md:grid-cols-2 py-5 mx-auto md:gap-10 2xl:w-6xl">
            {/* EXAMPLE 1 */}
            {EXAMPLES.map((card, idx) => (
              <Cards cardData={card} key={idx} />
            ))}
          </div>
        </FlexWrapper>
      </main>
    </div>
  );
}
