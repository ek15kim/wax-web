import React from "react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";

import { ABOUTPAGE_TEXTS } from "@/content/texts";

export const Accordion = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container flex flex-col lg:px-12 lg:gap-5 md:flex-row my-5">
      {children}

      <div className="md:w-3/4 md:px-5">
        {ABOUTPAGE_TEXTS.accordion.map((item, idx) => {
          const { heading, description } = item;
          return (
            <Disclosure key={heading} as="div" defaultOpen={idx === 0}>
              {({ open }) => {
                return (
                  <div className="border-t-1 border-t-secondary py-2">
                    <DisclosureButton
                      className={`${
                        open ? "font-bold text-bold" : " text-slate-800 "
                      } w-full flex justify-between px-4 py-2 focus:outline-none font-semibold md:text-2xl`}
                    >
                      <span className="leading-loose">{heading}</span>
                      <ChevronUpIcon
                        className={`${
                          open
                            ? "text-slate-600"
                            : "text-secondary rotate-180 transform"
                        } h-6 w-6`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel
                      className={
                        "pl-4 pb-2 pt-4 pr-12 prose prose-brand max-w-none text-lg" +
                        (open ? "block" : "hidden")
                      }
                      style={{ display: open ? "block" : "none" }}
                    >
                      {description}
                    </DisclosurePanel>
                  </div>
                );
              }}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};
