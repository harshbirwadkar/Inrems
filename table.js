

function renderDataInTable(data) {
    const table = document.createElement('table');
    const headers = ['Student Name  ', 'Student No  ', 'FEC101  ', 'FEC102  ', 'FEC103  ', 'FEC104  ', 'FEC105  ', 'FEL101  ', 'FEL102  ', 'FEL103  ', 'FEL104  ', 'FEL105 ','CGPA','GRADE'];

    // Create table headers
    const headerRow = table.insertRow();
    headers.forEach((header) => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });

    // Populate table rows with data
    for (const key in data) {
        const row = table.insertRow();
        const userData = data[key];
        const values = [userData.studentName, userData.studentNo, userData.FEC101, userData.FEC102, userData.FEC103, userData.FEC104, userData.FEC105, userData.FEL101, userData.FEL102, userData.FEL103, userData.FEL104, userData.FEL105 ,userData.cgpa ,userData.grade];
        values.forEach((value) => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    }

    // Append the table to an existing element in your HTML (e.g., a div with id 'table-container')
    document.getElementById('table-container').appendChild(table);
}


