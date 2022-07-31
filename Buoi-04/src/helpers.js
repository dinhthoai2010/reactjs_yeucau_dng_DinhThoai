export function formatAmount(n) {
  let dau = ' + ';
  if (n < 0) {
    dau = ' - '
    n *= -1
  }
  return dau + (new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n))
}

export function formatPercent(total, amount) {
  return (Math.round(amount / total * 100) > 0 ? Math.round(amount / total * 100) : Math.round(amount / total * -100)) + '%'
}

export function calTotalAmount(listData) {
  return listData.reduce((total, num) => total + Math.round(num.amount), 0)
}


export function setLocalStore(data) {
  localStorage.setItem('listData', JSON.stringify(data))
}

export function getLocalStore() {
  const itemStr = localStorage.getItem('listData')
  if (!itemStr) {
      return false
  }
  return JSON.parse(itemStr)
}