import Cards from "./Cards";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItems.css";

function ExpenseItems(props) {
  return (
    <>
      <Cards className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          title={props.title}
          price={props.price}
          LocationOfExpenditure={props.LocationOfExpenditure}
        />
      </Cards>
    </>
  );
}
export default ExpenseItems;
