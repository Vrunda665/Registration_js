var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        confirm('Form Successfully Submitted... Please Verify your details which are shown below...');
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    var formData = {};
    formData["un"] = document.getElementById("un").value;
    formData["ln"] = document.getElementById("ln").value;
    formData["pw"] = document.getElementById("pw").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["time"] = document.getElementById("time").value;
    formData["age"] = document.getElementById("age").value;
    formData["f"] = document.getElementById("f").value;
    formData["m"] = document.getElementById("m").value;
    formData["no"] = document.getElementById("no").value;
    formData["mail"] = document.getElementById("mail").value;
    formData["add"] = document.getElementById("add").value;
    formData["dance"] = document.getElementById("dance").value;
    formData["sing"] = document.getElementById("sing").value;
    formData["other"] = document.getElementById("other").value;
    formData["photo"] = document.getElementById("photo").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("regList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.un;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.mail;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.no;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.dob;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.age;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("un").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("no").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("ln").value = "";
    document.getElementById("pw").value = "";
    document.getElementById("time").value = "";
    document.getElementById("age").value = "";    
    document.getElementById("add").value = "";
    document.getElementById("range").value = "";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("un").value = selectedRow.cells[0].innerHTML;
    document.getElementById("mail").value = selectedRow.cells[1].innerHTML;
    document.getElementById("no").value = selectedRow.cells[2].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[3].innerHTML;
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.un;
    selectedRow.cells[1].innerHTML = formData.mail;
    selectedRow.cells[2].innerHTML = formData.no;
    selectedRow.cells[3].innerHTML = formData.dob;
    selectedRow.cells[4].innerHTML = formData.age;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("regList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("un").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}