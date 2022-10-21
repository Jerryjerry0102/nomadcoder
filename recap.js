//#2.9 Recap

// string
"text";

// number
5 + 5;

// variable
// // 항상 const를 사용하고 필요한 경우에 let을 사용 var는 안돼
const a = 5;
let isNicoFat = true;
console.log(a);
console.log(isNicoFat);

isNicoFat = false;
console.log(isNicoFat);

// boolean: true, false
// null: "비어있음"
// undefined: 변수에 값을 부여하지 않은 상태
let hello;
console.log(hello);

// array
// // 안에 우리가 원하는 뭐든 넣을 수 있다.
const me = "sexy";
const days = [1, 2, "text", false, true, null, undefined, me];

const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy[2]);
toBuy[2] = "water";
console.log(toBuy[2]);
toBuy.push("chicken");
console.log(toBuy);

// object
const player = {
  name: "jerry",
  age: 25,
};
player.name = "tom";
console.log(player);
// // javascript는 이미 우리가 사용할 수 있는 object를 가지고 있다.
player.sexy = "soon";
console.log(player);

//function
function plus() {
  console.log(2 + 2);
}
plus();
// // function 안에서 미리 data를 넣어두는 것 보다
// // function 밖에서 data를 넣을 수 있게 하는 것이 훨씬 낫다.
// // function의 목적은 많은 것들을 같은 코드로 하기 위함이기 때문
function plus2(a, b) {
  console.log(a + b);
}
plus2(5, 10);
// // data를 넣을 때 순서는 중요하다 5는 a, 10은 b가 된다.
function minusFive(a) {
  console.log(a - 5);
}
minusFive(10);
// // 추가적으로 꼭 기억해야 할 건 a, b 등은
// // function의 body에서만 사용 가능하는 점!!{body}
// // function 밖에서는 접근할 수 없다.

// 마지막 예제
// 코드 챌린지
// a+b. a-b, a / b, a*b a**b
const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  multiply: function (a, b) {
    console.log(a * b);
  },
  squared: function (a, b) {
    console.log(a ** b);
  },
};
calculator.add(5, 2);
calculator.minus(5, 2);
calculator.divide(5, 2);
calculator.multiply(5, 2);
calculator.squared(5, 2);
