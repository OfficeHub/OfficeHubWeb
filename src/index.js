document.addEventListener("DOMContentLoaded", function() {
    showNoticePage();
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

function findContentContainer() {
    return document.getElementById("contentContainer");
}


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