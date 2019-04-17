---
layout: post
title: "Nginx Sub Domain 추가하기"
tag: [nginx]
---

## CNAME 추가
Nginx 설정 전 CNAME 추가가 필요하다.  
도메인 관리 페이지에서 CNAME을 추가한다.

카페24 기준 "도메인 관리 > DNS 관리 > 별칭(CNAME) 관리" 메뉴에서 추가/편집할 수 있다.  
카페24는 기본으로 "*.domain.com"으로 잡혀있어서 별로 추가가 필요없었다.

---

## Nginx 설정 변경
CNAME을 추가한 후 Nginx 설정을 변경한다.

아래 명령어를 입력하여 설정 파일을 연다.
~~~bash
$ sudo vi /etc/nginx/sites-enabled/default
~~~

기존 server {} 블럭 하단에 서브 도메인에 대한 새로운 server {} 설정 블럭을 추가한다.
~~~bash
# 기존 server 설정
server {
    root /var/www/html;
    index index.html index.htm index.nginx-debian.html;
    server_name domain.com;

    location / {
        try_files $uri $uri/ =404;
    }
}

# 서브 도메인 server 추가
server {
    root /var/www/html/sub/path;
    index index.html index.htm index.nginx-debian.html;
    server_name sub.domain.com;

    location / {
        try_files $uri $uri/ =404;
    }
}
~~~

---

## SSL 추가
[ubuntu nginx ssl 적용](https://pilot376.github.io/2019/03/22/ubuntu-nginx-ssl/) 페이지를 참조하여 SSL을 추가한다.  
아래와 같이 메인 도메인과 서브 도메인에 대한 인증서를 모두 발급받는다.
~~~bash
$ sudo certbot --nginx -d domain.com -d sub.domain.com
~~~
