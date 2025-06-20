import { ReactNode } from "react";

export const ComponentWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto container grid gap-y-10 lg:gap-y-20 md:py-5">
        {children}
      </div>
    </section>
  );
};
