import TotalAmount from "./TotalAmount";
import TotalExpense from "./TotalExpense";
import TotalIncome from "./TotalIncome";

import { useSelector } from 'react-redux'
import { calTotalAmount } from "../helpers";


function BudgetHeader() {

  const listDataIncome = useSelector(start=>start.listDataIncome)

  const listIncomes = listDataIncome.filter(item=>item.amount > 0)
  const listExpenses = listDataIncome.filter(item =>item.amount<0)
  const income = calTotalAmount(listIncomes)
  const expense = calTotalAmount(listExpenses)
  const total  = income + expense

  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in <span className="budget__title--month">%Month%</span>:
        </div>
        <TotalAmount value ={total} />
        <TotalIncome value = {income}/>
        <TotalExpense value = {expense} total={income}/>
      </div>
    </div>
  );
}

export default BudgetHeader;