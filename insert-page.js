// branch dropdown boxes

const branchLinksdropdown_insertpage = document.querySelectorAll(".dropdown-branch-insertpage");
branchLinksdropdown_insertpage.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const branch = this.getAttribute("data-branch");
    let inputbox = document.getElementById("upperinsert_pageting_select_center_branch_inputbox_dropdown");
    inputbox.value = branch;
  });
});


// semester dropdown boxes

const semesterLinksdropdown_insertpage = document.querySelectorAll(".dropdown-semester-insertpage");
semesterLinksdropdown_insertpage.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const branch = this.getAttribute("data-semester");
    let inputbox = document.getElementById("inputbox-dropdown-semester-insertpage");
    inputbox.value = branch;
  });
});