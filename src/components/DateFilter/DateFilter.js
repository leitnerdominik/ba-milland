import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import classes from './DateFilter.module.css';

const filter = (props) => {
  const { 
    date,
    startDate,
    endDate,
    changed,
    selectsStart,
    selectsEnd,
    placeholder,
    description
  } = props;

  return (
    <div className={classes.FilterContainer}>
      <span>{description}</span>
      <div>
        <DatePicker
          className={classes.Datepicker}
          dateFormat="DD.MM.YYYY"
          selected={date}
          selectsStart={selectsStart}
          selectsEnd={selectsEnd}
          startDate={startDate}
          endDate={endDate}
          onSelect={changed}
          onChange={changed}
          placeholderText={placeholder}
          popperPlacement="bottom"
          popperModifiers={{
            flip: {
                behavior: ['bottom'] // don't allow it to flip to be above
            },
            preventOverflow: {
                enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
            },
            hide: {
                enabled: false // turn off since needs preventOverflow to be enabled
            }
        }}
        />
      </div>
    </div>
  );
};

export default filter;