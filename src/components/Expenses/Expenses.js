import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";
import './Expenses.css'
import { useState } from "react";
export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  } 
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let expensesContent = <p>No Expense Found in {filteredYear} </p>
  // Cleanest way outputting conditional content
  if(filteredExpenses.length){
    expensesContent = filteredExpenses.map(expense => <ExpenseItem key = {expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date} />)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />

      {expensesContent}   
      {/* {filteredExpenses.length === 0 && <p>No Expense Found in {filteredYear}</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map(expense => <ExpenseItem key = {expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date} />)} */}
      
      {/* {filteredExpenses.length === 0 ? <p>No Expense Found in {filteredYear}</p> : filteredExpenses.map(expense => <ExpenseItem key = {expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date} />)} */}
      
    </Card>
  );
};
