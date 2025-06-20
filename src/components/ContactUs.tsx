import React, { ChangeEvent, useState } from "react";

export const ContactUs = () => {
  const initialValue = {
    firstname: "",
    surname: "",
    email: "",
    enquiry: "",
    phone: "",
    marketing: false,
  };
  const [formValues, setFormValues] = useState(initialValue);

  //   const updateSelectedOptions = (type: string, optionValue: string[]) => {
  //     setFormValues((prev) => {
  //       return { ...prev, [type]: optionValue };
  //     });
  //   };

  //   const isFormValid = () =>
  //     formValues.firstname &&
  //     formValues.surname &&
  //     formValues.email &&
  //     formValues.enquiry;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormValues((prev) => {
      if (id === "marketing") {
        return { ...prev, [id]: e.target.checked };
      }
      return { ...prev, [id]: value };
    });
  };

  return (
    <div>
      <h3
        id="modal-title"
        className="text-2xl text-center md:text-left font-bold text-slate-900"
      >
        Ready to discuss more?
      </h3>
      <p className="mt-2 text-lg text-center md:text-left md:my-5 text-slate-700">
        Fill in the form to arrange a call and we’ll follow up in one business
        day.
      </p>
      <form className="w-full px-2 md:px-0 mt-3" action="">
        <div className="flex-row gap-2 py-2">
          <label htmlFor="email" className="font-bold text-slate-600">
            Work Email
          </label>
          <div className="mt-1 relative">
            <input
              type="email"
              id="email"
              value={formValues.email}
              className="mt-1 w-full rounded-none py-2 transition shadow-sm bg-white
                  -----
                  text-slate-300 border-slate-200
                  placeholder-slate-100
                  focus:border-ice-500 focus:ring-ice-500 focus:text-slate-500 focus:placeholder-slate-200"
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* FIRST NAME */}
        <div className="flex-row gap-2 py-2">
          <label htmlFor="firstname" className="font-bold text-slate-600">
            First Name
          </label>
          <div className="mt-1 relative ">
            <input
              id="firstname"
              value={formValues.firstname}
              className="mt-1 w-full rounded-none py-2 transition shadow-sm bg-white
                  -----
                  text-slate-300 border-slate-200
                  placeholder-slate-100
                  focus:border-ice-500 focus:ring-ice-500 focus:text-slate-500 focus:placeholder-slate-200"
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* Surname NAME */}
        <div className="flex-row gap-2 py-2">
          <label htmlFor="firstname" className="font-bold text-slate-600">
            Surname
          </label>
          <div className="mt-1 relative ">
            <input
              id="firstname"
              value={formValues.firstname}
              className="mt-1 w-full rounded-none py-2 transition shadow-sm bg-white
                  -----
                  text-slate-300 border-slate-200
                  placeholder-slate-100
                  focus:border-ice-500 focus:ring-ice-500 focus:text-slate-500 focus:placeholder-slate-200"
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* Mobile */}
        <div className="flex-row gap-2 py-2">
          <label htmlFor="firstname" className="font-bold text-slate-600">
            Mobile
          </label>
          <div className="mt-1 relative ">
            <input
              id="phone"
              value={formValues.phone}
              className="mt-1 w-full rounded-none py-2 transition shadow-sm bg-white
                  -----
                  text-slate-300 border-slate-200
                  placeholder-slate-100
                  focus:border-ice-500 focus:ring-ice-500 focus:text-slate-500 focus:placeholder-slate-200"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>Product / Service of Interest - dropdown choices</div>
        {/* ENQUIRY */}
        <div className="flex-row gap-2 py-2">
          <label htmlFor="enquiry" className="font-bold text-slate-600">
            Would you like to tell us about your project?
          </label>
          <div className="mt-1 relative ">
            <textarea
              id="enquiry"
              value={formValues.enquiry}
              className="mt-1 p-2 w-full h-28 rounded-none py-4 transition shadow-sm bg-white
                  -----
                  text-slate-300 border-slate-200
                  placeholder-slate-100
                  focus:border-ice-500 focus:ring-ice-500 focus:text-slate-500 focus:placeholder-slate-200 resize-none whitespace-pre-wrap"
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* BTN */}
        <div className="pb-10">
          <button
            //   disabled={!isFormValid()}
            type="submit"
            className="my-5 rounded-1xl
          font-bold inline-flex items-center justify-center py-3 px-6 group w-full sm:w-auto
           [ bg-ice-500 text-white hover:bg-ice-700 ] hover:bg-primary disabled:bg-slate-200 bg-secondary"
          >
            SUBMIT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="shrink-0 w-5 h-5 ml-2 group-hover:animate-bounceRight"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* SUCCESS MESSAGE */}
        </div>
        {/* <p className="text-sm py-5">disclaimer.not a bot</p> */}
      </form>
    </div>
  );
};
