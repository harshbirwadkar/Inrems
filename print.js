document.getElementById('upperview-pagetting-select-button').addEventListener('click', ()=>{
    document.getElementsByClassName("lowerview-pagetting-button")[0].style.display = "flex";
});

const printButton = document.getElementById('lowerview-pagetting-select-button')
printButton.addEventListener('click', () => {
    document.getElementsByClassName("upperview_pagetting")[0].style.display = "none";
    document.getElementsByClassName("header")[0].style.display = "none";
    setTimeout(()=>{
        document.getElementsByClassName("upperview_pagetting")[0].style.display = "flex";
        document.getElementsByClassName("header")[0].style.display = "grid";
    }, 1000);
})
printButton.addEventListener('click', () => {
    print()
})
