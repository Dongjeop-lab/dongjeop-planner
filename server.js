const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 7777;

// MIME 타입 매핑
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

// 정적 파일 서빙 함수
function serveStaticFile(res, filePath) {
    const extname = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('<h1>404 - 파일을 찾을 수 없습니다</h1>');
            } else {
                res.writeHead(500);
                res.end(`서버 오류: ${error.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}

// HTTP 서버 생성
const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    
    // 기본 경로를 index.html로 설정
    if (filePath === './') {
        filePath = './index.html';
    }

    // CORS 헤더 추가 (필요시)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    console.log(`${new Date().toISOString()} - ${req.method} ${req.url} - ${filePath}`);
    
    serveStaticFile(res, filePath);
});

// 서버 시작
server.listen(PORT, () => {
    console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중입니다`);
    console.log(`📁 정적 파일 서빙 중: ${__dirname}`);
    console.log(`⏰ 시작 시간: ${new Date().toLocaleString('ko-KR')}`);
});

// 에러 처리
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`❌ 포트 ${PORT}가 이미 사용 중입니다. 다른 포트를 사용하거나 해당 포트를 사용하는 프로세스를 종료하세요.`);
    } else {
        console.error('서버 오류:', err);
    }
});

// 우아한 종료 처리
process.on('SIGTERM', () => {
    console.log('SIGTERM 신호를 받았습니다. 서버를 종료합니다...');
    server.close(() => {
        console.log('서버가 종료되었습니다.');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('\nSIGINT 신호를 받았습니다. 서버를 종료합니다...');
    server.close(() => {
        console.log('서버가 종료되었습니다.');
        process.exit(0);
    });
});
