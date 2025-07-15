import React from "react";
import { CrossSVG, ProfileSVG, RedlocationSVG, StarSVG } from "../../../constants/Icons";
import SemiCircleProgress from "../MatchScore";
import Button from "../../Button/Button";

const Match = ({matchdata}) => {
  return (
    <div>
      {matchdata.map((item, index) => (
        <div key={index} className="flex items-center border border-[#2525251A] rounded-[20px] p-5 mb-5 w-full">
          <div className="flex gap-3 pr-3 border-r border-r-[#3636361A]  w-1/2">
            <img src={item.image} alt="img" className="w-[290px] h-[190px] flex [flex:0_0_52px] rounded-[10px]" />
            <div>
              <div className="flex gap-2.5 items-center mb-3">
                <img
                  src={item.globalImg}
                  alt="img"
                  className="w-[50px] h-[50px]"
                />
                <div>
                  <h4 className="text-base font-semibold whitespace-nowrap">{item.name}</h4>
                  <div className="text-[#1B252B99] whitespace-nowrap text-sm font-normal flex items-center gap-1">
                    <img src={StarSVG} alt="starImg" className="w-3.5 h-3.5" />
                    <p>{item.points}</p>
                  </div>
                </div>
              </div>
              <div className="text-sm font-normal text-[#1B252B80] max-w-[273px] mb-2">
                <p>{item.desc}</p>
              </div>
              <div className="text-[11px] whitespace-nowrap font-normal text-black flex items-center gap-1">
                <img src={RedlocationSVG} alt="img" />
                <p>{item.location}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-5 pl-3 w-1/2">
            <div>
              <h3 className="text-base font-bold text-[#1B252B] mb-4">
                Services
              </h3>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h5 className="border text-[12px] font-normal border-[#0050B333] rounded-[90px] w-[134px] h-[24px]  text-center">
                    Property Maintenance
                  </h5>
                  <h5 className="border text-[12px] font-normal border-[#0050B333] rounded-[90px] w-[121px] h-[24px]  text-center">
                    Guest Management
                  </h5>
                </div>
                <div className="mb-4">
                  <h5 className="border text-[12px] font-normal border-[#0050B333] rounded-[90px] w-[123px] h-[24px]  text-center">
                    Listing Optimization
                  </h5>
                </div>
                <div className="mb-4">
                  <h5 className="border text-[12px] font-normal border-[#0050B333] rounded-[90px] w-[135px] h-[24px]  text-center">
                    Revenue Management
                  </h5>
                </div>
                <div className="flex items-center gap-4">
                  <h5 className="border text-[12px] font-normal border-[#0050B333] rounded-[90px] w-[126px] h-[24px]  text-center">
                    Reporting & Insights
                  </h5>
                  <h5 className="border text-[12px] font-normal border-[#0050B333] rounded-[90px] w-[97px] h-[24px]  text-center">
                    Owner Support
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="mb-6">
                    <SemiCircleProgress/>
                </div>
                <Button variant="greenbtn" className="mb-2.5 !px-2" prefixImg={ProfileSVG}>Request a Parposal</Button>
                <Button variant="borderbtn" className="border-[#555555] text-[#555555] text-[12px]" prefixImg={CrossSVG}>Decline Match</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Match;
