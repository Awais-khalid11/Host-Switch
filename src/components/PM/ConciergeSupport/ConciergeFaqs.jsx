import React, { useState } from "react";
import { MinusSVG, PlusSVG } from "../../../constants/Icons";
import SemiCircularProgress from "../../Host/MatchScore";

const faqs = [
  {
    question: "How do I respond to a proposal request from a host?",
    answer: "We'll walk you through how to send a proposal, what to include, and how to follow up with the host.",
  },
  {
    question: "I don’t see host contact info — when is that shared?",
    answer: "Yes, we ship to over 50 countries worldwide.",
  },
  {
    question: "Can I reach out to a host before they request a proposal?",
    answer: "You will receive an email with a tracking link once your order is shipped.",
  },
  {
    question: "What makes a strong proposal on HostSwitch?",
    answer: "You will receive an email with a tracking link once your order is shipped.",
  },
  {
    question: "How do I update or resend my proposal?",
    answer: "You will receive an email with a tracking link once your order is shipped.",
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
                src={openIndex === index ? MinusSVG : PlusSVG}
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
