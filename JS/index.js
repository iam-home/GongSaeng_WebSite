/**
 * npm install -g nodemon -> nodemon 글로벌하게 설치
 * 
 * 터미널에 nodemon index.js ㄱㄱ -> 서버 자동 재실행
 * 서버 닫기 -> Ctrl + C
 * 
 * 서버 수동 켜기 -> node index.js // 쓸 일은 없을듯
 * 
 * cd "C:\School_Programming\_WebSite\WebSite\JS"
 */

// 나중에 재사용 해야되는 코드가 생기거나 뭐 많아지거나 하면 index.js는 그쪽으로 넘겨주고 여기는 server.js로 바꾸셈
const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.listen(5000, function(){
    console.log('listening on 5000');
});

const path = require('path');
app.use('/CSS', express.static(path.join(__dirname, '..', 'CSS')));



app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '..', 'HTML', 'index.html'));
});

app.get('/Login', function(req, res){
    res.sendFile(path.join(__dirname, '..', 'HTML', 'Login.html'));
});

app.get('/Account', function(req, res){ // 삭제 예정
    res.sendFile(path.join(__dirname, '..', 'HTML', 'Account.html'));
});

app.get('/ToDo', function(req, res){
    res.sendFile(path.join(__dirname, '..', 'HTML', '01_ToDo.html'));
});

app.get('/TimeLine', function(req, res){
    res.sendFile(path.join(__dirname, '..', 'HTML', '02_TImeLine.html'));
});

app.get('/Suggest', function(req, res){
    res.sendFile(path.join(__dirname, '..', 'HTML', '03_Suggest.html'));
});

app.get('/Data', function(req, res){
    res.sendFile(path.join(__dirname, '..', 'HTML', '04_Data.html'));
});

app.get('/WRITE', function(req, res){
    res.sendFile(path.join(__dirname, '..', 'HTML', 'WRITE.html'));
});

app.get('/WhenForgotPassword', function(req, res){ // 지울거같은데
    res.sendFile(path.join(__dirname, '..', 'HTML', 'WhenForgotPassword.html'));
});



app.get('/t', function(req, res){
    res.sendFile(path.join(__dirname, '..', 'HTML', 'test.html'));
});


app.get('/FAQ', function(req, res){
    res.sendFile(path.join(__dirname, '..', 'HTML', 'faq.html'));
});