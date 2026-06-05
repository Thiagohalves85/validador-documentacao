document$.subscribe(() => {
  if (window.mermaid) {
    window.mermaid.initialize({
      startOnLoad: true,
      theme: document.body.dataset.mdColorScheme === "slate" ? "dark" : "default",
      securityLevel: "loose"
    });
    window.mermaid.run();
  }
});
