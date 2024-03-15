// Function to populate the Roll Number dropdown based on branch and semester selection
function insertMarks1() {
    const branch = document.getElementById('upperinsert_pageting_select_center_branch_inputbox_dropdown').value;
    const semester = document.getElementById('inputbox-dropdown-semester-insertpage').value;
    

    

    // Show labels and set text for Semester 1
    if (semester === 'Semester 1') {
        document.getElementById('labellower1').textContent = 'Student name';
        document.getElementById('labellower2').textContent = 'Student no.';
        document.getElementById('labellower3').textContent = 'FEC101';
        document.getElementById('labellower4').textContent = 'FEC102';
        document.getElementById('labellower5').textContent = 'FEC103';
        document.getElementById('labellower6').textContent = 'FEC104';
        document.getElementById('labellower7').textContent = 'FEC105';
        document.getElementById('labellower8').textContent = 'FEL101';
        document.getElementById('labellower9').textContent = 'FEL102';
        document.getElementById('labellower10').textContent = 'FEL103';
        document.getElementById('labellower11').textContent = 'FEL104';
        document.getElementById('labellower12').textContent = 'FEL105';
        document.getElementById('labellower13').style.display = 'none'; // Hide lbim313
        document.getElementById('labellower14').style.display = 'none'; // Hide lbim314
        document.getElementById('textinputlower13').style.display ='none';
        document.getElementById('textinputlower14').style.display ='none';

        
    }
   
        
        
    
}

// Add a click event listener to the button
document.getElementById('upperinsert-pagetting-select-button').addEventListener('click', insertMarks1);


// You should call insertMarks1() when the page loads if necessary
// insertMarks1();
