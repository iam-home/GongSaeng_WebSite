import { CONFIG } from '../config.js'
import { ADMIN } from '../config.js'

const { supabaseUrl, supabaseKey } = CONFIG;
const client = supabase.createClient(supabaseUrl, supabaseKey);

const message = ["안녕하세요", "감사합니다", "반갑습니다!", "반짝반짝 작은별"];
// let fucked = true;

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
    const adminEmails = ADMIN.email;
    const isAdmin = session && adminEmails === session.user.email;

    if (isAdmin) document.querySelector("#admin").style.display = "block";
}
