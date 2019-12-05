console.log('css')
let cssStyle = `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

ul, li, ol {
    list-style: none;
}

.skin {
    height: 100vh;
    background: rgb(0, 111, 226);
    border: 1px solid black;
}
.skin>.skin-color{
    height:60vh;
    background: rgb(0, 111, 226);
    position:relative;
}

.skin >.skin-color>.eye-left {
    width: 100px;
    height: 150px;
    position: absolute;
    left: 50%;
    border: 1px solid black;
    border-radius: 50%;
    margin-top: 20px;
    transform: translateX(-85px);
    background: white;
    z-index: 10;
}

.skin >.skin-color> .eye-left::after {
    content: '';
    display: block;
    border: 3px solid black;
    width: 10px;
    height: 10px;
    background: #fff;
    position: absolute;
    left: 60%;
    top: 60%;
    border-radius: 50%;
}

.skin >.skin-color> .eye-left::before {
    content: '';
    display: block;
    border: 3px solid black;
    width: 30px;
    height: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    background: black;
    border-radius: 50%;

}

.skin >.skin-color> .eye-right {
    width: 100px;
    height: 150px;
    position: absolute;
    left: 50%;
    border: 1px solid black;
    border-radius: 50%;
    margin-top: 20px;
    transform: translateX(15px);
    background: white;
    z-index: 10;
}

.skin >.skin-color> .eye-right::after {
    content: '';
    display: block;
    border: 3px solid black;
    width: 10px;
    height: 10px;
    background: #fff;
    position: absolute;
    right: 60%;
    top: 60%;
    border-radius: 50%;
}

.skin >.skin-color> .eye-right::before {
    content: '';
    display: block;
    border: 3px solid black;
    width: 30px;
    height: 40px;
    position: absolute;
    right: 50%;
    top: 50%;
    background: black;
    border-radius: 50%;

}

.skin >.skin-color> .nose {
    border-color: black transparent transparent;
    border-bottom: none;
    border: 1px solid black;
    width: 50px;
    height: 50px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
    background: red;
    border-radius: 50%;
}

.skin >.skin-color> .face {
    width: 600px;
    height: 450px;
    border: 1px solid black;
    left: 50%;
    transform: translateX(-280px);
    margin-top:40px;
    position: absolute;
    border-top-left-radius: 50% 48%;
    border-top-right-radius: 50% 48%;
    border-bottom-left-radius: 30% 50%;
    border-bottom-right-radius: 30% 50%;
    background: #fff;
}

.skin >.skin-color> .face > .center {
    width: 1px;
    height: 265px;
    border: 1px solid black;
    left: 50%;
    top: 20%;
    transform: translateX(-5px);
    position: relative;
}

.skin >.skin-color> .face> .beard-left1 {
    width: 150px;
    height: 1px;
    border: 1px solid black;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-220px) rotate(10deg);

}
.skin>.skin-color>.face>.beard-left2{
    width: 150px;
    height: 1px;
    border: 1px solid black;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-240px);
}
.skin>.skin-color>.face>.beard-left3{
    width: 150px;
    height: 1px;
    border: 1px solid black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-240px) rotate(-20deg);
}
.skin>.skin-color>.face>.beard-right1{
    width: 150px;
    height: 1px;
    border: 1px solid black;
    position: absolute;
    top: 30%;
    right: 50%;
    transform: translateX(220px) rotate(-10deg);
}
.skin>.skin-color>.face>.beard-right2{
    width: 150px;
    height: 1px;
    border: 1px solid black;
    position: absolute;
    top: 40%;
    right: 50%;
    transform: translateX(220px);
}
.skin>.skin-color>.face>.beard-right3{
    width: 150px;
    height: 1px;
    border: 1px solid black;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translateX(220px) rotate(20deg);
}
.skin>.skin-color>.face>.mouse{
    width: 325px;
    height: 135px;
    border-bottom: 3px solid black;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 120px;
    transform: translateX(-50%);
    /*background: rgb(249,37,45);*/
}

@media (max-width: 500px) {
    .skin >.skin-color>.eye-left {
        width: 50px;
        height: 80px;
        transform: translateX(-50px);

    }
    .skin >.skin-color> .eye-left::before {
        width: 15px;
        height: 30px;
        transform: translateX(-5px);
    }
    .skin >.skin-color> .eye-left::after {
        width: 5px;
        height: 5px;
    }
    .skin >.skin-color> .eye-right {
        width: 50px;
        height: 80px;
        border: 1px solid black;
        transform: translateX(10px);
    }

    .skin >.skin-color> .eye-right::after {
        width: 5px;
        height: 5px;
    }

    .skin >.skin-color> .eye-right::before {
        width: 15px;
        height: 30px;
        transform: translateX(5px);

    }
    .skin >.skin-color> .nose {
        width: 30px;
        height: 30px;
        top: 90px;

    }
    .skin >.skin-color> .face {
        width: 300px;
        height: 200px;
        transform: translateX(-140px);
        margin-top:40px;
    }
    .skin >.skin-color> .face > .center {
        height: 120px;
    }
    .skin >.skin-color> .face> .beard-left1 {
        width: 80px;
        transform: translateX(-120px) rotate(10deg);

    }
    .skin>.skin-color>.face>.beard-left2{
        width: 80px;
        transform: translateX(-120px);
    }
    .skin>.skin-color>.face>.beard-left3{
        width: 80px;
        transform: translateX(-120px) rotate(-20deg);
    }
    .skin>.skin-color>.face>.beard-right1{
        width: 80px;
        transform: translateX(120px) rotate(-10deg);
    }
    .skin>.skin-color>.face>.beard-right2{
        width: 80px;
        transform: translateX(120px);
    }
    .skin>.skin-color>.face>.beard-right3{
        width: 80px;
        height: 1px;
        border: 1px solid black;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translateX(120px) rotate(20deg);
    }
    .skin>.skin-color>.face>.mouse{
        width: 160px;
        height: 80px;
        border-bottom: 3px solid black;
        position: absolute;
        left: 50%;
        top: 50%;
        border-radius: 120px;
        transform: translate(-80px,-18px);
        /*background: rgb(249,37,45);*/
    }
}
`

export default cssStyle