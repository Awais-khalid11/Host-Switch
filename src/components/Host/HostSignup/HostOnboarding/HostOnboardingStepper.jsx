import React from "react";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../../../../constants/Routes";

const steps = [
  { label: "Company Info", path: ROUTES.HOSTCOMPANYINFO },
  { label: "Portfolio", path: ROUTES.HOSTPORTFOLIO },
  { label: "Expectations", path: ROUTES.HOSTEXPECTATIONS },
];

const HostOnboardingStepper = () => {
  const location = useLocation();

  const currentIndex = steps.findIndex(
    (step) => step.path === location.pathname
  );

  return (
    <div className="flex justify-center items-center mb-5 gap-24 relative">
      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isPassed = index <= currentIndex;
        const isLast = index === steps.length - 1;

        return (
          <div key={index} className="flex flex-col items-center relative z-10">
            <div
              className={`w-[30px] h-[30px] rounded-full flex items-center border justify-center font-semibold text-black transition-colors duration-300 ${
                isPassed ? "bg-black text-white" : "bg-white"
              }`}
            >
              {stepNum}
            </div>

            {!isLast && (
              <div className="absolute top-3.5 left-6 -z-50 w-[120px] h-[2px] bg-black"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HostOnboardingStepper;
