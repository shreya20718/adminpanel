// Page Switching + Loader Animation
document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => {

    // Sidebar highlight
    document.querySelectorAll(".nav-item").forEach(n =>
      n.classList.remove("active")
    );
    btn.classList.add("active");

    const target = btn.getAttribute("data-page");
    const loader = document.getElementById("pageLoader");

    // Show loader
    loader.style.display = "block";

    // Hide all pages
    document.querySelectorAll(".page").forEach(p => {
      p.classList.remove("active");
      p.classList.add("hidden");
    });

    // Delay for animation
    setTimeout(() => {
      const page = document.getElementById(target);
      page.classList.remove("hidden");

      setTimeout(() => {
        page.classList.add("active");
      }, 30);

      // Hide loader
      loader.style.display = "none";

      // Update page title
      document.getElementById("pageTitle").innerText =
        target.charAt(0).toUpperCase() + target.slice(1);
    }, 300);
  });
});


// Mobile Sidebar Toggle
document.getElementById("menuToggle").addEventListener("click", () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.display = (sidebar.style.display === "none") ? "flex" : "none";
});

// Collapse Sidebar
document.getElementById("collapseBtn").addEventListener("click", () => {
  const sidebar = document.getElementById("sidebar");

  if (sidebar.style.width === "70px") {
    sidebar.style.width = "260px";
    document.querySelectorAll(".nav-item").forEach(i => i.style.textAlign = "left");
  } else {
    sidebar.style.width = "70px";
    document.querySelectorAll(".nav-item").forEach(i => i.style.textAlign = "center");
  }
});
