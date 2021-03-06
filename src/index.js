
function showNoticePage() {
    document.getElementById("contentContainer").innerHTML = '<object type="text/html" data="notice.html"></object>';
}

function showUnreadMailsPage() {
    document.getElementById("contentContainer").innerHTML = '<object type="text/html" data="unread_mails.html"></object>';
}

// 맨 처음 로딩시에는 공지사항 화면을 표시해야하는데, 해당 div는 처음의 html이 모두 로딩되었어야 조회 가능
document.addEventListener("DOMContentLoaded", function () {
    showNoticePage();
});


var showClassName = "show";
function toggleProfileImage() {
    document.getElementById("profileImage_content").classList.toggle(showClassName);
}
window.onclick = event => {
    if (!event.target.matches('#profileImage')) {
        var dropdowns = document.getElementsByClassName("dropdown_content");
        Array.from(dropdowns).forEach(dropdown => {
            dropdown.classList.remove(showClassName);
        });
    }
}