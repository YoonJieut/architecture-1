const http = require('http');

const contentType = {
  "Content-Type" : "text/html; charset=utf-8"
}

// 서버 생성
const server = http.createServer((req, res)=>{
  if (req.method === 'GET' && req.url ==="/"){
    res.writeHead(200, contentType);
    res.end("넘모 피곤하공~~");
  }else {
    res.writeHead(404, contentType);
    res.end('<h1>요청 메세지를 찾을 수 없습니다 404 에러 응답</h1>')
  }
});

server.listen(8080, ()=>{
  console.log('서버 가동중~');
});