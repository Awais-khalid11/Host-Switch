// import { UserPNG } from "../../../constants/Imgs";
// import {
//   AllSVG,
//   EyeSVG,
//   NewSVG,
//   DotsSVG,
//   FilterSVG,
// } from "../../../constants/Icons";
// import Button from "../../Button/Button";
// import FilterDropdown from "../../FilterDropdown/FilterDropdown";
// import IncomingCards from "../../IncomingCards/IncomingCards";

// const IncomeCards = [
//   {
//     img: UserPNG,
//     title: "Sam Smith",
//     text: "Property Owner",
//     dotImg: DotsSVG,
//   },
//   {
//     img: UserPNG,
//     title: "Cameron Williamson",
//     text: "Property Owner",
//     dotImg: DotsSVG,
//   },
//   {
//     img: UserPNG,
//     title: "Robert Fox",
//     text: "Property Owner",
//     dotImg: DotsSVG,
//   },
//   {
//     img: UserPNG,
//     title: "Robert Fox",
//     text: "Property Owner",
//     dotImg: DotsSVG,
//   },
//   {
//     img: UserPNG,
//     title: "Robert Fox",
//     text: "Property Owner",
//     dotImg: DotsSVG,
//   },
//   {
//     img: UserPNG,
//     title: "Robert Fox",
//     text: "Property Owner",
//     dotImg: DotsSVG,
//   },
// ];

// const LeadCards = () => {
//   return (
//     <div>
//       <div className="flex justify-between py-5">
//         <h2 className="font-bold text-2xl">Incoming Leads</h2>
//         <FilterDropdown
//           button={
//             <Button variant="filterbtn" suffixImg={FilterSVG}>
//               Filter
//             </Button>
//           }
//           options={[
//             { label: "All", icon: <img src={AllSVG} alt="All" /> },
//             { label: "New", icon: <img src={NewSVG} alt="New" /> },
//             { label: "Viewed", icon: <img src={EyeSVG} alt="Viewed" /> },
//           ]}
//         />
//       </div>
//       <IncomingCards incomingData={IncomeCards} />
//     </div>
//   );
// };

// export default LeadCards;


import { UserPNG } from "../../../constants/Imgs";
import {
  AllSVG,
  EyeSVG,
  NewSVG,
  DotsSVG,
  FilterSVG,
} from "../../../constants/Icons";
import Button from "../../Button/Button";
import FilterDropdown from "../../FilterDropdown/FilterDropdown";
import IncomingCards from "../../IncomingCards/IncomingCards";

const IncomeCards = [
  {
    img: UserPNG,
    title: "Sam Smith",
    text: "Property Owner",
    dotImg: DotsSVG,
  },
  {
    img: UserPNG,
    title: "Cameron Williamson",
    text: "Property Owner",
    dotImg: DotsSVG,
  },
  {
    img: UserPNG,
    title: "Robert Fox",
    text: "Property Owner",
    dotImg: DotsSVG,
  },
  {
    img: UserPNG,
    title: "Robert Fox",
    text: "Property Owner",
    dotImg: DotsSVG,
  },
  {
    img: UserPNG,
    title: "Robert Fox",
    text: "Property Owner",
    dotImg: DotsSVG,
  },
  {
    img: UserPNG,
    title: "Robert Fox",
    text: "Property Owner",
    dotImg: DotsSVG,
  },
];

const LeadCards = ({ setCardDetail }) => {
  return (
    <div>
      <div className="flex justify-between py-5">
        <h2 className="font-bold text-2xl">Incoming Leads</h2>
        <FilterDropdown
          button={
            <Button variant="filterbtn" suffixImg={FilterSVG}>
              Filter
            </Button>
          }
          options={[
            { label: "All", icon: <img src={AllSVG} alt="All" /> },
            { label: "New", icon: <img src={NewSVG} alt="New" /> },
            { label: "Viewed", icon: <img src={EyeSVG} alt="Viewed" /> },
          ]}
        />
      </div>
      <IncomingCards incomingData={IncomeCards} setCardDetail={setCardDetail} />
    </div>
  );
};

export default LeadCards;
