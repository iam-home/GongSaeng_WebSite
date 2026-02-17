공생 웹사이트 입니다.
외부에는 동아리 소개 정도만 하고

동아리원은
1. 동아리 일정
2. 활동 기록
3. 익명 건의 사항
4. 자료실
기능을 사용할 수 있습니다.


혹시나 이 코드를 볼 미래의 나 또는 후배들은 수고하십쇼.
html이든 js든 웹사이트든 supabase든 뭔 db 등등 다 처음 하는 거라서 아마 코드가 더러울 겁니다.





C : create // 생성
R : read // 읽기
U : update // 수정
D : delete // 삭제

R 무조건 필수

글 쓰려면 C U D

DB
0. page / C R U D
1. ToDo / R
2. TimeLine / R
3. Suggest / C R U D

ToDo & TimeLine -> 글은 관리자만. 읽는 건 전부
1. 관리자가 편하게 올릴 수 있게 하냐 -> 관리자 구분해야됨
or
2. 내가 직접 db에 올리냐 -> 관리자가 글 삭제만 할 수 있게 or Supabase 계정 있는 사람만 관리자 (관리자 구분안함)
