// Add your API endpoint here
var API_ENDPOINT = "YOUR API KEY";

// AJAX POST request to save student data
document.getElementById("savestudent").onclick = function () {
    var inputData = {
        "studentid": $('#studentid').val(),
        "name": $('#name').val(),
        "class": $('#class').val(),
        "age": $('#age').val()
    };

    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data: JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("studentSaved").innerHTML = "Student Data Saved!";
        },
        error: function () {
            alert("Error saving student data.");
        }
    });
};

// AJAX GET request to retrieve all students
document.getElementById("getstudents").onclick = function () {
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#studentTable tbody').empty();
            jQuery.each(response, function (i, data) {
                $("#studentTable tbody").append(
                    `<tr>
                        <td>${data['studentid']}</td>
                        <td>${data['name']}</td>
                        <td>${data['class']}</td>
                        <td>${data['age']}</td>
                        <td><button class="btn btn-danger btn-sm" onclick="deleteStudent('${data['studentid']}')">Delete</button></td>
                    </tr>`
                );
            });
        },
        error: function () {
            alert("Error retrieving student data.");
        }
    });
};

// AJAX POST request to delete a student
function deleteStudent(studentId) {
    const payload = {
        body: JSON.stringify({ studentid: studentId })
    };

    $.ajax({
        url: API_ENDPOINT,
        type: 'DELETE',
        data: JSON.stringify(payload),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            alert("Student deleted successfully!");
            $("#getstudents").click(); // refresh the table
        },
        error: function (xhr) {
            console.error("Delete error:", xhr.responseText);
            alert("Error deleting student.");
        }
    });
}
