import React, {useState} from "react";
import SelectField from "../SelectField/SelectField";
import CheckBox from "../CheckBox/CheckBox";
import TextArea from "../TextArea/TextArea";

const MyMatchModal = () => {
  const [entity, setEntity] = useState("");
    const [owner, setOwner] = useState(false);
    const [other, setOther] = useState(false);
    const [feel, setFeel] = useState(false);
    const [like, setLike] = useState(false);
    const [poor, setPoor] = useState(false);
    const [offered, setOffered] = useState(false);


  const Entity = [
    { label: "Select", value: "Select" },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];

  return (
    <div>
        <div className="text-sm font-normal text-white mb-1.5"><p> Your feedback helps us improve your matches and lets the PM know how they can improve.</p></div>
    <div>
      <SelectField
        name="entityType"
        value={entity}
        onChange={(e) => setEntity(e.target.value)}
        options={Entity}
        selectClass="mb-7 w-full"
      />
      <form className="space-y-2.5">
        <CheckBox
          name="own"
          id="own"
          label="Commission too high"
          checked={owner}
          onChange={(e) => setOwner(e.target.checked)}
          labelClass="text-white mb-1"
        />
        <CheckBox
          name="offered"
          id="offered"
          label="Services offered did not match my needs"
          checked={offered}
          onChange={(e) => setOffered(e.target.checked)}
          labelClass="text-white"
        />
        <CheckBox
          name="poor"
          id="poor"
          label="PM had poor communication or responsiveness"
          checked={poor}
          onChange={(e) => setPoor(e.target.checked)}
          labelClass="text-white"
        />
        <CheckBox
          name="like"
          id="like"
          label="I didn’t like their proposal or presentation"
          checked={like}
          onChange={(e) => setLike(e.target.checked)}
          labelClass="text-white"
        />
        <CheckBox
          name="feel"
          id="feel"
          label=" I don’t feel they are a good fit for my property"
          checked={feel}
          onChange={(e) => setFeel(e.target.checked)}
          labelClass="text-white"
        />
        <CheckBox
          name="Other"
          id="Other"
          label="Other"
          checked={other}
          onChange={(e) => setOther(e.target.checked)}
          labelClass="text-white"
        />
      </form>
    </div>
    </div>
  );
};

export default MyMatchModal;
