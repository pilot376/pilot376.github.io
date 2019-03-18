---
layout: post
title: "jekyll sitemap 만들기"
tag: [jekyll]
---

## robots.txt 만들기
root 경로에 robots.txt 파일을 만든다.
~~~bash
User-agent: *
Allow: /

Sitemap: http://www.example.com/sitemap.xml
~~~

참고 : [https://support.google.com/webmasters/answer/6062596?hl=ko](https://support.google.com/webmasters/answer/6062596?hl=ko)

---

## sitemap.xml 만들기
root 폴더 아래에 sitemap.xml 파일을 만든다.
~~~xml
---
layout: null
---

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  {-% for post in site.posts %-}
    <url>
      <loc>{{ site.url }}{{ post.url }}</loc>

      {-% if post.lastmod == null %-}
        <lastmod>{{ post.date | date_to_xmlschema }}</lastmod>
      {-% else %-}
        <lastmod>{{ post.lastmod | date_to_xmlschema }}</lastmod>
      {-% endif %-}

      {-% if post.sitemap.changefreq == null %-}
        <changefreq>weekly</changefreq>
      {-% else %-}
        <changefreq>{{ post.sitemap.changefreq }}</changefreq>
      {-% endif %-}

      {-% if post.sitemap.priority == null %-}
          <priority>0.5</priority>
      {-% else %-}
        <priority>{{ post.sitemap.priority }}</priority>
      {-% endif %-}

    </url>
  {-% endfor %-}
</urlset>
~~~

사이트맵 생성(배포) 후 Google Search Console에 사이트맵을 등록하면 검색 엔진에 더욱 잘 노출될 수 있다.

{% include escape.html %}