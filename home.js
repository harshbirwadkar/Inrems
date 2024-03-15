



// homebutton.onclick = function () {
//     const homepage = document.getElementsByClassName("homepageting")[0];
//     const adddetailspage = document.getElementsByClassName("add-details-ting")[0];
//     homepage.style.display = "none";
//     adddetailspage.style.display = "flex";
//     console.log("heool")
// };

const homepage_to_adddetails_button = document.getElementById("homepage-card-add-details-button")
let to_adddetails = function (e) {
    let homepage = document.getElementsByClassName("homepageting")[0];
    let adddetailspage = document.getElementsByClassName("add-details-ting")[0];
    let insertpage = document.getElementsByClassName("insert_pagetting")[0];
    let viewpage = document.getElementsByClassName("view_pagetting")[0];
    homepage.style.display = "none";
    adddetailspage.style.display = "flex";
    insertpage.style.display = "none";
    viewpage.style.display = "none";
}
homepage_to_adddetails_button.addEventListener('click', to_adddetails)


const to_homepage_button = document.getElementById("to_homepage_header_homebutton")
let to_homepage = function (e) {
    let homepage = document.getElementsByClassName("homepageting")[0];
    let adddetailspage = document.getElementsByClassName("add-details-ting")[0];
    let insertpage = document.getElementsByClassName("insert_pagetting")[0];
    let viewpage = document.getElementsByClassName("view_pagetting")[0];
    homepage.style.display = "flex";
    adddetailspage.style.display = "none";
    insertpage.style.display = "none";
    viewpage.style.display = "none";
    
}
to_homepage_button.addEventListener('click', to_homepage)
const to_homepage_about_button = document.getElementById("to_homepage_header_aboutbutton")
to_homepage_about_button.addEventListener('click', to_homepage)


const to_insertpage_button = document.getElementById("homepage-uploadresult-button")
let to_insertpage = function (e) {
    let homepage = document.getElementsByClassName("homepageting")[0];
    let adddetailspage = document.getElementsByClassName("add-details-ting")[0];
    let insertpage = document.getElementsByClassName("insert_pagetting")[0];
    let viewpage = document.getElementsByClassName("view_pagetting")[0];
    homepage.style.display = "none";
    adddetailspage.style.display = "none";
    insertpage.style.display = "flex";
    viewpage.style.display = "none";
    
}
to_insertpage_button.addEventListener('click', to_insertpage)

const to_viewpage_button = document.getElementById("homepage-viewresult-button")
let to_viewpage = function (e) {
    let homepage = document.getElementsByClassName("homepageting")[0];
    let adddetailspage = document.getElementsByClassName("add-details-ting")[0];
    let insertpage = document.getElementsByClassName("insert_pagetting")[0];
    let viewpage = document.getElementsByClassName("view_pagetting")[0];
    homepage.style.display = "none";
    adddetailspage.style.display = "none";
    insertpage.style.display = "none";
    viewpage.style.display = "flex";
    
}
to_viewpage_button.addEventListener('click', to_viewpage)


document.getElementById('homepage_logout_button').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
  
    window.location.href = 'index.html'; 
   
  });