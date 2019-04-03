---
layout: post
title: "canvas를 이용하여 base64 이미지 만들기"
tag: [html, canvas, base64]
---

## Drawing an image to the canvas

~~~html
<img id="source" src="/assets/img/icon.png">
<canvas id="canvas"></canvas>
~~~

~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = document.getElementById('source');

ctx.drawImage(image, 0, 0);
~~~

### 소스 결과 

#### 원본 이미지 (image 태그)
<img id="source" src="/assets/img/icon.png">

#### canvas 이미지
<canvas id="canvas" width="40" height="40"></canvas>

---

## HTMLCanvasElement.toDataURL()
canvas에 그린 이미지를 toDataURL 메서드를 활용하여 base64 문자열로 받을 수 있다.

~~~js
console.log(canvas.toDataURL());
~~~

console.log 결과
>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFDElEQVRYR9WYfcifYxTHP0tKKymRpkWWRKRMViylbV6alpKx5KVJNAnLS9NiQ6KxjEQk8pL31NKWsUmJlYWSRRKRaJFaSmopfZ6u6+k8Z9f9u+/f8yhz/vrd931d53eu8/I933PNYvpyNLAUOBk4FjgROKio+xv4GvgJ+ALYCvw8nb+aNeamw4CrgXOBE8bc+w3wHvA8sHfo3qEGzi6GXQf4eybyJ/B0MdTfI2WIgecDdwNH9Ckb8/tvwL3AtlH7RhloPq0BrhqhYE8Jm+H7PeSZ+Xl4SQPT4agROl4AHgTM2/2ky8BDgEeARY09KnodeAPYPdBrFtJy4NJQSHHr+8Bq4K+sr2Wgnnu8wziT/CHgh4GG5WVW++2lyPI3jbwxe7Jl4NpGWPcB9wGvjTDMkM4p338pIe9afhlwF3BwWmC474/vsoHimqGNIiR4sk/Se5UvK1h4BmBaRDFcuwoGvg14yCgLSqSEriiGWtyckGigCw1h3KDSaxrGmfiGypANEVPC1FB/NvLZ5Ekdov4JrIwG6vIrkgLhJYZVr60HLhliVWPNm2V/9Ka6poQVeKmk1KSBwsCOdBLx6abwJxr3FLCwwzgruhZPbn1xy0fA9SnkD5d0qes8wGJgT/XgLcCqoMUFF6Zq9ZTZc2LfYyVncvsyVcxpD2kBRdGTFmMVHfRuyuMngU0aKKxsBwTXKq+UUNTnVvF8WLDrj55w2xo9xNlp3ZRiKAbHpiC5WKKBpxbQjfsvAL4vLwztllQQGmeYmujfMFgnmB7RSNPBKNV8PA54J+1droESgFvDB9uW8FHlYuCB8GwP9QDRc5VMeFhFiiVriWTg0GJA7Ol3Am8F3cJRZEkbNVDcM4RVniu9sT578nPCdwHbKqtyOmCSxxTxm1zwDuDTsFaUEC2qfFAiUZ/t/SvD960aaPiODy9Vurk8G5rPQvIa0jMDn9MbhkXvtGQKphWM3Rn6sWA+P6TKRcCGoOhbDbRDRHC+MgCzcGF1VRFKDHmVXP0tIzcW/le/STJqKvhOONHbit3lxaBkrwZ+mfDP/DMPldOAV8OGjI12gS5c7AqjFS3HrLIC+Lw8mH/mYZV9/wsD/+sQnxcaQjPEMykSO4D7u4pEKNIAO45iro9dJDknMsw8kwA2w4ynForyMCUGCuaRpmWYsS/LlqpkmNk2BKgz23AOsQNEoBZupPRSe8Vqt1oF9Sp6WW/H+cR+bF+u0gTqXKku7mt1AuwNY7a6JxLgD2l1K4aSBaHHbhHFfixT6Zttu8jCbQlS8qgxSRb80wOBbtmRYh473E/0YqVFWJ0LpERVhhDW78rieemuJnp+WoRVBS3Kn5NYI70NiO0uRX7ko8zFMSJS/syWVLAf5fdl19DkZVFkJK6V/ZgW4wxNm+K0Vo4hE5KWxfGzc2iqf5zHTkH25hFjpxPYWR1j58dlkusaOx9tjAOdY2eNTSvUhsTQRHKZY2keVzIq/omXXWJYTZU8uE+Gtm4c9+pDNiN9msnVh+w9splqy+CrDzd4S6D7I5OuivSm6P9yoGV9hSKNurxMhdlr7hX4TaNBl0f1z2TT6wDvUbpEMNWrDli/hrAa7iMBByG9lceBqM+LgXvGvX6LCg7YC8xopAjvMHPtv3QFLEOSNfW1ySl3M3155HdvCKRMejUOWkP2mga2M6/YKj/s3TfkjrpLydwC2KcAxwAnpYVfAT+Wmce2WQejXqPign8A0W1IMJkaf4EAAAAASUVORK5CYII=

### Syntax

~~~js
canvas.toDataURL(type, encoderOptions);
~~~

#### type (Optional)
* 이미지 포맷 스트링 입력
* "image/png"가 디폴트

#### encoderOptions (Optional)
* 이미지 퀄리티 지정
* 0과 1사이 값 입력 (예 : 0.3)

---

## 참고
* [https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)
* [https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL)



<script>
    window.addEventListener("load", function(event) {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const image = document.getElementById('source');

        ctx.drawImage(image, 0, 0);

        console.log(canvas.toDataURL("image/png", 0.43));
    });
</script>