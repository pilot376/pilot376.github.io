(function() {
  window.addEventListener("message", (event) => {
    if (event.data?.type === "setPermanentId") {
      console.log(
        "Received client session ID:",
        event.data.params.id
      );
    }
  });
})();









