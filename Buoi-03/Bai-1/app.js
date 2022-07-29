// Elements
const eleListIncomes = document.getElementById('list-incomes');
const eleListExpenses = document.getElementById('list-expenses');

// Data
let listData = [
  {
    id: createUUID(),
    description: 'Chi tieu ngay 26/07',
    amount: -100000
  },
  {
    id: createUUID(),
    description: 'Thu nhap thang 06',
    amount: 3000000
  },
  {
    id: createUUID(),
    description: 'Thu nhap thang 07',
    amount: 2000000
  },
  {
    id: createUUID(),
    description: 'Chi tieu ngay 27/07',
    amount: -150000
  },
];

const listIncomes = listData.filter(dataItem => dataItem.amount > 0);
const listExpenses = listData.filter(dataItem => dataItem.amount < 0);
const totalAmountIncome = calTotalAmount(listIncomes);
const totalAmountExpense = calTotalAmount(listExpenses);
const totalAmount = calTotalAmount(listData);

renderBudgetList();

// render component
function renderBudgetList() {
  eleListIncomes.innerHTML = listIncomes.map(item => renderBudgetItem(item, totalAmount)).join('');
  eleListExpenses.innerHTML = listExpenses.map(item => renderBudgetItem(item, totalAmount)).join('');
}

function renderBudgetItem(data, total) {
  const { id, amount, description } = data;
  const percent = amount < 0 ? `<div class="item__percentage">${formatPercentAmount(amount, total)}</div>` : '';
  return /* html */`
  <div class="item clearfix">
    <div class="item__description">${description}</div>
    <div class="right clearfix">
      <div class="item__value">${formatStringAmount(amount)}</div>
      ${percent}
      <div class="item__delete">
        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
      </div>
    </div>
  </div>
  `;
}

// Helpers
function createUUID() {
  let dt = new Date().getTime();
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

function formatStringAmount(amount) {
  let sign = '+';
  let amountFormatted = amount;

  if (amount < 0) {
    sign = '-';
    amountFormatted = -1 * amount;
  }

  amountFormatted = new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(amountFormatted);

  return `${sign} ${amountFormatted}`;
}

function calTotalAmount(listData) {
  let total = 0;

  for (let index = 0; index < listData.length; index++) {
    const data = listData[index];
    const amount = data.amount;

    total = total + amount;
  }

  return total;
}

function formatPercentAmount(amount, total) {
  if (!total) {
    return '0%';
  }

  let percent = Math.round((amount / total) * 100)

  if (percent < 0) {
    percent = percent * (-1);
  }

  return percent + '%';
}

