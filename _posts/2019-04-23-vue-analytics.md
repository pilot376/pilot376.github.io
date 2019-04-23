---
layout: post
title: "vue-analytics"
tag: [vue-js]
---

당연한 이야기지만, Vue Router를 사용하여 작업한 후 GA 추적 코드를 index.html에 삽입했더니 쌓이는 PageView 통계가 모두 "/" 페이지이다.

이런저런 방법을 살펴보다가 vue-analytics 플러그인이 너무나 편해 보여서 적용하였다.

---

## 설치
~~~bash
npm install vue-analytics --save
~~~

---

## Page tracking

router/index.js 파일에 vue-analytics 코드를 추가한다.
~~~js
import Vue from 'vue';
import Router from 'vue-router';
import VueAnalytics from 'vue-analytics';

const router = new Router({
    routes: [
        {},
        {}
    ]
});

Vue.use(VueAnalytics, {
    id: 'UA-XXX-X',
    router
});
~~~

---

일단 페이지뷰만 집계만 할 예정이라 기본적인 기능만 사용하였다. 
더 많은 정보 및 사용법은 [https://www.npmjs.com/package/vue-analytics](https://www.npmjs.com/package/vue-analytics)에서 확인할 수 있다.