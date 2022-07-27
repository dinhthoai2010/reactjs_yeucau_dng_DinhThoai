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
      description: 'Chi tieu ngay 27/07',
      amount: -150000
    },
  ];

  function createUUID() {
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }


// const totle = $('.budget__value'); 
// const income = $('.budget__income--value'); 
// const expenses = $('.budget__expenses--value'); 
// const avg = $('.budget__expenses--percentage'); 

// const list_incomes = $('.list-incomes');
// const expenses__list = $('.expenses__list');
var inc  = [];
var exp = [];
var total=0, totalexp=0, budget = 0;


function returnList () {
    console.log(listData)
    listData.forEach(ele => {
        if(ele.amount>0) {
            inc.push(ele)
            total+= ele.amount;
        }
        else {
            exp.push(ele)
            totalexp += ele.amount
        }
    });
    return [inc,exp,total,totalexp]
}

const formatvnd = (n) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n) 
function renderDom () {
    console.log(total, totalexp)
    budget = total+ totalexp;
    $('.budget__value').innerHTML = formatvnd(budget)
    $('.budget__income--value').innerHTML = formatvnd(total)
    $('.budget__expenses--value').innerHTML = formatvnd(totalexp)

    const htmlint = inc.map((e) =>toHtml(e).join('')
    )

    $('.income__list').innerHTML = htmlint;


    const htmlexp = exp.map((e) =>toHtml(e).join('')
    )

    $('.expenses__list').innerHTML = htmlexp;

}
function toHtml (e) {
    return `<div class="item clearfix">
    <div class="item__description">${e.description}</div>
    <div class="right clearfix">
    <div class="item__value">${formatvnd(e.amount)}</div>
    <div class="item__percentage">${Math.round(e.amount/total*100)}%</div>
    <div class="item__delete">
        <button class="item__delete--btn">
        <i class="ion-ios-close-outline"></i></button>
    </div>
    </div>
</div>`
}

setTimeout(() => {
    returnList();
    renderDom();
}, 200);