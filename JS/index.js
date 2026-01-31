/**
 * npm install -g nodemon -> nodemon 글로벌하게 설치
 * 
 * 터미널에 nodemon index.js ㄱㄱ -> 서버 자동 재실행
 * 서버 닫기 -> Ctrl + C
 * 
 * 서버 수동 켜기 -> node index.js // 쓸 일은 없을듯
 */

const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080');
});

const path = require('path');
app.use('/CSS', express.static(path.join(__dirname, '..', 'CSS')));



app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '..', 'HTML', 'index.html'));
});

app.get('/Login', function(req, res){
    res.sendFile(path.join(__dirname, '..', 'HTML', 'Login.html'));
});



app.get('/faq', function(req, res){
    res.sendFile(path.join(__dirname, '..', 'HTML', 'faq.html'));
});