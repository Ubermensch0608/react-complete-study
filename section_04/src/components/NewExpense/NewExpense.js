import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const openExpenseFormHandler = () => {
    setIsOpened((isOpened) => !isOpened);
  };

  return (
    <div className="new-expense">
      {!isOpened && (
        <button onClick={openExpenseFormHandler}>Add New Expense</button>
      )}
      {isOpened && (
        <ExpenseForm
          onAddExpense={props.onAddExpense}
          onChangeOpen={openExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
