import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItems.css";

function ExpenseItems(props) {
  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          title={props.title}
          price={props.price}
          LocationOfExpenditure={props.LocationOfExpenditure}
        />
      </div>
    </>
  );
}
export default ExpenseItems;
