import { formatAmount, formatPercent} from "../helpers";

function Item({item,total}) {
  return (
    <div className="item clearfix">
      <div className="item__description">{item.description}</div>
      <div className="right clearfix">
        <div className="item__value">{formatAmount(item.amount) }</div>
        {total && <div className="item__percentage">{formatPercent(total,item.amount)}</div>}
        <div className="item__delete">
          <button className="item__delete--btn"><i className="ion-ios-close-outline" /></button>
        </div>
      </div>
    </div>
  );
}

export default Item;