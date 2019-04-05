---
layout: post
title: "react-native run-android 실행 시 device를 못 찾는 에러"
tag: [javascript, react native, android]
---

react native 환경설정 가이드대로 모두 세팅했지만, 안드로이드 디바이스에 빌드 시 에러가 발생했다.

~~~bash
$ react-native run-android

info JS server already running.
info Building and installing the app on the device (cd android && ./gradlew app:installDebug)...
error Could not install the app on the device, read the error above for details.
Make sure you have an Android emulator running or a device connected and have
set up your Android development environment:
https://facebook.github.io/react-native/docs/getting-started.html
error spawnSync ./gradlew EACCES. Run CLI with --verbose flag for more details.
~~~

> Make sure you have an Android emulator running or a device connected and have

위 문장때문에 디바이스 연결 문제라고 판단했지만, 원인은 전혀 다른 곳에 있었다.
(안드로이드 디바이스에서는 빌드가 되고, react native에서는 빌드가 안됨)

이 에러는 android/gradlew 권한 설정으로 해결할 수 있었다.

~~~bash
$ chmod 755 android/gradlew
$ react-native run-android
~~~


**참고** : [https://stackoverflow.com/questions/37900737/make-sure-you-have-an-android-emulator-running-or-a-device-connected-and-have](https://stackoverflow.com/questions/37900737/make-sure-you-have-an-android-emulator-running-or-a-device-connected-and-have)
