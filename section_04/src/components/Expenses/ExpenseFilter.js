import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (e) => {
    const selectedYear = e.target.value;
    props.yearOption(selectedYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler} value={props.selectedYear}>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
