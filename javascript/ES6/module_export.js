const pi =  Math.PI;

function square(x) {
  return x * x;
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

// 변수, 함수 클래스를 하나의 객체로 구성하여 공개
export {pi, square, Person}


//모듈에서 하나만을 export 할 때는 default 키워드를 사용할 수 있다.
//다만 default를 사용하는 경우, var, let, const는 사용할 수 없ㅈ다.

/*
function(x) {
	return x * x;
}

export default

>> 아래와 같이 축약가능
export default function(x) {
	return x * x;
}
*/