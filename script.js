let students = [];
let idCounter = 1;

function addStudent() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const degree = document.getElementById("degree").value;
    const maths = parseFloat(document.getElementById("maths").value) || 0;
    const english = parseFloat(document.getElementById("english").value) || 0;
    const cs = parseFloat(document.getElementById("cs").value) || 0;
    const physics = parseFloat(document.getElementById("physics").value) || 0;
    const chemistry = parseFloat(document.getElementById("chemistry").value) || 0;

    if (!name || !email || !age || !degree) {
        alert("Please fill in all required fields!");
        return;
    }

    const gpa = ((maths + english + cs + physics + chemistry) / 5).toFixed(2);

    const student = {
        id: idCounter++,
        name,
        email,
        age,
        gpa,
        degree
    };

    students.push(student);
    displayStudents();
    clearInputFields();
}

function displayStudents(filteredStudents = students) {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    filteredStudents.forEach(student => {
        const row = document.createElement("tr");
        
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
            <td>${student.gpa}</td>
            <td>${student.degree}</td>
        `;

        tbody.appendChild(row);
    });
}
function toggleDropdown() {
    const dropdown = document.getElementById("subject-dropdown");
    dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
}


function search() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm) ||
        student.email.toLowerCase().includes(searchTerm) ||
        student.degree.toLowerCase().includes(searchTerm)
    );

    displayStudents(filteredStudents);
}

function clearInputFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("degree").value = "";
    document.getElementById("maths").value = "";
    document.getElementById("english").value = "";
    document.getElementById("cs").value = "";
    document.getElementById("physics").value = "";
    document.getElementById("chemistry").value = "";
}
