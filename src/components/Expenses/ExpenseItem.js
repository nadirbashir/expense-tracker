import "./ExpenseItem.css";
import { Card } from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";

export const ExpenseItem = (props) => {
  // state is seperated as per component instance basis
  console.log("ExpenseItem evaluated by react");
  // let title = props.title;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
