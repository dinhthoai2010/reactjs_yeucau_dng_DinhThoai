import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItemAmount } from '../store/actions';


function BudgetForm() {
  const [isIncome, setIsIncome] = useState('inc');

  const description = useRef();
  const amount = useRef();


  const dispatch = useDispatch();
  const handleChangeSelect = (e) => {
    setIsIncome(e.target.value)
  }
  const handleClickAdd = () => {
    if (checkForm()) {
      let amount1 = isIncome === 'inc' ? amount.current.value : (amount.current.value * -1)
      const data = {
        description: description.current.value,
        amount: amount1
      }
      dispatch(addItemAmount(data))
      resetForm();
    }
  }

  const resetForm = () => {
    description.current.value = '';
    amount.current.value = '';
    description.current.focus();
  }

  const checkForm = () => {

    console.log(description.current.value)
    if (description.current.value === '') {
      alert('Bạn cần nhập nội dung ');
      description.current.focus();

      return false;
    }

    if (amount.current.value <= 0) {
      alert('Bạn cần số tiền ');
      amount.current.focus();
      return false;
    }
    return true
  }

  return (
    <>
      <div className="add">
        <div className="add__container">
          <select className={`add__type ${isIncome === 'exp' ? 'red-focus' : ''}`} onChange={handleChangeSelect}>
            <option value="inc">+</option>
            <option value="exp">-</option>
          </select>
          <input name="description" type="text" ref={description} className={`add__description ${isIncome === 'exp' ? 'red-focus' : ''}`} placeholder="Add description" />
          <input name="value" ref={amount} type="number" className={`add__value ${isIncome === 'exp' ? 'red-focus' : ''}`} placeholder="Value" />
          <button className="add__btn" onClick={handleClickAdd}><i className={`ion-ios-checkmark-outline ${isIncome === 'exp' ? 'red' : ''}`} /></button>
        </div>
      </div>
    </>
  );
}

export default BudgetForm;