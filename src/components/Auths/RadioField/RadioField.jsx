import React from "react";

const RadioField = ({ name, value, label, id, checked, onChange }) => {
  return (
    <div className="flex gap-2.5">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="text-[13px] font-medium">{label}</label>
    </div>
  );
};

export default RadioField;


