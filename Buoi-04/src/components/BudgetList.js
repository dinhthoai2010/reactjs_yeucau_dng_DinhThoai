import BudgetExpenses from "./BudgetExpenses";
import BudgetIncomes from "./BudgetIncomes";
import { useSelector } from 'react-redux'
import { calTotalAmount } from "../helpers";
function BudgetList() {

  
  const listDataIncome = useSelector(start=>start.listDataIncome)

  const listIncomes = listDataIncome.filter(item=>item.amount > 0)
  const listExpenses = listDataIncome.filter(item =>item.amount<0)
  const total = calTotalAmount(listIncomes)

  return (
    <div className="container clearfix">
      <BudgetIncomes data={listIncomes} />
      <BudgetExpenses data={listExpenses} total={total}/>
    </div>
  );
}

export default BudgetList;