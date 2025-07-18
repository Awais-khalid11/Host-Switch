import React, { useState } from "react";
import { MinusSVG, PlusSVG } from "../../../constants/Icons";
import SemiCircularProgress from "../../Host/MatchScore";

const faqs = [
  {
    question: " What's the difference between PM proposals?",
    answer: "We help you compare PM proposals by breaking down their services, fees, and terms so you can choose confidently.",
  },
  {
    question: " How do commission structures work?",
    answer: "We help you compare PM proposals by breaking down their services, fees, and terms so you can choose confidently.",
  },
  {
    question: "Can someone help with contracts?",
    answer: "We help you compare PM proposals by breaking down their services, fees, and terms so you can choose confidently.",
  },
  {
    question: "What are STR rules in my city?",
    answer: "We help you compare PM proposals by breaking down their services, fees, and terms so you can choose confidently.",
  },
  {
    question: " What if no PM replies?",
    answer: "We help you compare PM proposals by breaking down their services, fees, and terms so you can choose confidently.",
  },
];

const ConciergeFaqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border border-[#2525251A] p-5 rounded-[20px]">
      <h3 className="text-xl font-bold mb-4">What can I ask the Concierge team?</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#EBEBEB] rounded-[10px] p-3 cursor-pointer bg-white"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold md:text-lg text-base leading-5">{faq.question}</h3>
              <img
                src={openIndex === index ? MinusSVG  : PlusSVG}
                alt="toggle icon"
                className="md:w-5 md:h-5 w-2.5 h-2.5"
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-[500px] mt-2" : "max-h-0"
              }`}
            >
              <p className="text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <SemiCircularProgress/> */}
    </div>
  );
};

export default ConciergeFaqs;
