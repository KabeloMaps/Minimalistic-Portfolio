// Behaviour for buttons
document.querySelectorAll(".btn-demo").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open(btn.dataset.link, "_blank");
  });
});

document.querySelectorAll(".btn-github").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open(btn.dataset.link, "_blank");
  });
});
window.history.replaceState({}, document.title, window.location.pathname);

// Pagination for projects
const projectsPerPage = 3;
const projects = Array.from(document.querySelectorAll(".projects"));
const pagination = document.getElementById("pagination");
let currentPage = 1;

function showPage(page) {
  const start = (page - 1) * projectsPerPage;
  const end = start + projectsPerPage;
  projects.forEach((proj, idx) => {
    proj.style.display = idx >= start && idx < end ? "" : "none";
  });
}

function setupPagination() {
  pagination.innerHTML = "";
  const pageCount = Math.ceil(projects.length / projectsPerPage);

  // Previous Arrow
  const prevBtn = document.createElement("button");
  prevBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
  prevBtn.className = "page-btn arrow-btn";
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
    }
  });
  pagination.appendChild(prevBtn);

  // Page Numbers
  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = "page-btn";
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentPage = i;
      updatePagination();
    });
    pagination.appendChild(btn);
  }

  // Next Arrow
  const nextBtn = document.createElement("button");
  nextBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
  nextBtn.className = "page-btn arrow-btn";
  nextBtn.disabled = currentPage === pageCount;
  nextBtn.addEventListener("click", () => {
    if (currentPage < pageCount) {
      currentPage++;
      updatePagination();
    }
  });
  pagination.appendChild(nextBtn);
}

function updatePagination() {
  showPage(currentPage);
  setupPagination();
  // Scroll to the top of the projects list
  const projectsList = document.getElementById("projects-list");
  if (projectsList) {
    projectsList.scrollIntoView({ behavior: "smooth" });
  }
}

// Initialize on page load
if (projects.length > 0) {
  showPage(currentPage);
  setupPagination();
}
