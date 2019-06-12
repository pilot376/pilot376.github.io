---
layout: post
title: "ubuntu nginx ssl 적용"
tag: [ubuntu, nginx, ssl]
---

## nginx server 설치
~~~bash
sudo apt-get install nginx
~~~

---

## certbot 설치

apt-get에 certbot 저장소를 추가
~~~bash
$ sudo add-apt-repository ppa:certbot/certbot
~~~

패키치 목록을 업데이트하고 certbot 설치
~~~bash
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install python-certbot-nginx
~~~

---

## Nginx 세팅
nginx 설정 파일 오픈
~~~bash
$ sudo vi /etc/nginx/sites-enabled/default
~~~

서버 블록 내 server_name을 설정하고자 하는 도메인으로 변경
~~~bash
server {
    listen      80;
    listen [::]:80;
    
    server_name example.com;
}
~~~

---

## 저장하고 서버 재기동
~~~bash
$ sudo nginx -t
$ sudo service nginx reload
~~~

---

## SSL 인증 획득하기
~~~bash
$ sudo certbot --nginx -d example.com -d www.example.com      # 여러 개
$ sudo certbot --nginx -d example.com                         # 한 개
~~~

---

## 인증서 자동갱신 설정 확인

인증서의 기간은 90일이고, 자동 갱신됨.
아래 구문을 통해 잘 동작하는지 테스트할 수 있음
~~~bash
$ sudo certbot renew --dry-run
~~~

---

## SSL 적용 확인 및 평가

SSL이 적용이 잘 되었는지 평가

* [https://www.ssllabs.com/ssltest/](https://www.ssllabs.com/ssltest/)

---

## 참고

* [https://twpower.github.io/44-set-free-https-by-using-letsencrypt](https://twpower.github.io/44-set-free-https-by-using-letsencrypt)