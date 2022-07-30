export function formatAmount  (n) { 
  let dau = ' + ';  
  if (n < 0) {
    dau = ' - '
    n *=-1
  } 
    return dau + (new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n))
}

export function formatPercent (total, amount) {
  return (Math.round(amount/total*100)>0?Math.round(amount/total*100):Math.round(amount/total*-100)) + '%'
}

export function calTotalAmount (listData) {
  let total = 0;
  listData.map((item) => {
    total += item.amount;
  })
  return total;
}