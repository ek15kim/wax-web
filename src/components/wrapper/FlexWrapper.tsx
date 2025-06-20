import { ReactNode } from "react";

export const FlexWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section className={`w-full ${className}`}>
    <div className="mx-auto container grid gap-y-10 lg:gap-y-16 md:py-5">
      <div className="flex flex-wrap justify-center items-center px-5 gap-5 md:gap-10 pb-5 md:pb-10">
        {children}
      </div>
    </div>
  </section>
);
