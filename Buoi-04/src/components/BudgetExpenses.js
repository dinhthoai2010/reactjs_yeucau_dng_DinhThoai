import Item from "./Item";

function BudgetExpenses({data,total}) {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">
      {data.map((item)=><Item key={item.id} item={item} total = {total} />)}
      </div>
    </div>
  );
}

export default BudgetExpenses;