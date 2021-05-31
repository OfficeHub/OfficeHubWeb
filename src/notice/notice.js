import {noticeTemplate} from './noticeTemplate.js'

document.addEventListener("DOMContentLoaded", () => {
	fetchNotices();
})

function fetchNotices() {
	const noticeurl = 'http://13.125.35.33:8080/notices?offset=0&size=100';
	fetch(noticeurl, {
		method:"get",
		headers: {
		"Content-Type": "application/json"
		}
	}).then((res) => {
		return res.json();
	}).then(response => {
		let noticesArray = response.response.notices;
		noticesArray.forEach( (item) => {
			document.querySelector("#noticeShow").innerHTML += noticeTemplate(item);
		})
	})
}