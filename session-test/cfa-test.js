(function() {
  window.addEventListener("message", (event) => {
    if (event.data?.method === "setPermanentId") {
      console.log(
        "Received client session ID:",
        event.data.params.id
      );
    }
  });
})();









