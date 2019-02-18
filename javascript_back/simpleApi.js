// 직접 리터럴로 JSON 컨텐츠 하드코딩 (그냥 일반 객체)
// var data = {
//     "from": "literal",
//     "simpleList": [
//         { "test1": "테스트1" },
//         { "test2": "테스트2" },
//         { "test3": "테스트3" }
//     ]
// };

var data =
JSON.parse( // JSON 문자열 -> JS 객체 변환
    require("fs") // Node.js 내장모듈 중 파일시스템 모듈 임포트
    .readFileSync("./sample.json", { encoding: "UTF-8" }) // 파일읽기(동기)
);
// 원래는 비동기(.readFile)인데, 동기메소드를 별도로 제공하는 거예요!

data.test = "데이터 추가 테스트";

require("http") // Node.js 내장모듈 중 웹서버 모듈 임포트
.createServer((req, res) => { // 서버 생성
    res.statusCode = 200;
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(data)); // JS 객체 -> JSON 문자열 변환
})
.listen(80, "localhost", () => { // 서버 시작
	console.log(">> SimpleApi is running!");
});

(function() {
    var test = "test1";
    console.log(test);
}())

{
    let test = "test2";
    console.log(test);
}