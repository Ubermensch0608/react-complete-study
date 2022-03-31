import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterExpensesHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (expenses) => expenses.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={selectedYear}
        yearOption={filterExpensesHandler}
      />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
