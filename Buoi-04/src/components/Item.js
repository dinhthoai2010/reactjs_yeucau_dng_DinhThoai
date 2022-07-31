import { formatAmount, formatPercent } from "../helpers";
import { useDispatch } from 'react-redux'

import { removeItemAmount } from '../store/actions';
function Item({ item, total }) {
  const { id, description, amount } = item


  const dispatch = useDispatch()

  function handleDeleteItem() {
    dispatch(removeItemAmount(id))
  }

  return (
    <div className="item clearfix">
      <div className="item__description">{description}</div>
      <div className="right clearfix">
        <div className="item__value">{formatAmount(amount)}</div>
        {total && <div className="item__percentage">{formatPercent(total, amount)}</div>}
        <div className="item__delete">
          <button onClick={handleDeleteItem} className="item__delete--btn"><i className="ion-ios-close-outline" /></button>
        </div>
      </div>
    </div>
  );
}

export default Item;