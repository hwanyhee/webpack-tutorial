//CommonJS스펙:모둘 가져오기.브라우저가 이해 못함.-그래서 웹팩이 필요함 WEBPACK을 통해서 브라우저가 모르는 언어를 컴파일 해줌
//var _ =require('lodash')
import _ from 'lodash';//es6방식의 모듈 가져오기
import '../style.css';
import '../hello.scss';
//named import하는 방법:{name}
import {circumference,area} from './js/circle'
//default import하는 방벚:이름을 임의로 바꿀수 있고 {}가 없다
import mycube from './js/cube'
//터밀널 창에서 npx webpack 하면 src에 index.js(엔트리포인트)에서 부터
//dist에 main.js로 하나의 출력물을 만듬 즉 부라우저가 이해할 수 있는 언어로 바꿈
function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  console.log('소스변경')
  return element;
}


console.log(area(5))
console.log(circumference(5))
console.log(mycube(10))

document.body.appendChild(component());