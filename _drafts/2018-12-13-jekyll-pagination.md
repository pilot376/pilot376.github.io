---
layout: post
title: "Jekyll 페이징 추가하기"
tag: [jekyll]
---

## jekyll-pagination 설치
~~~bash
gem install jekyll-pagination
~~~

---

## _config.yml 파일 업데이트
_config.yml 파일에 페이징 관련 정보를 추가한다.
~~~ruby
paginate: 10                  # 페이징 처리 개수
paginate_path: "/page:num/"   # URL 규칙
~~~

---

## Gemfile 파일 업데이트

Gemfile 파일에 jekyll-paginate 플러그인 정보를 추가한다.  
버전 정보는 github 페이지를 참조한다.  
[https://pages.github.com/versions.json](https://pages.github.com/versions.json)
~~~ruby
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
  gem "jekyll-paginate", "~> 1.1.0"  # 추가
end
~~~

---

## bundle install & update
~~~bash
$ bundle install 
$ bundle update
~~~

---

## index.html 추가
구동 시 index.html 파일이 필요하다. root 위치에 index.html을 생성한다.  
index.md 파일은 필요 없으므로 삭제하고, index.md가 쓰던 home 템플릿 역시 필요 없으므로 삭제한다.  
다만, home 템플릿에 있던 내용은 필요하므로 index.html로 옮긴다.  
(minima 기본 테마 기준)

---

## 페이징 코드 수정 & 추가
포스트 템플릿 반복문을 아래와 같이 변경한다.
~~~ruby
for post in site.posts       # as-is
for post in paginator.posts  # to-be
~~~

하단에 페이징 버튼 코드를 추가한다.
~~~html
<!-- Pagination links -->
<div class="pagination">
  {-% if paginator.previous_page %-}
    <a href="{{ paginator.previous_page_path }}" class="previous">Previous</a>
  {-% else %-}
    <span class="previous">Previous</span>
  {-% endif %-}
  <span class="page_number ">Page: {{ paginator.page }} of {{ paginator.total_pages }}</span>
  {-% if paginator.next_page %-}
    <a href="{{ paginator.next_page_path }}" class="next">Next</a>
  {-% else %-}
    <span class="next ">Next</span>
  {-% endif %-}
</div>
~~~

---

## 참조
* [https://jekyllrb-ko.github.io/docs/pagination/](ttps://jekyllrb-ko.github.io/docs/pagination/)
* [https://lky88.github.io/jekyll-pagination/](https://lky88.github.io/jekyll-pagination/)
* [http://migom.tistory.com/18](http://migom.tistory.com/18)
* [https://pages.github.com/versions.json](https://pages.github.com/versions.json)

{% include escape.html %}
