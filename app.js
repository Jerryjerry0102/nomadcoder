// #2.1 Basic Data Types
// 자바스크립트에는 type이라는 게 있고 그걸 알아서 이해한다
// **Integer, string**

// #2.2 Valiable
// 값을 저장하거나 유지하는 역할

// #2.3 const and let
// **const**
// constant(상수), 값이 바뀔 수 없다.
// **let**
// 값을 업데이트할 수 있다.
// **→ const를 기본적으로 쓰고 variable를 업데이트 하고 싶다면 let을 쓴다.**
// → var은 no

// #2.4 Booleans
// 0은 꺼져있다. → **false**
// 1은 켜져있다. → **true**
// **null** = 아무 것도 없다.
// false는 값이 존재하는 것이지만 null은 아무 값이 없다는 의미
// 비어있다기 보다는, 아무것도 없는 상태로 채워진 것
// → 값은 있는데 “아무것도 아닌 것” “비어있는 것”
// **null은 절대 자연적으로 발생하지 않는다.**
// null은 우리가 variable 안에 어떤 것이 없다는 것을 확실히 하기 위해 쓰는 것
// **undefined**
// variable을 만들고 여기에 값을 주지 않고 콘솔을 찍으면 undefined가 뜬다
// 변수는 존재하는데 값이 주어지지 않은 것

// ## #2.5 Arrays
// 데이터를 어떻게 하면 가능한 최선의 방법으로 정리할 수 있을까
// const array = [];
// array는 기본적으로 살아있는 것이다.
// 한 가지는 이렇게 array 안에서 항목을 받아오는 것이고,
// 또 원한다면 array에 하나 더 추가할 수도 있다.
// array의 목적은 하나의 variable 안에 데이터의 list를 가지는 것이다.
// array는 가장 기초적이고, 필수적인 데이터 구조

// #2.6 Objects
// property를 가진 데이터를 저장하도록 해준다.
// 이건 array에는 부적절하다. 왜냐면 이게 뭘 뜻하는지 알 수 없기 때문이다
// “jerry”, 10, true라고 하면 이 자체로 무슨 의미인지를 알 수가 없다.
// 개체(entity)에 대한 특성(property)

const player = {
  name: "jerry",
  points: 10,
  fat: true,
};
console.log(player.name);
console.log(player["name"]);
player.fat = false;
player.lastName = "tom";

// #2.7 Functions part One
// function은 내가 계속 반복해서 사용할 수 있는 코드 조각
// function은 어떤 코드를 캡슐화해서, 실행을 여러 번 할 수 있도록 해준다.
// argument는, function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법이다.

// #2.8 Functions part Two
// NaN : Not a Number 숫자가 아님.
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("jerry", 25);
sayHello("tom", 23);
sayHello("odung", 21);

function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("jerry", 25);
sayHello("tom", 23);
sayHello("odung", 21);

const player = {
  name: "jerry",
  sayHello: function (otherPersonName) {
    console.log("hello " + otherPersonName + " nice to meet you!");
  },
};
console.log(player.name);
player.sayHello("tom");
player.sayHello("jerry");
