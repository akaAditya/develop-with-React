import "./ExpenseItems.css";

function ExpenseItems() {
  const expenseDate = new Date(2023, 7, 21);
  const expenseTitle = "Car Insurance";
  const expenseAmount = "$" + 399;
  const LocationOfExpenditure = expenseTitle + " - " + expenseAmount;

  return (
    <>
      <div className="expense-item">
        <h1>{expenseDate.toISOString()}</h1>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">
            <h2>{expenseAmount}</h2>
          </div>
        </div>
      </div>
      <div className="expense-item__price">
        <h2>{LocationOfExpenditure}</h2>
      </div>
    </>
  );
}
export default ExpenseItems;
