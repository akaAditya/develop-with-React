import "./ExpenseItems.css";

function ExpenseItems(props) {

  return (
    <>
      <div className="expense-item">
        <h1>{props.date.toISOString()}</h1>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">
            <h2>${props.price}</h2>
          </div>
        </div>
      </div>
      <div className="expense-item__price">
        <h2>{props.LocationOfExpenditure}</h2>
      </div>
    </>
  );
}
export default ExpenseItems;
