// branch dropdown boxes

const branchLinksdropdown_viewpage = document.querySelectorAll(".dropdown-branch-viewpage");
branchLinksdropdown_viewpage.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const branch = this.getAttribute("data-branch");
    let inputbox = document.getElementById("upperview_pageting_select_center_branch_inputbox_dropdown");
    inputbox.value = branch;
  });
});


// semester dropdown boxes

const semesterLinksdropdown_viewpage = document.querySelectorAll(".dropdown-semester-viewpage");
semesterLinksdropdown_viewpage.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const branch = this.getAttribute("data-semester");
    let inputbox = document.getElementById("inputbox-dropdown-semester-viewpage");
    inputbox.value = branch;
  });
});