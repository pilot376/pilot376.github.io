---
layout: post
title: "Chrome 개발자 모드 새로고침 시 변경내용 유지하기"
tag: [chrome, dev-tools]
---

브라우저로 웹 디버깅 시 새로고침을 하면 디버깅 중인 내용이 모두 날아가게 된다. 새로고침으로 확인이 필요한 경우 Break Point를 활용하면 조금 더 용이하게 디버깅을 할 수는 있지만, 아무래도 한계가 있다.  
이럴 때 Chrome 브라우저의 Overrides 기능을 사용하면 Local Server에서 작업하는 것 같은 편안함을 느낄 수 있다.

1. Chrome 개발자 도구 > Sources > Overrides > + Select forder for overrides 클릭
![Chrome Overrides 1](/assets/img/20190429/3.png)

2. 개발 소스를 저장할 로컬 경로 선택 > 엑세스 허용
![Chrome Overrides 2](/assets/img/20190429/4.png)

3. 파일 수정 후 Seve for iverrides로 저장
![Chrome Overrides 3](/assets/img/20190429/5.png)

4. 파일을 저장하게 되면 2단계에서 지정한 경로에 파일이 생성된다. 이후 크롬에서는 웹서버에 있는 파일을 바라보지 않고, 로컬 파일을 바라보면서 웹 페이지를 파싱 한다.
![Chrome Overrides 4](/assets/img/20190429/6.png)

5. 테스트로 작성한 console.log 코드는 새로고침을 해도 날아가지 않고 계속 유지된다.
![Chrome Overrides 5](/assets/img/20190429/7.png)