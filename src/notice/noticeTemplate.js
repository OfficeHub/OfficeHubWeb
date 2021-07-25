export function noticeTemplate(data) {
    return `
    <div class='notice-container'>
    <span class='check'>미확인</span>
    <ul class='lili'>
        <li class='title'> ${data.title}</li>
        <li class='date'> ${data.writtenDay}</li>
    </ul>
    </div>`
}
