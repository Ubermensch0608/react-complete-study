import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filterExpensesHandler = (selectedYear) => {
    setSelectedYear(Number(selectedYear));
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={selectedYear}
        yearOption={filterExpensesHandler}
      />

      {items.map((item) => {
        return (
          selectedYear === item.date.getFullYear() && (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          )
        );
      })}
    </Card>
  );
};

export default Expenses;
