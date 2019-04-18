---
layout: post
title: "Android Webview로 하이브리드 앱 만들기"
tag: [android]
---

## 프로젝트 생성
1. File > New > New Project 메뉴 클릭
2. Empty Activety 선택
3. Name, Package name 등 앱 정보를 입력 후 생성 완료


---

## 인터넷 권한 추가
1. app > manifests > AndroidManidest.xml 파일 오픈
2. <application></application> 코드 상단에 권한 코드 추가
    ~~~xml 
    <uses-permission android:name="android.permission.INTERNET"></uses-permission>
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"></uses-permission>
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"></uses-permission>
    ~~~

---

## Webview Layout 추가
1. app > res > layout > activity_main.xml 파일 오픈
2. Design -> Text 모드로 변경
3. <android.support.constraint.ConstraintLayout></android.support.constraint.ConstraintLayout> 태그 내에 웹뷰 추가
    android:id="@+id/mainWebview" 값은 MainActivity.java 에서 사용할 ID값
    ~~~xml
    <WebView
        android:id="@+id/mainWebview"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />
    ~~~

---

## 웹뷰 URL 호출 코드 추가
1. app > java > my.package.name > MainActivity.java 파일 오픈
2. 웹뷰 내 URL 호출 코드 추가 (클래스 임포트가 필요한 경우 Alt + Enter로 추가)
    ~~~java
    public class MainActivity extends AppCompatActivity {

        private WebView webView;
        private WebSettings webViewSetting;
        private String webUrlLocal = "https://domain.com";

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_main);
            
            webView = (WebView) findViewById(R.id.mainWebview);
            webViewSetting = webView.getSettings();
            
            webViewSetting.setJavaScriptEnabled(true);
            webViewSetting.setLoadWithOverviewMode(true);
            webView.setWebViewClient(new WebViewClient(){});
            
            webView.loadUrl(webUrlLocal);
        }
    }
    ~~~

---

## Back 버튼 기능 추가
1. app > java > my.package.name > MainActivity.java 파일 오픈
2. onBackPressed 메서드 추가 (클래스 임포트가 필요한 경우 Alt + Enter로 추가)
    ~~~java
    @Override
    public void onBackPressed() {
        if (webView.getOriginalUrl().equalsIgnoreCase(URL)) {
            super.onBackPressed();
        }else if(webView.canGoBack()){
            webView.goBack();
        }else{
            super.onBackPressed();
        }
    }
    ~~~

--- 

## Native Header 제거
1. app > manifests > AndroidManidest.xml 파일 오픈
2. theme 어트리뷰트 수정
    ~~~xml
    android:theme="@style/AppTheme" <!-- As-is -->
    android:theme="@style/Theme.AppCompat.NoActionBar" <!-- To-be -->
    ~~~

---

## 세로 모드 고정
1. app > manifests > AndroidManidest.xml 파일 오픈
2. screenOrientation 어트리뷰트 추가
    ~~~xml
    android:screenOrientation="portrait"
    ~~~
