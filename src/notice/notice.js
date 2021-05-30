import {noticeTemplate} from './noticeTemplate.js'
import {data} from './d.js'

document.addEventListener("DOMContentLoaded", () => {
    // console.log(data);
    data.forEach( (index,item) => {
        // console.log(index,item);
        document.querySelector("#noticeShow").innerHTML += noticeTemplate(data[item]); 
        // console.log(noticeTemplate(data[item]))
    })
    
})
