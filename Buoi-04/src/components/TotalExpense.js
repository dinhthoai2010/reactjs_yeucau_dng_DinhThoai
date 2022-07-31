import { formatAmount, formatPercent } from "../helpers";

function TotalExpense({value,total}) {
  return (
    <div className="budget__expenses clearfix">
      <div className="budget__expenses--text">Expenses</div>
      <div className="right clearfix">
        <div className="budget__expenses--value">{formatAmount(value)}</div>
        <div className="budget__expenses--percentage">{formatPercent(total,value)}</div>
      </div>
    </div>
  );
}

export default TotalExpense;