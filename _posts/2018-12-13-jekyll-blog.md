---
layout: post
title: "Jekyll 블로그 만들기"
tag: [jekyll]
---

## Jekyll 설치하기
Ruby 패키지 관리자 Gem을 사용하여 Jekyll와 bundler를 설치한다.
~~~bash
$ sudo gem install jekyll bundler
~~~

---

## Jekyll 로컬 블로그 만들기
new 명령어를 사용하여 블로그를 생성한다.
~~~bash
$ jekyll new my-blog
~~~

---

## Jekyll 로컬 서버 구동
아래 명령어를 사용해서 Jekyll 블로그를 로컬에서 빌드하고 실행한다.
~~~bash
$ bundle exec jekyll serve
~~~
서버가 구동되면 [http://localhost:4000](http://localhost:4000) 에서 블로그를 확인할 수 있다.

---

## Jekyll 로컬 서버 주요 옵션
~~~bash
--livereload  #수정 시 새로고침 (_config.yml 반영되지 않음)
--draft  #초안 표시
~~~

---

## 배포
git commit, push를 통해 자신의 github page repository에 배포 한다.  
[id].github.io에서 확인할 수 있다.

---

## 참고
* [https://pages.github.com](https://pages.github.com)