const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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
    description: 'Thu nhap thang 08',
    amount: 6000000
  },
  {
    id: createUUID(),
    description: 'Chi tieu ngay 27/07',
    amount: -150000
  },
  {
    id: createUUID(),
    description: 'Chi tieu ngay 28/07',
    amount: -150000
  },
];



const keydata = 'listdata'

function setLocalStore(data) {
  let now = new Date()
  const item = {
      data: data,
      expiry: now.getTime() + 10 * 3600 * 1000,
  }
  localStorage.setItem(keydata, JSON.stringify(item))
}
function getLocalStore() {
  const itemStr = localStorage.getItem(keydata)
  if (!itemStr) {
      return null
  }
  const item = JSON.parse(itemStr)
  const now = new Date()
  if (now.getTime() > item.expiry) {
      localStorage.removeItem(keydata)
      return null
  }
  return item.data
}

listData = getLocalStore()?getLocalStore(): listData

function createUUID() {
  let dt = new Date().getTime();
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}


let listIncomes ;//= listData.filter(item=>item.amount > 0)
let listExpenses;// = listData.filter(item =>item.amount<0)

let totalAmountIncome ;//= calTotalAmount(listIncomes)
let totalAmountExpense ;//= calTotalAmount(listExpenses)
let totalAmount;// = calTotalAmount(listData);

function calTotalAmount (listData) {
  let total = 0;
  listData.map((item) => {
    total += item.amount;
  })
  return total;
}

function formatAmount  (n) { 
  let dau = ' + ';  
  if (n < 0) {
    dau = ' - '
    n *=-1
  } 
    return dau + (new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n))
}

function formatPercent (total, amount) {
  return (Math.round(amount/total*100)>0?Math.round(amount/total*100):Math.round(amount/total*-100)) + '%'
}

const income = $('.budget__income--value')
const expenses = $('.budget__expenses--value')
const budgetValue = $('.budget__value')

const budgetExpenses = $('.budget__expenses--percentage')
function renderDom () {
  setLocalStore(listData);
  listIncomes = listData.filter(item=>item.amount > 0)
  listExpenses = listData.filter(item =>item.amount<0)
  totalAmountIncome = calTotalAmount(listIncomes)
  totalAmountExpense = calTotalAmount(listExpenses)
  totalAmount = calTotalAmount(listData);

  income.innerHTML = formatAmount(totalAmountIncome)
  expenses.innerHTML = formatAmount(totalAmountExpense)
  budgetValue.innerHTML = formatAmount(totalAmount);
  budgetExpenses.innerHTML = formatPercent(totalAmount,totalAmountExpense)

  $('.income__list').innerHTML = listIncomes.map((e) => renderHtml (e)).join('');
  $('.expenses__list').innerHTML = listExpenses.map((e) => renderHtml (e)).join('');
}


function renderHtml (item) {
  let percent ='';
  if (item.amount<0){
    percent = `<div class="item__percentage">`+ formatPercent(totalAmount,item.amount) + `</div>`;
  }
  return `<div class="item clearfix">
    <div class="item__description">${item.description}</div>
      <div class="right clearfix">
        <div class="item__value">${formatAmount(item.amount)}</div>
        ${percent}
        <div class="item__delete">
            <button class="item__delete--btn" data-id="${item.id}">
            <i class="ion-ios-close-outline"></i></button>
        </div>
      </div>
    </div>`
}

renderDom();

const addType = $('.add__type')
const addBtn = $('.add__btn')
const addDescription = $('.add__description')
const addValue = $('.add__value')
// const itemDelete = $$('.item__delete--btn')

addType.onchange = function (e) {
  let k = this.value;
  $$('.add__container > *').forEach(item =>{
    
    if(k==1)
      item.classList.remove('red-focus')
    else
      item.classList.add('red-focus')
  })
  if(k==1) $('.add__btn').classList.remove('red')
  else $('.add__btn').classList.add('red')
}

addBtn.onclick = function () {
  const dau = addType.value;
  let des = addDescription.value;
  let value = addValue.value;
if(des=='') {
  console.log('can nhap thong tin')
  addDescription.classList.add('red-focus')
  addDescription.focus()

  return
}
if(value=='') {
  console.log('can nhap gai tri')
  addValue.classList.add('red-focus')
  addValue.focus()
  return
}

  obj = {
    id: createUUID(),
    description: des,
    amount: addAmount(value,dau)
  }
  listData.push(obj);
  renderDom();
  resetForm();

}

function resetForm () {
  addDescription.value ='';
  addValue.value =0 ;
}

function addAmount (amount,dau){
 return dau * amount;
}

$('.container11').onclick = (ele)=>{
  const deleteBtn = ele.target.closest('.item__delete--btn')
  if(deleteBtn){
    let id = deleteBtn.getAttribute('data-id');
    listData = listData.filter(item => item.id !== id)
    renderDom();
  }
  
}
