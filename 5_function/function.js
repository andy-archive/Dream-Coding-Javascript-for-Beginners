// 자바스크립트 5. Arrow Function은 무엇인가? 함수의 선언과 표현
// https://www.youtube.com/watch?v=e_lU39U-5bQ&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=5

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. 함수의 선언

// function name(param1, param2) {
//     body ...
//     return;
//     }

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. 매개변수
// 원시형 매개변수: 값에 의한 전달
// 객체형 매개변수: 참조에 의한 전달

function changeName(obj) {
    obj.name = 'coder';
}
const taekwon = { name: 'taekwon' };
changeName(taekwon);
console.log(taekwon);
