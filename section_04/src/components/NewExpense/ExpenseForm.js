import React, { useState } from "react";
import "./ExpenseForm";

const ExpenseForm = () => {
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");

  const [formInputs, setFormInputs] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    const titleInputValue = e.target.value;
    setFormInputs((prevState) => ({
      ...prevState,
      title: titleInputValue,
    }));
  };

  const amountChangeHandler = (e) => {
    const amountInputValue = e.target.value;
    setFormInputs((prevState) => ({
      ...prevState,
      amount: amountInputValue,
    }));
  };

  const dateChangeHandler = (e) => {
    const dateInputValue = e.target.value;
    setFormInputs((prevState) => ({
      ...prevState,
      date: dateInputValue,
    }));
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2019-01-01"
            step="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"></button>
      </div>
    </form>
  );
};

export default ExpenseForm;
