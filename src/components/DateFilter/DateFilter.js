import React from "react";
import PropTypes from 'prop-types';
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
    <div className={classes.Container}>
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
          isClearable
        />
      </div>
    </div>
  );
};

filter.propTypes = {
  date: PropTypes.instanceOf(Date),
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  changed: PropTypes.func.isRequired,
  selectsStart: PropTypes.bool,
  selectsEnd: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholderText: PropTypes.string.isRequired,
}

export default filter;
