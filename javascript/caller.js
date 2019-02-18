// 확장성과 방어로직을 제외한 순수 순회함수. 이걸로도 아래 긴 코드랑 똑같이 실행됩니다!
// 아래코드 이해하기 어려우면 이것만 보세요. 긴 코드의 예외처리는 지금 몰라도 괜찮아요.
var SimpleCaller = {
    "execute" : function(obj) {
        for(var key in obj) {
            console.group("========== " + key + " ==========");
            obj[key]();
            console.groupEnd();
        }
    }
}

// 배열 혹은 객체를 받아 순회하며, 존재하는 모든 메소드를 실행하는 모듈 (순서보장 안 함)
// 레거시 JS 기준으로 작성 되었습니다. 나중에 ES6으로 리팩토링 해봐요 ^_^
var Caller = (function() {
    var execute = function(obj) {
        if(typeof obj !== "object" || null === obj) { // 객체여부 체크 (방어로직)
            console.warn(">> Caller.execute의 파라미터는 객체(배열포함)만 허용합니다.");
            return;
        }

        for(var key in obj) {
            if(!obj.hasOwnProperty(key)) { // 상속된 속성/메소드 패스 (방어로직)
                continue;
            }
            if(typeof obj[key] !== 'function') { // 값의 함수여부 체크 (방어로직)
                console.warn(">> 속성 '" + key + " : " + obj[key] + "'는 함수가 아닙니다.");
                continue;
            }

            console.group("========== " + key + " ==========");
            try {
                obj[key]();
            } catch(e) { // 오류가 나면, 해당 메소드만 에러 출력하고 다음 계속 실행
                console.error(key + " > " + e.name + " : " + e.message);
                console.error(e.stack);
            }
            console.groupEnd();
        }
    }

	return {
		"execute" : execute
	}
}());