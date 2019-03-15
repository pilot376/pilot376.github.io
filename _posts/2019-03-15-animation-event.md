---
layout: post
title: "CSS 애니메이션 시작 종료 시점 이벤트"
tag: [css, javascript]
---

CSS 에니메이션 구동 시 자바스크립트에서 시작 종료 시점을 알 수 있다.

**html**
~~~html
<div class="ani"></div>
~~~

**css**
~~~css
div {
    width: 100px;
    height: 100px;
    background: red;
    position: relative;
    animation: mymove 2s linear forwards;
    animation-delay: 1s;
}

@keyframes mymove {
    from {
        top: 0px;
    }
    to {
        top: 100px;
    }
}
~~~

**javascript**
~~~js
var ani = document.querySelector(".ani");

ani.addEventListener("animationstart", function(e) {
    console.log("시작");
}, false);

ani.addEventListener("animationend", function(e) {
    console.log("종료");
}, false);
~~~

[[jsfiddle demo](https://jsfiddle.net/pilot376/kz45sv6w/)]