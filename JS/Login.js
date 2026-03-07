const supabaseUrl = 'SECRET_REMOVED';
const supabaseKey = 'SCRET_REMOVED';
const client = supabase.createClient(supabaseUrl, supabaseKey);

const message = ["안녕하세요", "감사합니다", "반갑습니다!", "반짝반짝 작은별"];
// fucked = true

// let 변수 = 0; // 함수에 매개변수 넣고 쓰면 됨.

// async function signInWithEmail() {
//     const ID = document.querySelector("#ID").value;
//     const email = `${ID}@gmail.com`; // 한 사람당 계정 하나 할라면 위에서 유저네임 받고, 여기서 뒤에 @gmail.com 붙여서 밑에서 처리하셈
//     const password = document.querySelector("#password").value;
    
//     const { data, error } = await client.auth.signInWithPassword({
//         email: email,
//         password: password,
//     });
    
//     if (error) {
//         alert("로그인 실패: " + error.message);
//     } else {
//         randomStart()
//     }
// }

async function signOut() {
    await client.auth.signOut();
    checkLogin();
}

async function checkLogin() {
    const { data: { session } } = await client.auth.getSession();
    
    if (session) { // 로그인 했을 때
        // console.log("Login"); // 이거 반복해서 출력됨. 그래서 없애버림ㅋ
        return true; // isLogin
    } else { // 로그인 안 했을 때
        // console.log("Not Login");
        return false;
    }
}

    async function LoginPage() {
      const isLogin = await checkLogin();
      
      if (isLogin) {
        const { error } = await client.auth.signOut();
        const logoutBtn = document.querySelector("#auth-btn");
        if (logoutBtn) logoutBtn.addEventListener("click", signOut);
      }
      
    }

document.addEventListener("DOMContentLoaded", async () => {
    const loginBtn = document.querySelector("#login");
    if (loginBtn) loginBtn.addEventListener("click", signInWithEmail);

    checkLogin();
});

function getRandomMessage(bool, message) {
    if (bool){
      const randomIndex = Math.floor(Math.random() * message.length);
      return message[randomIndex];
    }
}

function randomStart() {
    const selectedMessage = getRandomMessage(true, message);
    alert(selectedMessage);
    location.href = '../index.html';
}

client.auth.onAuthStateChange((event, session) => {
    const currenPath = window.location.pathname;
    const publicPages = ['/', '/HTML/faq.html'];

  if (event === 'SIGNED_IN') {
    console.log('Login:', session.user.email);
  }
  else if (event === 'SIGNED_OUT' && !publicPages.includes(currenPath)) {
    console.log('Logout');
    window.location.replace("../index.html");
    alert("이 페이지는 로그인이 필요합니다!");
  }
});

async function isadmin() {
    const { data: { session } } = await client.auth.getSession();
    const adminEmails = ["SCRET_REMOVED"];
    const isAdmin = session && adminEmails.includes(session.user.email);
    
    if (isAdmin) document.querySelector("#admin").style.display = "block";
    }
