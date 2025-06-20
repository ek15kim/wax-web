import { SERVICE_CARDS_TEXT } from "@/content/texts";
import { useRouter } from "next/navigation";
import React from "react";
import { Fade } from "react-awesome-reveal";

type TextDataProps = {
  title: string;
  description: string;
  icon: string;
};

const ServiceCard = ({ textData }: TextDataProps) => {
  const { title, description, icon } = textData;
  const router = useRouter();
  const handleClickButton = () => {
    router.push("/services");
  };
  return (
    <article className="border-top-5bg-white shadow-lg flex flex-col hover:scale-102 transition duration-300 bg-stone-200 sm:h-66 md:h-60 xl:h-76 ">
      <div className="flex-grow pt-5 px-2 md:px-5 flex flex-col items-center text-center gap-y-5">
        <img src={icon} alt="hero" className="w-20" />
        <h3 className="px-5 block text-xl font-semibold text-ice-800 group-hover:decoration-2 group-hover:underline group-hover:underline-offset-2 text-slate-700">
          {title}
        </h3>
      </div>
      <div className="flex justify-center py-2 px-5">
        <button
          onClick={handleClickButton}
          className="bg-gray-800 hover:opacity-80 cursor-pointer hover:bg-primary text-white p-2 w-36 rounded-2xl mb-5"
        >
          Learn more
        </button>
      </div>
    </article>
  );
};

export const ServiceCards = () => {
  return (
    <div className="mt-6 xl:mt-12 py-2 2xl:px-20 px-2 md:px-5">
      <h2 className="text-white text-3xl md:text-4xl text-center py-5 md:py-10">
        Powerful support to maximise your investment
      </h2>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 py-2 2xl:px-20 md:px-5 gap-x-6 gap-y-5">
        <Fade delay={100} cascade damping={0.2} triggerOnce={true}>
          {SERVICE_CARDS_TEXT.map((item, idx) => (
            <ServiceCard textData={item} key={idx} />
          ))}
        </Fade>
      </div>
    </div>
  );
};

// const ServiceCard = ({ textData }: TextDataProps) => {
//   const { title, description, icon } = textData;
//   return (
//     <article className="border-top-5bg-white shadow-lg flex flex-col hover:scale-102 transition duration-200 bg-slate-50 hover:bg-slate-200">
//       <div className="relative flex-1 p-2 md:p-5 grid gap-y-12">
//         <div className="py-5 text-center flex flex-col items-center">
//           {/* <div className="flex flex-wrap justify-center w-18 h-16 p-1 items-center pg-yellow-200"> */}
//           <img src={icon} alt="hero" className="w-16 h-12" />
//           {/* </div> */}
//           <h3 className="pt-5 px-5 block text-xl font-semibold text-ice-800 group-hover:decoration-2 group-hover:underline group-hover:underline-offset-2 text-slate-700">
//             {title}
//           </h3>
//           {/* <p className="dark:text-gray-900 text-slate-300 mt-5 text-base font-medium tracking-tight ">
//             {description}
//           </p> */}
//         </div>
//         <div className="flex justify-center py-2">
//           <button className="bg-gray-800 hover:opacity-80 cursor-pointer hover:bg-white hover:text-slate-800 text-white p-2 w-36 rounded-2xl">
//             Learn more
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// };
// export const ServiceCards = () => {
//   return (
//     <div className="mt-6 xl:mt-12 grid sm:grid-cols-2 xl:grid-cols-4 xl:px-10 md:px-5 gap-x-6 gap-y-15 xl:gap-x-12">
//       <Fade delay={100} cascade damping={0.2} triggerOnce={true}>
//         {SERVICE_CARDS_TEXT.map((item, idx) => (
//           <ServiceCard textData={item} key={idx} />
//         ))}
//       </Fade>
//     </div>
//   );
// };
