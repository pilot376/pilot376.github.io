---
layout: post
title: "안드로이드 앱 버전 갱신하기"
tag: [android]
---

Google Play Console에 앱 업로드 시 버전을 갱신하지 않으면 다음과 같은 메시지를 볼 수 있다.

> 업로드 실패  
이미 버전 코드가 1인 APK 또는 Android App Bundle이 있으므로 다른 버전 코드를 사용해야 합니다.

---

이 오류는 아래와 같이 수정할 수 있다.

1. build.gradle 파일 오픈
2. **versionCode** : Google Play Console 내 업로드 시 구분 코드값이다. 마지막 업로드 버전에서 +1 수정한다.
3. **versionName** : 사용자에게 노출되는 앱 버전이다. (Google Play Store 노출) 해당 값은 필수로 올리지 않아도 된다. 앱의 기능 수정이 있을 때에만 그에 맞게 Major 혹은 Minor 버전을 올려준다.

~~~java
android {
    defaultConfig {
        versionCode 2 // Google Play Console 업로드 시 구분 버전
        versionName "1.0" // Google Play Store 노출 버전
    }
}
~~~


