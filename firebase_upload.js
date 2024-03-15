// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCe8SOO2eBfq_mmvHl-wahQQMqJuYfYlTk",
    authDomain: "inrems-9e134.firebaseapp.com",
    databaseURL: "https://inrems-9e134-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "inrems-9e134",
    storageBucket: "inrems-9e134.appspot.com",
    messagingSenderId: "452363299801",
    appId: "1:452363299801:web:183434ff7af2982d7a87c8",
    measurementId: "G-GRP1YDCH11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase(app);

// document.getElementById("lowerinsert-pagetting-upload-button").addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log("file selected")
//     const csvFileInput = document.getElementById("textinputlower15");
//     const file = csvFileInput.files[0];

//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function (event) {
//             const csvData = event.target.result;
//             const json = csvJSON(csvData);
//             uploadToFirebase(json);
//         };
//         reader.readAsText(file);
//     }
// });
// //var csv is the CSV file with headers
// function csvJSON(csv) {

//     var lines = csv.split("\n");

//     var result = [];

//     // NOTE: If your columns contain commas in their values, you'll need
//     // to deal with those before doing the next step 
//     // (you might convert them to &&& or something, then covert them back later)
//     // jsfiddle showing the issue https://jsfiddle.net/
//     var headers = lines[0].split(",");

//     for (var i = 1; i < lines.length; i++) {

//         var obj = {};
//         var currentline = lines[i].split(",");

//         for (var j = 0; j < headers.length; j++) {
//             obj[headers[j]] = currentline[j];
//         }

//         result.push(obj);

//     }
//     console.log(result)

//     //return result; //JavaScript object
//     // return JSON.stringify(result); //JSON
//     return JSON.parse(result);

// }


// function uploadToFirebase(jsonData) {
//     const dataRef = ref(db, 'data/'); // Change "yourData" to your desired location
//     set(dataRef, jsonData)
//         .then(() => {
//             console.log("Data uploaded to Firebase successfully!");
//         })
//         .catch(error => {
//             console.error("Error uploading data to Firebase: ", error);
//         });
// }

// Import XLSX library
function csvJSON(csv) {
    var lines = csv.split("\n");
    var result = [];

    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");

        // Parse individual columns
        // var studentName = currentline[0];
        // var studentNo = parseInt(currentline[1]);
        // if (isNaN(studentNo) ||studentNo === undefined || studentNo === null) {
        //     studentNo = 0;
        // } else {
        //     studentNo = parseInt(studentNo);
        // }
        // var studentNo = parseInt(currentline[1]);
        // if (isNaN(studentNo) || studentNo === null || studentNo === undefined) {
        //     studentNo = 0; // Set to 0 or handle it as per your requirements
        // }
        // var FEC101 = parseInt(currentline[2]);
        // var FEC102 = parseInt(currentline[3]);
        // var FEC103 = parseInt(currentline[4]);
        // var FEC104 = parseInt(currentline[5]);
        // var FEC105 = parseInt(currentline[6]);
        // var FEL101 = parseInt(currentline[7]);
        // var FEL102 = parseInt(currentline[8]);
        // var FEL103 = parseInt(currentline[9]);
        // var FEL104 = parseInt(currentline[10]);
        // var FEL105 = parseInt(currentline[11]);
        // ... parse other columns as needed ...


        // var studentName = currentline[0];
        // var studentNo = currentline[1];

        var studentName = currentline[0];
        console.log("Parsed FEC101: " + studentName);
        var studentNo = parseInt(currentline[1]);
        if (isNaN(studentNo) ||studentNo === undefined || studentNo === null) {
            studentNo = 0;
        } else {
            studentNo = parseInt(studentNo);
        }
        var FEC101 = parseInt(currentline[2]) || 0;
        console.log("Parsed FEC101: " + FEC101);
        var FEC102 = parseInt(currentline[3])|| 0;
        var FEC103 = parseInt(currentline[4])|| 0;
        var FEC104 = parseInt(currentline[5])|| 0;
        var FEC105 = parseInt(currentline[6])|| 0;
        var FEL101 = parseInt(currentline[7])|| 0;
        var FEL102 = parseInt(currentline[8])|| 0;
        var FEL103 = parseInt(currentline[9])|| 0;
        var FEL104 = parseInt(currentline[10])|| 0;
        var FEL105 = parseInt(currentline[11])|| 0;

        // Calculate totalMarks, CGPA, and grade
        var totalMarks = FEC101 + FEC102 + FEC103 + FEC104 + FEC105 + FEL101 + FEL102 + FEL103 + FEL104 + FEL105; // Add other subjects as needed
        var cgpa = ((totalMarks * 100) / 1000) / 9.0;
        var grade;

        if (cgpa > 0 && cgpa < 3.9) {
            grade = "F";
        } else if (cgpa >= 4 && cgpa < 4.49) {
            grade = "P";
        } else if (cgpa >= 4.5 && cgpa < 4.99) {
            grade = "E";
        } else if (cgpa >= 5 && cgpa < 5.99) {
            grade = "D";
        } else if (cgpa >= 6 && cgpa < 6.99) {
            grade = "C";
        } else if (cgpa >= 7 && cgpa < 7.49) {
            grade = "B";
        } else if (cgpa >= 7.5 && cgpa < 7.99) {
            grade = "A";
        } else if (cgpa >= 8 && cgpa <= 10) {
            grade = "O";
        } else {
            grade = "N/A"; // Set a default grade if cgpa doesn't match any condition
        }

        // ... determine other grades ...

        // Create a new object with the calculated values
        obj = {
            studentName: studentName,
            studentNo: studentNo,
            FEC101: FEC101,
            FEC102: FEC102,
            FEC103: FEC103,
            FEC104: FEC104,
            FEC105: FEC105,
            FEL101: FEL101,
            FEL102: FEL102,
            FEL103: FEL103,
            FEL104: FEL104,
            FEL105: FEL105,

            cgpa: cgpa,
            grade: grade
        };

        result.push(obj);
    }

    return result ; // JSON object containing transformed data
    console.log("helllo res");
}

// Usage example
document.getElementById("lowerinsert-pagetting-upload-button").addEventListener('click', function (e) {
    e.preventDefault();
    console.log("file selected");
    const csvFileInput = document.getElementById("textinputlower15");
    const file = csvFileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const csvData = event.target.result;
            const jsonData = csvJSON(csvData);
            uploadToFirebase(jsonData);
        };
        reader.readAsText(file);
    }
    console.log("helllo button");
});

function uploadToFirebase(jsonData) {
    const dataRef = ref(db, 'IT/' + 'sem1/'); // Change "yourData" to your desired location
    // const dataRef = ref(db, 'data/'); // Change "yourData" to your desired location
    set(dataRef, jsonData)
        .then(() => {
            console.log("Data uploaded to Firebase successfully!");
        })
        .catch(error => {
            console.error("Error uploading data to Firebase: ", error);
        });
    console.log("helllo fire");
}




document.getElementById("lowerinsert-pagetting-markssubmit-button").addEventListener("click", async function (e) {
    e.preventDefault();

    var studentName = document.getElementById("textinputlower1").value;
    var studentNo = parseInt(document.getElementById("textinputlower2").value);
    var FEC101 = parseInt(document.getElementById("textinputlower3").value);
    var FEC102 = parseInt(document.getElementById("textinputlower4").value);
    var FEC103 = parseInt(document.getElementById("textinputlower5").value);
    var FEC104 = parseInt(document.getElementById("textinputlower6").value);
    var FEC105 = parseInt(document.getElementById("textinputlower7").value);
    var FEL101 = parseInt(document.getElementById("textinputlower8").value);
    var FEL102 = parseInt(document.getElementById("textinputlower9").value);
    var FEL103 = parseInt(document.getElementById("textinputlower10").value);
    var FEL104 = parseInt(document.getElementById("textinputlower11").value);
    var FEL105 = parseInt(document.getElementById("textinputlower12").value);

    // Calculate CGPA and grade (similar to your Python/PHP code)
    var cgpa = (((FEC101 + FEC102 + FEC103 + FEC104 + FEC105 + FEL101 + FEL102 + FEL103 + FEL104 + FEL105) * 100) / 1000) / 9.0;
    var grade;

    if (cgpa > 0 && cgpa < 3.9) {
        grade = "F";
    } else if (cgpa >= 4 && cgpa < 4.49) {
        grade = "P";
    } else if (cgpa >= 4.5 && cgpa < 4.99) {
        grade = "E";
    } else if (cgpa >= 5 && cgpa < 5.99) {
        grade = "D";
    } else if (cgpa >= 6 && cgpa < 6.99) {
        grade = "C";
    } else if (cgpa >= 7 && cgpa < 7.49) {
        grade = "B";
    } else if (cgpa >= 7.5 && cgpa < 7.99) {
        grade = "A";
    } else if (cgpa >= 8 && cgpa <= 10) {
        grade = "O";
    }


    try {
        await set(ref(db, 'IT/' + 'sem1/' + document.getElementById("textinputlower1").value), {
            studentName: studentName,
            studentNo: studentNo,
            FEC101: FEC101,
            FEC102: FEC102,
            FEC103: FEC103,
            FEC104: FEC104,
            FEC105: FEC105,
            FEL101: FEL101,
            FEL102: FEL102,
            FEL103: FEL103,
            FEL104: FEL104,
            FEL105: FEL105,
            cgpa: cgpa,
            grade: grade
        });

        console.log("Data stored successfully!");
    } catch (error) {
        console.error("Error storing data: ", error);
    }

});

document.getElementById("lowerinsert-pagetting-markssubmit-button").addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById("textinputlower1").value;
    document.getElementById("textinputlower2").value;
    document.getElementById("textinputlower3").value;
    document.getElementById("textinputlower4").value;
    document.getElementById("textinputlower5").value;
    document.getElementById("textinputlower6").value;
    document.getElementById("textinputlower7").value;
    document.getElementById("textinputlower8").value;
    document.getElementById("textinputlower9").value;
    document.getElementById("textinputlower10").value;
    document.getElementById("textinputlower11").value;
    document.getElementById("textinputlower12").value;

});    


document.getElementById("upperview-pagetting-select-button").addEventListener("click", function () {
    const usersRef = ref(db, 'IT/' + 'sem1/');

    get(usersRef).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            // Data retrieval successful, now you can display it in a table
            // Call a function to render the data in a table format
            renderDataInTable(data);
            console.log(data)
        } else {
            // No data available
            console.log("No data available");
        }
    }).catch((error) => {
        console.error("Error getting data:", error);
    })
});