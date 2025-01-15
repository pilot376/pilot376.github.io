(function() {
  // 쿠키 설정 함수
  // const setCookie = (value) => {
  //   const currentDomain = window.location.hostname.split('.').slice(-2).join('.');
  //   document.cookie = `test_cookie_session_id=${value}; path=/; domain=.${currentDomain}`;
  // };

  window.addEventListener("message", (event) => {
    if (event.data?.method === "setCookieSessionId") {
      const sessionId = event.data.params.id;
      console.log("Received cookie session ID:", sessionId);
      
      // 부모 도메인에도 쿠키 설정
      // setCookie(sessionId);
    }
  });
})(); 