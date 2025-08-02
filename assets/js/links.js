document.addEventListener("DOMContentLoaded", function () {
  const currentHost = window.location.hostname;

  document.querySelectorAll("a[href]").forEach(function (link) {
    const linkHost = new URL(link.href).hostname;

    if (linkHost && linkHost !== currentHost) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
