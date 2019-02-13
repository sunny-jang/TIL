// 직접 배열로 JSON 컨텐츠 하드코딩 -> 그냥 일반 JS 배열이예요!
var data = [
    { "test1": "테스트1" },
    { "test2": "테스트2" },
    { "test3": "테스트3" }
];

require("http") // Node.js 내장모듈 중 웹서버 모듈 임포트
.createServer((req, res) => { // 서버 생성
    res.statusCode = 200;
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(data)); // JSON 문자열로 변환 -> 리턴값 그냥 일반 문자열이예요!
})
.listen(80, "localhost", () => { // 서버 시작
	console.log(">> SimpleApi is running!");
});