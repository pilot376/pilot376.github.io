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
    if (event.data?.type === "SESSION_INFO") {
      console.log(
        "Received client session ID:",
        event.data.data.client_session_id
      );
    }
  });
})();









