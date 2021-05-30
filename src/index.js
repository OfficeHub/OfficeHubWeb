import { requestLogin as login, registerUser, requestLogin }
from "./repository/user_data_repository.js";

document.getElementById("loginButton").onclick = function() {
    showLoginModal();
};

document.getElementById("registerButton").onclick = function() {
    onRegisterClick();
};

function showUnreadMailsPage() {
    findContentContainer().innerHTML =
        '<object type="text/html" data="unread_mails.html"></object>';
}

function showUserProfilePage() {
    findContentContainer().innerHTML =
        '<object id="userProfileHtml" type="text/html" data="user_profile.html"></object>';
}

function showLoginModal() {
    let loginModal = document.getElementById("loginModal");
    let closeButton = document.getElementById("cancelLoginButton");
    let loginButton = document.getElementById("requestLoginButton");

    loginModal.removeEventListener("animationend", () => {}, false);
    loginModal.style.display = "block";
    loginModal.addEventListener("animationend", _ => {
        loginModal.style.display = "block";
    }, false);
    loginModal.className = "loginFadeIn";

    loginButton.onclick = async function() {
        const emailInput = document.getElementById("emailInput").value;
        const passwordInput = document.getElementById("passwordInput").value;
        try {
            document.getElementById("loginModalProgress").style.visibility = "visible";
            await requestLogin(emailInput, passwordInput);
            console.log("login done");
        } catch (e) {
            document.getElementById("loginModalProgress").style.visibility = "hidden";
            console.log(e);
            alert("로그인에 실패했습니다. 관리자에게 문의하세요.")
        } finally {
            document.getElementById("loginModalProgress").style.visibility = "hidden";
        }
    }

    closeButton.onclick = function() {
        loginModal.addEventListener("animationend", _ => {
            loginModal.style.display = "none";
        }, false);
        loginModal.className = "loginFadeOut";
    }
}

function onRegisterClick() {
    const emailInput = document.getElementById("emailInput").value;
    const passwordInput = document.getElementById("passwordInput").value;

    const isValid = validateEmailAndPassword(emailInput, passwordInput);

    if (isValid) {
        try {
            registerUser(emailInput.innerHTML.value);
        } catch (error) {
            alert("일시적인 오류가 발생했습니다.");
            console.log(error);
        }
    }
}

function validateEmailAndPassword(email, password) {

    if (password.length < 8) {
        alert("비밀번호 길이가 너무 짧습니다. 8글자 이상으로 설정해주세요.")
        return false;
    }

    return true;
}

function findContentContainer() {
    return document.getElementById("contentContainer");
}

function toggleProfileImage() {
    document.getElementById("profileImage_content").classList.toggle(showClassName);
}

window.onclick = event => {
    if (!event.target.matches('#profileImage')) {
        const dropdowns = document.getElementsByClassName("dropdown_content");
        Array.from(dropdowns).forEach(dropdown => {
            dropdown.classList.remove("show");
        });
    }
}