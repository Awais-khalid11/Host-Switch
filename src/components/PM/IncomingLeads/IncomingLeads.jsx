// import React from 'react'
// import LeadCards from './LeadCards'

// const IncomingLeads = () => {
//   return (
//     <div>
//       <LeadCards/>
//     </div>
//   )
// }

// export default IncomingLeads



import React, { useState } from 'react';
import LeadCards from './LeadCards';
import Views from '../../Views/Views';
import SendProposal from '../../SendProposal/SendProposal';

const IncomingLeads = () => {
  const [cardDetail, setCardDetail] = useState(null);

  if (cardDetail === "view") {
    return <Views setClose={() => setCardDetail(null)} />;
  }

  if (cardDetail === "proposal") {
    return <SendProposal setClose={() => setCardDetail(null)} />;
  }

  return (
    <div>
      <LeadCards setCardDetail={setCardDetail} />
    </div>
  );
};

export default IncomingLeads;
