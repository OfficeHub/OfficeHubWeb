import { noticeTemplate } from './noticeTemplate.js'

document.addEventListener("DOMContentLoaded", () => {
	fetchNotices()
})

function fetchNotices() {
	let noticeOffset = 0;
	let noticeSize = 10;
	const noticeurl = 'http://13.125.35.33:8080/notices?offset=' + noticeOffset + '&size=' + noticeSize;
	const noticeShow = document.querySelector("#noticeShow");

	fetch(noticeurl, {
		method: "get",
		headers: {
			"Content-Type": "application/json"
		},
	}).then((res) => {
		return res.json();
	}).then(response => {
		const noticesArray = response.response.notices;
		noticesArray.forEach((item) => {
			noticeShow.innerHTML += noticeTemplate(item);
		})
	}).then(() => {
		const noticeContainers = document.querySelectorAll(".notice-container");
		for (let i = 0; i < noticeContainers.length; i++) {
			noticeContainers[i].addEventListener("click", async () => {
				await handleNoticeClick();
				noticeContainers[i].style.backgroundColor = '#ccc';
				const checkNotice = noticeContainers[i].querySelector(".check");
				checkNotice.innerText = "확인";
			});
		}
	})
}