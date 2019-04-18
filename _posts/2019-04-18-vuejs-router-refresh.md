---
layout: post
title: "Vue.js Router 현재 페이지 갱신하기"
tag: [vue-js]
---

Vue.js 라우터에서 페이지 이동 시 아래와 같이 push를 사용한다.
~~~js
this.$router.push({name: 'Page', params: { key: 'aaa' }});
~~~

하지만, 같은 페이지에서 params 값만 갱신하면서 Router를 이동하려고 하면 작동하지 않는다.
~~~js
// PageA에서 이동 시
this.$router.push({name: 'PageB', params: { key: 'aaa' }}); // 작동

// PageB에서 이동 시
this.$router.push({name: 'PageB', params: { key: 'bbb' }}); // 미작동
~~~

이 현상은 <router-view> 태그에 key 값을 추가하여 해결할 수 있다.
~~~xml
<router-view :key="$route.fullPath"/>
~~~