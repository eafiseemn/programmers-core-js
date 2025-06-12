/* -------------------------------------------------------------------------- */
/*                           Object Methods and This                          */
/* -------------------------------------------------------------------------- */

// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
const shopOrder = {
  date: '2023. 12. 06',
  tableIndex: 5,
  menu: [
    { name: '통 새우 돈까스', price: 13000, count: 2 },
    { name: '치즈 돈까스', price: 10000, count: 1 },
  ],
};

// menu 안에 들어있는 product price의 총합
// 1. 단순 합계
let totalPrice = shopOrder.menu[0].price * shopOrder.menu[0].count +
  shopOrder.menu[1].price * shopOrder.menu[1].count;

console.log( totalPrice );

// 2. forEach
totalPrice = 0;
shopOrder.menu.forEach((items) => {
  totalPrice += items.price * items.count
})
totalPrice = 0;
shopOrder.menu.forEach(items => totalPrice += items.price * items.count)

console.log( totalPrice );

// 3. reduce
totalPrice = 0;
totalPrice = shopOrder.menu.reduce((acc,cur) => acc + cur.price * cur.count, 0);

console.log( totalPrice );


shopOrder.sumPrice = () => {
  this.totalPrice = this.menu.forEach(item => totalPrice += item.price * item.count);  
}


// 메서드와 this 
// ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
// ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
//   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
//   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
//   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만, 
//   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.


// 메서드 단축 구문


// 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this

const navigationMenu = {
  name: '글로벌 내비게이션',
  items: [
    { id: 'link-g', text: 'Google', link: 'https://google.com' },
    { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
  ],
  getItem(index) {
    return this.items[index];
  },
  /*
  addItem: (newItem) => {
    this.items.push(newItem);
  },
  */
  addItem(newItem) {
    this.items.push(newItem);
  },
};

/* 
navigationMenu.addItem({
    id: 'link-l',
    text: 'lycos',
    link: "https://lycos.co.kr"
}) 
*/
// Error: Cannot read properties of undefined (reading 'push')
// arrow function 의 this = window이기 때문에 push 가 없음


navigationMenu.addItem({name: "야후!"}); // -> 가능
// JS는 obj에 push되는 item 형식을 강제하지 않기 때문에...
// typeScript에서는 이런 push를 막음