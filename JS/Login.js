// 로그인 말고 글 만들고 삭제하고 뭐 그런 코드 있을 수 있음. 보고 로그인만 남기고 다 지우셈

const supabaseUrl = 'SECRET_REMOVED';
const supabaseKey = 'SCRET_REMOVED';
const client = supabase.createClient(supabaseUrl, supabaseKey);

async function signInWithEmail() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    
    const { data, error } = await client.auth.signInWithPassword({
        email: email,
        password: password,
    });
    
    if (error) {
        alert("로그인 실패: " + error.message);
    } else {
        // location.reload();
        window.history.back();
    }
}

async function signOut() {
    await client.auth.signOut();
    checkLogin();
}

async function checkLogin() {
    const { data: { session } } = await client.auth.getSession();
    
    
    if (session) { // 로그인 했을 때
        console.log("Login");
        return true;
    } else { // 로그인 안 했을 때
        console.log("Not Login");
        return false;
    }
}

async function refreshHistory() {
    let { data: record, error } = await client.from("page").select("*");
    
    if (error) {
        console.error("데이터 로드 실패: ", error.message);
        return;
    }
    
    let tag = "";
    record.forEach(item => {
        tag += `
                <div style="margin:20px 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                    <h2>${item.title}</h2>
                    <div>${item.body}</div>
                    <p>
                        <input type="button" value="delete" onclick="deleteRecord(${item.id})"/>
                    </p>
                </div>`;
    });
    document.querySelector("#history").innerHTML = tag;
}

async function recordHandler() {
    const title = prompt("title?");
    const body = prompt("body?");
    
    if (!title || !body) return;
    
    const { error } = await client
        .from("page")
        .insert([{ title, body }]);
    
    if (error) alert("저장 실패: " + error.message);
    refreshHistory();
}

async function deleteRecord(id) {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    
    const { error } = await client
        .from("page")
        .delete()
        .eq("id", id);
    
    if (error) alert("삭제 실패: " + error.message);
    refreshHistory();
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#login").addEventListener("click", signInWithEmail);
    document.querySelector("#create_btn").addEventListener("click", recordHandler);
    
    checkLogin();
    refreshHistory();
});