document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".pub-filter");
  if (!buttons.length) return;

  let activeType = "all";

  const updateGroupHeadings = () => {
    document.querySelectorAll(".publications h2.bibliography").forEach((heading) => {
      let iterator = heading.nextElementSibling;
      let hasVisible = false;
      while (iterator && iterator.tagName !== "H2") {
        if (iterator.tagName === "OL") {
          const visible = iterator.querySelectorAll(":scope > li:not(.unloaded):not(.type-filtered)");
          const hide = visible.length === 0;
          iterator.classList.toggle("type-filtered", hide);
          if (!hide) hasVisible = true;
        }
        iterator = iterator.nextElementSibling;
      }
      heading.classList.toggle("type-filtered", !hasVisible);
    });
  };

  const applyFilter = () => {
    document.querySelectorAll(".publications .bibliography > li").forEach((item) => {
      const row = item.querySelector("[data-pub-type]");
      const type = row ? row.dataset.pubType : "";
      item.classList.toggle("type-filtered", activeType !== "all" && type !== activeType);
    });
    updateGroupHeadings();
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      activeType = button.dataset.filter;
      buttons.forEach((b) => {
        b.classList.toggle("active", b === button);
        b.setAttribute("aria-pressed", b === button ? "true" : "false");
      });
      applyFilter();
    });
  });

  // Keep year headings in sync when the text search also hides entries.
  const search = document.getElementById("bibsearch");
  if (search) {
    search.addEventListener("input", () => setTimeout(updateGroupHeadings, 350));
  }
  window.addEventListener("hashchange", () => setTimeout(updateGroupHeadings, 0));
});
