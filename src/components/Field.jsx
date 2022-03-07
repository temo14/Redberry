import React from "react";

const Field = ({ field, fieldChanged, value }) => {


  return (
    <div key={field._uid}>
         {field.component === "date" && <label>{field.label}</label>}
      <input
        id="regInput"
        placeholder={field.label}
        name={field._uid}
        value={value}
        onChange={(e) => {
          fieldChanged(field._uid, e.target.value);
        }}
      />
    </div>
  );
};

export default Field;
