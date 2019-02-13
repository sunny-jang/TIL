// HTML 컨텐츠 직접 문자열에 하드코딩 (샘플)
var html = `
<p>Hello, JS!</p>
<p>Welcome ^_^</p>
`;

// var html = 
// require("fs") // Node.js 내장모듈 중 파일시스템 모듈 임포트
// .readFileSync("../index.html", { encoding: "UTF-8" }); // 파일읽기(동기)
// 원래는 비동기(.readFile)이나, 동기메소드를 별도로 제공하는 거예요!

require("http") // Node.js 내장모듈 중 웹서버 모듈 임포트
.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");
	res.end(html);
})
.listen(80, "localhost", () => {
	console.log(">> SimpleServer is running!");
});