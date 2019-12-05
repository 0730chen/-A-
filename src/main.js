// import './main.css'
const $ = require('jquery')
import './css.js'
import cssStyle from "./css.js";

let num = 0
let html = $('.title')
let style = document.getElementById("css");
console.log(html, style);
let string = ''

function draw() {
    setTimeout(() => {
        if (cssStyle[num] === "\n") {
            string += "<br>"
        } else if (cssStyle[num] === " ") {
            string += "&nbsp;"
        } else {
            string += cssStyle[num]
        }
        html.html(string)
        style.innerText = cssStyle.substring(0, num)
        // style.innerHTML = string
        console.log(string);
        if (num < cssStyle.length - 1) {
            num += 1
            draw()
        }
        window.scrollTo(0, 99999)
    })
}
    draw()
//     // setTimeout(()=>{
//     //     if(cssStyle[num] ==="\n"){
//     //         string +="<br>"
//     //     }else if(cssStyle[num]===" "){
//     //         string +="&nbsp;"
//     //     }else{
//     //         string += cssStyle[num]
//     //     }
//     //     html.innerHTML = string
//     //     css.innerHTML = string.substring(0,num)
//     //     window.scrollTo(0,99999)
//     //     html.scrollTop(0,100000)
//     //     if(num<string.length-1){
//     //         num+=1
//     //         draw()
//     //     }
//     // },0)
// }
//
// // draw()
// // import cssStyle from "./css";
// // const play = {
// //     id:undefined,
// //     time:100,
// //     ui:{
// //         demo:document.querySelector(".title"),
// //         demo2:document.querySelector(".skin")
// //     },
// //     n:1,
// // }