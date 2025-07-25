// import React from "react";
// import { LoginPNG } from "../../../constants/Imgs";
// import { LogoSVG } from "../../../Constants/Icons";
// import { Link } from "react-router-dom";
// import { ROUTES } from "../../../constants/Routes";

// const RoleSelection = () => {
//   return (
//     <div className="flex md:flex-row flex-col items-center bg-white justify-center md:p-5 md:!pr-10 gap-[30px]">
//       <div className="md:w-1/2 w-full">
//         <img src={LoginPNG} alt="loginImg" className="rounded-2xl w-full" />
//       </div>
//       <div className="md:w-1/2 w-full">
//         <img
//           src={LogoSVG}
//           alt="logoImg"
//           className="md:max-w-[285px] max-w-[180px] mx-auto min-h-[29px] mb-9 md:mb-14"
//         />
//         <h2
//           className="lg:text-[30px] md:text-[30px] text-[25px] md:leading-7 sm:leading-6  font-bold mb-8 text-center"
//           to={ROUTES.COMPANYINFO}
//         >
//           Selection Option that Describes You the Best
//         </h2>
//         <div className="flex flex-col">
//           <Link
//             className="border border-[#E4E5E8] p-5 rounded-[12px] mb-2.5"
//             to={ROUTES.COMPANYINFO}
//           >
//             I Wanted to go to the PM Dashboard
//           </Link>
//           <Link
//             className="border border-[#E4E5E8] p-5 rounded-[12px] mb-5"
//             to={ROUTES.HOSTCOMPANYINFO}
//           >
//             I Wanted to go to the Host Dashboard
//           </Link>
//         </div>
//         <div className="text-sm text-center font-medium leading-6 text-[#777777]">
//           <p>
//             if you are already a member, please
//             <Link
//               to={ROUTES.LOGIN}
//               className="font-bold cursor-pointer ml-1.5 text-[#252525]"
//             >
//               login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoleSelection;


import React from "react";
import { LoginPNG, RolePNG } from "../../../constants/Imgs";
import { LogoSVG } from "../../../Constants/Icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/Routes";

const RoleSelection = () => {
  return (
    <div className="flex md:flex-row flex-col items-center bg-white justify-center md:p-5 md:!pr-10 gap-[30px]">
      <div className="md:w-1/2 w-full">
        <img src={RolePNG} alt="loginImg" className="rounded-2xl w-full" />
      </div>
      <div className="md:w-1/2 w-full">
        <img
          src={LogoSVG}
          alt="logoImg"
          className="md:max-w-[285px] max-w-[180px] mx-auto min-h-[29px] mb-9 md:mb-14"
        />
        <h2 className="lg:text-[30px] md:text-[30px] text-[25px] md:leading-7 sm:leading-6 font-bold mb-8 text-center">
          Choose the Option That Best Describes You
        </h2>
        <div className="flex flex-col">
          <Link
            className="border border-[#E4E5E8] p-5 rounded-[12px] mb-2.5 hover:shadow-md transition"
            to={ROUTES.COMPANYINFO}
          >
            I want to access the <span className="font-bold">PM Dashboard</span>
          </Link>
          <Link
            className="border border-[#E4E5E8] p-5 rounded-[12px] mb-5 hover:shadow-md transition"
            to={ROUTES.HOSTCOMPANYINFO}
          >
            I want to access the <span className="font-bold">Host Dashboard</span>
          </Link>
        </div>
        <div className="text-sm text-center font-medium leading-6 text-[#777777]">
          <p>
            Already have an account?
            <Link
              to={ROUTES.LOGIN}
              className="font-bold cursor-pointer ml-1.5 text-[#252525]"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
