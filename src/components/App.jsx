import React from "react";
import "./styles.css";
import Form from "./Form";
import { formData } from "./FormData";

export default function App() {
  return (
    <div id="left-side">
      <div>
        <Form formData={formData} />
      </div>
      
    </div>
  );
}
