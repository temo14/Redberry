import React from "react";

const Text = ({field}) =>{
return(
    <div>
        <h3 id="header" >{field.textHeader}</h3>
        <p >{field.text}</p>
    </div>
);
}

export default Text;