let studentData = [];

function addRow() {
    const subject = document.getElementById("subject").value;
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;
    const room = document.getElementById("room").value;
    const instructor = document.getElementById("instructor").value;

    if (subject && day && time && room && instructor) {
        const newRow = document.getElementById("studentTable").insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);

        cell1.innerHTML = subject;
        cell2.innerHTML = day;
        cell3.innerHTML = time;
        cell4.innerHTML = room;
        cell5.innerHTML = instructor;
        cell6.innerHTML = '<button style="border: none; background: none; cursor: pointer; margin: 0;" onclick="editRow(this)"><img style="height: 25px;" src="pencil.png"/></button> <button style="border: none; background: none; cursor: pointer; margin: 0;" onclick="deleteRow(this)"><img style="height: 25px;" src="delete.png"/></button>';

        studentData.push({ subject, day, time, room, instructor });

        clearForm();
    } else {
        alert("Please fill in all fields.");
    }
}

function clearForm() {
    document.getElementById("subject").value = "";
    document.getElementById("day").value = "";
    document.getElementById("time").value = "";
    document.getElementById("room").value = "";
    document.getElementById("instructor").value = "";
    document.getElementById("btnSubmit").innerText = "SUBMIT";
}

function editRow(button) {
    const row = button.parentNode.parentNode;
    const rowIndex = row.rowIndex - 1;
    const student = studentData[rowIndex];

    document.getElementById("subject").value = student.subject;
    document.getElementById("day").value = student.day;
    document.getElementById("time").value = student.time;
    document.getElementById("room").value = student.room;
    document.getElementById("instructor").value = student.instructor;

    document.getElementById("btnSubmit").innerText = "SAVE";
    document.getElementById("btnSubmit").onclick = function () {
        saveRow(rowIndex);
    };
}

function saveRow(rowIndex) {
    const subject = document.getElementById("subject").value;
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;
    const room = document.getElementById("room").value;
    const instructor = document.getElementById("instructor").value;

    if (subject && day && time && room && instructor) {
        if (rowIndex !== -1) {
            const row = document.getElementById("studentTable").rows[rowIndex + 1];
            row.cells[0].innerHTML = subject;
            row.cells[1].innerHTML = day;
            row.cells[2].innerHTML = time;
            row.cells[3].innerHTML = room;
            row.cells[4].innerHTML = instructor;
            studentData[rowIndex] = { subject, day, time, room, instructor };
        } else {
            const newRow = document.getElementById("studentTable").insertRow(-1);
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);

            cell1.innerHTML = subject;
            cell2.innerHTML = day;
            cell3.innerHTML = time;
            cell4.innerHTML = room;
            cell5.innerHTML = instructor;

            studentData.push({ subject, day, time, room, instructor });
        }

        clearForm();
        document.getElementById("btnSubmit").innerText = "SUBMIT";
        document.getElementById("btnSubmit").onclick = addRow;
    } else {
        alert("Please fill in all fields.");
    }
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    const rowIndex = row.rowIndex - 1;
    if (confirm("Are you sure you want to delete this subject schedule?")) {
        studentData.splice(rowIndex, 1);
        row.remove();
    }

}

function initializeTable() {
    studentData.forEach((student) => {
        const newRow = document.getElementById("studentTable").insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);

        cell1.innerHTML = student.subject;
        cell2.innerHTML = student.day;
        cell3.innerHTML = student.time;
        cell4.innerHTML = student.room;
        cell5.innerHTML = student.instructor;

    });
}

initializeTable();