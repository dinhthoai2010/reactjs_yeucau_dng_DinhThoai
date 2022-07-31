import { formatAmount } from "../helpers";

function TotalAmount({value}) {
  return (
    <div className="budget__value">{formatAmount(value)}</div>
  );
}

export default TotalAmount;