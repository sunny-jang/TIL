// 직접 문자열로 HTML 컨텐츠 하드코딩
// var html = // 백틱(`~~`)은 둘러싼 모든 텍스트를 문자열로 취급합니다~
// `
// <div id="app" data-from="literal">
//     <p>Hello, Node.js!</p>
//     <p>Welcome ^_^</p>
// </div>
// `;

var html =
require("fs") // Node.js 내장모듈 중 파일시스템 모듈 임포트
.readFileSync("./sample.html", { encoding: "UTF-8" }); // 파일읽기(동기)
// 원래는 비동기(.readFile)인데, 동기메소드를 별도로 제공하는 거예요!

require("http") // Node.js 내장모듈 중 웹서버 모듈 임포트
.createServer((req, res) => { // 서버 생성
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");
	res.end(html);
})
.listen(80, "localhost", () => { // 서버 시작
	console.log(">> SimpleWeb is running!");
});