import {fetchUserData} from "./repository/user_data_repository.js";

document.addEventListener("DOMContentLoaded", function() {
    fetchUserData().then((user) => {
        document.getElementById("userName").innerText = user.name
        document.getElementById("departmentName").innerText = user.department
        document.getElementById("userDescription").innerText = user.description
        document.getElementById("phoneNumber").innerText = user.phoneNumber
    });
});

function showEditProfilePopup() {
    alert("프로필 수정 화면 표시 필요");
}

function toggleLogin() {
    alert("로그인 상태일경우 로그아웃 팝업을 표시합니다.");
}