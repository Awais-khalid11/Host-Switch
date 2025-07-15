import React, { useState } from "react";
import CheckBox from "../../CheckBox/CheckBox";
import InputField from "../../InputField/InputField";

const ServiceName = () => {
  const [pool, setPool] = useState(false);
  const [response, setResponse] = useState(false);
  const [tools, setTools] = useState(false);
  const [local, setLocal] = useState(false);
  const [support, setSupport] = useState(false);

  return (
    <div>
      <form>
        <div className="border border-[#2F354233] rounded-[12px] p-3 md:p-5 bg-[#FAFAFA] mb-5">
          <div className="flex md:flex-nowrap flex-wrap md:gap-8 md:mb-5">
            <CheckBox
              name="Communication"
              id="pool"
              label=" Communication frequency with owners"
              checked={pool}
              onChange={(e) => setPool(e.target.checked)}
            />
            <CheckBox
              name="requests"
              id="response"
              label="Response time for repair requests"
              checked={response}
              onChange={(e) => setResponse(e.target.checked)}
            />
            <CheckBox
              name="Tech"
              id="tools"
              label="Tech tools used (e.g., Owner Portal, Software)"
              checked={tools}
              onChange={(e) => setTools(e.target.checked)}
            />
          </div>
          <div className="flex md:flex-nowrap flex-wrap md:gap-8">
            <CheckBox
              name="Local"
              id="local"
              label="Local presence (office in region or remote?)"
              checked={local}
              onChange={(e) => setLocal(e.target.checked)}
            />
            <CheckBox
              name="Support"
              id="support"
              label="Support hours / Emergency response availability"
              checked={support}
              onChange={(e) => setSupport(e.target.checked)}
            />
          </div>
        </div>
        <InputField
          label=" Commission"
          id="name"
          name="name"
          type="text"
          fieldName="w-full"
          placeholder="20%"
        />
      </form>
    </div>
  );
};

export default ServiceName;
