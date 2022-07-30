import Item from "./Item";

function BudgetIncomes({data}) {
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">
        {data.map((item)=><Item key={item.id} item={item}/>)}
      </div>
    </div>
  );
}

export default BudgetIncomes;