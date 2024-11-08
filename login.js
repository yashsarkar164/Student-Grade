function login(userType) {
    // Define login credentials for students and teachers
    const students = {
        'YASH': { id: '043', password: 'yash123' },
        'SAMIRON': { id: '033', password: 'samiron123' }
    };

    const teachers = {
        'GORGE': { id: '101', password: 'gorge123' },
        'MICHEL': { id: '102', password: 'michel123' }
    };

    if (userType === "student") {
        const studentId = document.getElementById("student-id").value;
        const studentPassword = document.getElementById("student-password").value;

        let foundStudent = false;
        
        // Check credentials
        for (let student in students) {
            if (students[student].id === studentId && students[student].password === studentPassword) {
                foundStudent = true;
                console.log(`Successful login as Student: ${studentId}`);
                window.location.href = 'student.html';  // Redirect to student dashboard
                return; // Exit function after redirecting
            }
        }

        if (!foundStudent) {
            alert("Invalid Student ID or Password.");
            console.log("Student login failed.");
        }

    } else if (userType === "teacher") {
        const teacherId = document.getElementById("teacher-id").value;
        const teacherPassword = document.getElementById("teacher-password").value;

        let foundTeacher = false;
        
        // Check credentials
        for (let teacher in teachers) {
            if (teachers[teacher].id === teacherId && teachers[teacher].password === teacherPassword) {
                foundTeacher = true;
                console.log(`Successful login as Teacher: ${teacherId}`);
                window.location.href = 'index.html';  // Redirect to teacher dashboard
                return; // Exit function after redirecting
            }
        }

        if (!foundTeacher) {
            alert("Invalid Teacher ID or Password.");
            console.log("Teacher login failed.");
        }
    }
}
