import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import classes from "./Input.module.css";

const input = props => {
  let inputElement = null;
  let validationError = null;
  const inputClasses = [classes.Input];

  if (props.touched && props.invalid && props.shouldValidate) {
    inputClasses.push(classes.Invalid);
    validationError = <p>Bitte einen gültigen Wert eingeben!</p>;
  }

  const optional = !props.shouldValidate.required ? (
    <span className={classes.Optional}> - Optional</span>
  ) : null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      );
      break;
    case "date":
      inputElement = (
        <DatePicker
          dateFormat="DD.MM.YYYY"
          /* placeholderText="Test" */
          {...props.elementConfig}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={classes.InputContainer}>
      <label className={classes.Label}>{props.label}{optional}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;
