import React, { useState, useEffect } from "react";
import Field from "./Field";
import Option from "./Option";
import Text from "./Text"; 

const Form = ({ formData }) => {
  // state to track the current page ID of the form
  const [page, setPage] = useState(0);

  // this state is for track the current form data that will be displayed
  const [currentPageData, setCurrentPageData] = useState(formData[page]);

  // track the values of the form fields
  const [values, setValues] = useState({});

  // this effect will run when the page changes
  useEffect(() => {
    setCurrentPageData(formData[page]);

    setValues((currentValues) => {

      const newValues = formData[page].fields.reduce((obj, field) => {
        obj[field._uid] = "";     
        return obj;
      }, {});

      return Object.assign({}, newValues, currentValues);
    });
  }, [page, formData]);

  // this will update the main list of form values
  const fieldChanged = (fieldId, value) => {
    // this will find the field in the value list and update it
    setValues((currentValues) => {
      currentValues[fieldId] = value;
      return currentValues;
    });

    // this forces a re-render in React
    setCurrentPageData((currentPageData) => {
      return Object.assign({}, currentPageData);
    });
  };

  const navigatePages = (direction) => () => {

    setPage(direction === "next" ? page + 1 : page - 1);
  };

  const nextPage = navigatePages("next");
  const prevPage = navigatePages("prev");

  const onSubmit = (e) => {
    e.preventDefault();
    // todo - send data somewhere
  };

  return (
    <div>
      <div className="split left">   

         <h2 id="header">{currentPageData.label}</h2>
        <div className="form">
    <form onSubmit={onSubmit} className="form-container">
      {currentPageData.fields.map((field,index) => field.component == "options" ?  

      <Option key={index} field={field} fieldChanged={fieldChanged} value={values[field._uid]} /> : 

      <Field key={index} field={field} fieldChanged={fieldChanged} value={values[field._uid]} /> )}

    <button onClick={prevPage}>Back</button>
    <button onClick={nextPage}>Next</button>

      <hr />
      <button onClick={() => console.log(values)}>Dump form data</button>
    </form>
    </div>
</div>

<div className="split right">
<Text field={currentPageData.field2}/>
</div> 
  </div>

  );
};

export default Form;
