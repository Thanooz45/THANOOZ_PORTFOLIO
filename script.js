// Optional theme toggle, if you add a button with id="themeToggle"
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        const isDark = document.body.dataset.theme !== "light";
        if (isDark) {
            document.body.dataset.theme = "light";
            document.body.style.background = "#f9fafb";
            document.body.style.color = "#111827";
        } else {
            document.body.dataset.theme = "dark";
            document.body.style.background = "";
            document.body.style.color = "";
        }
    });
}

// Project category filter buttons
const filterButtons = document.querySelectorAll("[data-filter-btn]");
const projectColumns = document.querySelectorAll(".project-grid [data-category]");

if (filterButtons.length && projectColumns.length) {
    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const filter = btn.getAttribute("data-filter");

            // Toggle active state on buttons
            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            // Show/hide projects
            projectColumns.forEach((col) => {
                const categories = (col.getAttribute("data-category") || "").split(" ");
                const shouldShow = categories.includes(filter);

                if (shouldShow) {
                    col.classList.remove("d-none");
                } else {
                    col.classList.add("d-none");
                }
            });
        });
    });

    // Apply the default filter (web) on initial load
    const defaultActive = document.querySelector(".project-filters .filter-btn.active");
    if (defaultActive) {
        defaultActive.click();
    }
}
