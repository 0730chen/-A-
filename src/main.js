// import './main.css'
// const $ = require('jquery')
// import './css.js'
// import cssStyle from "./css.js";
//
// let num = 0
// let html = $('.title')
// let style = document.getElementById("css");
// console.log(html, style);
// let string = ''
// function draw() {
//     setTimeout(() => {
//         if (cssStyle[num] === "\n") {
//             string += "<br>"
//         } else if (cssStyle[num] === " ") {
//             string += "&nbsp;"
//         } else {
//             string += cssStyle[num]
//         }
//         html.html(string)
//         style.innerText = cssStyle.substring(0, num)
//         // style.innerHTML = string
//         console.log(string);
//         if (num < cssStyle.length - 1) {
//             num += 1
//             draw()
//         }
//         window.scrollTo(0, 99999)
//     })
// }
//     draw()

import cssStyle from "./css";
const player = {
    id:1,
    time:100,
    ui:{
        demo:document.querySelector(".title"),
        demo2:document.querySelector("#css")
    },
    events:{
        '#btnPause':'pause',
        "#btnPlay":'play',
        "#btnSlow":'slow',
        "#btnNormal":'normal',
        "#btnFast":'fast'
    },
    n:1,
    init:()=>{
        console.log(cssStyle.substr(0,player.n));
        player.ui.demo.innerHTML = cssStyle.substr(0,player.n)
        player.ui.demo2.innerHTML = cssStyle.substr(0,player.n)
        player.bindEvents()
        player.play()
    },
    bindEvents:()=>{
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run:()=>{
        player.n +=1
        // console.log(player.n)
        if(player.n>cssStyle.length){
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = cssStyle.substr(0,player.n)
        player.ui.demo2.innerHTML = cssStyle.substr(0,player.n)
        // player.ui.demo.scrollTop = player.ui.demo.scrollHeight
        window.scrollTo(0, 99999)
    },
    play:()=>{
        // console.log(player.n)
        player.id=setInterval(player.run,player.time)
    },
    pause:()=>{
        window.clearInterval(player.id)
    },
    slow:()=>{
        player.pause()
        player.time = 300
        player.play()

    },
    normal:()=>{
        player.pause()
        player.time=100
        player.play()

    },
    fast:()=>{
        player.pause()
        player.time = 0
        player.play()

    }
}
player.init()