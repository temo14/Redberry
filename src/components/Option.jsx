import React, { Fragment } from "react";

const Options = ({ field, fieldChanged, value }) => {
  return (
    <div>
      <h3>{field.label}</h3>
      {field.options.map((option, index) => {
        return (<div>
            <label htmlFor={option.value}>
              <input
                type="radio"
                id={option.value}
                name={field._uid}
                value={option.value}
                checked={value === option.value}
                onChange={(e) => {
                  fieldChanged(field._uid, e.target.value);
                }}
              />
              {option.label}
            </label>
            <br />
            </div>
        );
      })}
    </div>
  );
};

export default Options;
