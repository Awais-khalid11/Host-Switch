


import React, { useState } from 'react';
import Match from '../Match/Match';
import { LuxePNG, ManImgPNG, ProfessionPNG } from '../../../constants/Imgs';
import { AvatorSVG, DellSVG, StaySVG } from '../../../constants/Icons';
import HostProposalView from '../HostProposals/HostProposalView/HostProposalView';

const matchdata = [
  {
    image: ManImgPNG,
    globalImg: StaySVG,
    name: 'StayWell Homes',
    points: '4.8 (125 reviews)',
    desc: 'Your property stays well-maintained, profitable, and in trusted hands — from tenant screening to maintenance and reporting.',
    location: '4517 Washington Ave. Manchester,',
  },
  {
    image: LuxePNG,
    globalImg: AvatorSVG,
    name: 'LuxeBnB Mgmt',
    points: '4.8 (125 reviews)',
    desc: 'Your property stays well-maintained, profitable, and in trusted hands — from tenant screening to maintenance and reporting.',
    location: '4517 Washington Ave. Manchester,',
  },
  {
    image: ProfessionPNG,
    globalImg: DellSVG,
    name: 'LuxeBnB Mgmt',
    points: '4.8 (125 reviews)',
    desc: 'Your property stays well-maintained, profitable, and in trusted hands — from tenant screening to maintenance and reporting.',
    location: '4517 Washington Ave. Manchester,',
  },
];

const MyMatchCards = () => {
  const [showProposalPage, setShowProposalPage] = useState(false);

  return (
    <div className="w-full">
      {showProposalPage ? (
        <HostProposalView setClose={() => setShowProposalPage(false)} />
      ) : (
        <Match
          matchdata={matchdata}
          // borderBtn={true}
          isMyMatchPage={true}
          setShowProposalPage={setShowProposalPage}
        />
      )}
    </div>
  );
};

export default MyMatchCards;
