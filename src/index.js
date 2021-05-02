document.addEventListener("DOMContentLoaded", function() {
    showNoticePage();

    document.getElementById("loginButton").onclick = function (ev) {
        console.log("login clicked");
        showLoginModal();
    };
});

function showNoticePage() {
    findContentContainer().innerHTML =
        `<object type="text/html" data="notice.html"></object>`;
}

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

    loginButton.onclick = function () {
        alert("로그인 기능 구현이 필요합니다.");ㅓㅓㅓ
    }

    closeButton.onclick = function () {
        loginModal.addEventListener("animationend", _ => {
            loginModal.style.display = "none";
        }, false);
        loginModal.className = "loginFadeOut";
    }
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