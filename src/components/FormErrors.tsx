import React from "react";

// This component handles form errors
// It accepts (field & field errors)
export const FormErrors: React.FC = props => {
  // const { forField, errors } = props;

  // let filteredErrors = [];

  // Generating errors for each field later
  // we can render errors above the field 
  // if (errors[forField]) {
  //   filteredErrors = errors[forField].map(err => err);
  // }

  // if (filteredErrors.length < 1) {
  //   return null;
  // }

  return (
    <ul className="ui list">
      {/* {filteredErrors.map((error, i) => (
        <li className="item" key={i}>{`${error}`}</li>
      ))} */}
    </ul>
  );
};