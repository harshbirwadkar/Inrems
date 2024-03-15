// const branchLinks = document.querySelectorAll(".dropdown-branch-teacher-add-detailspage");

// branchLinks.forEach(link => {
//   link.addEventListener("click", function(event) {
//     event.preventDefault();
//     const branch = this.getAttribute("data-branch");
//     let inputbox = document.getElementsByClassName("dropdown-content")[0].previousSibling;
//     inputbox.value = branch;
//     console.log(inputbox)
//   });
// });

// branch dropdown boxes

const branchLinksdropdown_teacher_adddetails = document.querySelectorAll(".dropdown-branch-teacher-add-detailspage");
branchLinksdropdown_teacher_adddetails.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const branch = this.getAttribute("data-branch");
    let inputbox = document.getElementById("inputbox-dropdown-branch-teacher-add-detailspage");
    inputbox.value = branch;
  });
});

const branchLinksdropdown_student_adddetails = document.querySelectorAll(".dropdown-branch-student-add-detailspage");
branchLinksdropdown_student_adddetails.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const branch = this.getAttribute("data-branch");
    let inputbox = document.getElementById("inputbox-dropdown-branch-student-add-detailspage");
    inputbox.value = branch;
  });
});

// semester dropdown boxes

const semesterLinksdropdown_student_adddetails = document.querySelectorAll(".dropdown-semester-student-add-detailspage");
semesterLinksdropdown_student_adddetails.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const branch = this.getAttribute("data-semester");
    let inputbox = document.getElementById("inputbox-dropdown-semester-student-add-detailspage");
    inputbox.value = branch;
  });
});