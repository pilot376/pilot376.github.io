(function() {
  const iframe = document.getElementById("iframeCFATestSession");

  iframe.onload = () => {
    iframe.contentWindow.postMessage(
      {
        type: "REQUEST_SESSION",
      },
      "*"
    );
  };
  
  window.addEventListener("message", (event) => {
    const allowedOrigin = 'https://pilot376.github.io';
    // 메시지를 보낸 출처(origin) 검증
    if (event.origin !== allowedOrigin) {
        console.warn('허용되지 않은 출처에서의 메시지:', event.origin);
        return;
    }

	console.log(event.data);
    if (event.data?.type === "SESSION_INFO") {
      console.log(
        "Received client session ID:",
        event.data.data.client_session_id
      );
    }
  });
})();









