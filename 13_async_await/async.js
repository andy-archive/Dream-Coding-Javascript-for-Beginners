// 자바스크립트 13. 비동기의 꽃 JavaScript async 와 await 그리고 유용한 Promise APIs
// https://www.youtube.com/watch?v=aoQSOZfz3vQ

// --- 1. async ---
// clear style of using promise


// // 1-a. promise
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // network request in progress in 10 seconds...

//     // return 'taekwon';
//     // Promise { <pending> }

//     resolve('taekwon');
//     // Promise { 'taekwon' }
//   });
// }

// 1-b. async
// async를 function 앞에 쓰면 자동으로 코드 블록이 promise로 변함

async function fetchUser() {
  // network request in progress in 10 seconds...

  return 'taekwon';
  // Promise { 'taekwon' }
}


const user = fetchUser();
user.then(console.log);
console.log(user);


// --- 2. await ---

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// async function에서만 사용 가능
async function getApple() {
  await delay(500);
  return '🍎';
}

// 기존 getBanana function
// function getBanana() {
//     return delay(3000)
//     .then(()=> '🍌');
// }

// async getBanana function
async function getBanana() {
  await delay(500);
  return '🍌';
}

// async 활용 이전
// function pickFruits() {
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple} ${banana}`);
//   })
// }

// async 활용 이후 - but 문제점: 순차적 실행에 의한 비효율성
// async function pickFruits() {
//   const apple  = await getApple();
//   const banana = await getBanana();
//   return `${apple} + ${banana}`;
// }

// refactoring1 -  병렬적 실행에 의한 효율성 개선
async function pickFruits() {
  const applePromise  = getApple();
  const bananaPromise = getBanana();

  const apple  = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// --- 3. useful Promise APIs---
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

// homework
// 지난 시간
