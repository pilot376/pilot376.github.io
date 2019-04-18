---
layout: post
title: "vue local server IP로 접근하기"
tag: [javascript, vue-js, webpack]
---

아래의 명령어로 vue 프로젝트를 생성 & 실행 시 localhost:8080 URL에서 화면을 확인할 수 있다.

~~~bash
vue init webpack project-name
cd project-name
npm run dev
~~~

하지만 localhost에서는 페이지에 접근이 가능하지만, IP로 접근 시에는 페이지가 열리지 않는다. (예: 12.34.56.78:8080)  
webpack-dev-server에 IP에 대한 제한 설정을 풀어주면 IP로도 페이지 접근이 가능해진다.

package.json 파일 내 scripts.dev 부분에 "--host 0.0.0.0 --disableHostCheck true" 구문을 추가한다.

**as-is**
~~~json
"scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"
}
~~~

**to-be**
~~~json
"scripts": {
    "dev": "webpack-dev-server --host 0.0.0.0 --disableHostCheck true --inline --progress --config build/webpack.dev.conf.js"
}
~~~
