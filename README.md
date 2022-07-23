# 드림코딩 JavaScript 기초 강의 정리
[(YouTube) 드림코딩 JavaScript 기초 강의](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

<br><br>

## 5. function

1. function declaration
```js
function name(param1, param2) {
  body ...
  return;
  }
```
- ⭐️ one function === one thing
  - 하나의 함수는 한 가지의 일만 기능하도록 해야 한다.
- naming: doSomething, command, verb
  - 동사형의 형태로 이름을 지을 것
- e.g. createCarfAndPoint -> createCard, creatPoint
- function is object in JavaScript

2. parameters
```js
function changeName(obj) {
  obj.name = 'coder';
}
```
- primitive parameters: passed by value
    - 원시형은 메모리에 값이 그대로 저장되어 있기에 값이 그대로 전달
- object parameters; passed by reference
    - 객체는 참조가 전달

<br><br>

## 13. async & await

1. async
a clear style of using promise

&emsp;&emsp;&emsp;1-a. promise
```js
function fetchUser() {
  return new Promise((resolve, reject) => {
  // network request in progress in 10 seconds...

  // return 'taekwon';
  // Promise { <pending> }

  resolve('taekwon');
  // Promise { 'taekwon' }
  });
}
```
&emsp;&emsp;&emsp;1-b. async
async를 function 앞에 쓰면 자동으로 코드 블록이 promise로 변함

2. await

3. useful Promise APIs

```js
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
  fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);


function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
```

### 🔖 참고 자료
* [(MDN) async function
](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [(poiemaweb) 제너레이터와 async/await](https://poiemaweb.com/es6-generator)
