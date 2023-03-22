const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

tabLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Hide all tab contents
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });

    // Remove "active" class from all tab links
    tabLinks.forEach((tab) => {
      tab.classList.remove("active");
    });

    // Show the clicked tab content
    const tabId = link.getAttribute("data-tab");
    const tabContent = document.querySelector(`#${tabId}`);
    tabContent.classList.add("active");

    // Add "active" class to the clicked tab link
    link.classList.add("active");
  });
});
