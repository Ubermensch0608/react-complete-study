import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterExpensesHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expenses) => expenses.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={selectedYear}
        yearOption={filterExpensesHandler}
      />

      {filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
