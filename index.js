var uElement = document.getElementById("todoItemsContainer");
let addbutton = document.getElementById("addtodobutton");

function statuschange(checkboxid, labelid) {
    let ch = document.getElementById(checkboxid);
    let le = document.getElementById(labelid);
    le.classList.toggle("checked");
}



function gettlfls() {
    let jsonobject = localStorage.getItem("todoList");
    let parsedjson = JSON.parse(jsonobject);
    if (parsedjson === null) {
        return [];
    } else {
        return parsedjson;
    }
    console.log(parsedjson);
}
let todoList = gettlfls();

function deletelist(uElement, listid) {
    let listelement = document.getElementById(listid);
    uElement.removeChild(listelement);
    let deleteIndex = todoList.findIndex(function(todo) {

    })
}

function createandappend(item) {
    var checkboxid = "checkbox" + item['uniqueno'];
    var labelid = "label" + item['uniqueno'];
    var deleteid = "delete" + item['uniqueno'];
    var listid = "list" + item['uniqueno'];
    let liElement = document.createElement("li");
    liElement.classList.add("todo-item-container", "d-flex", "flex-row");
    liElement.id = listid;
    uElement.appendChild(liElement);
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "checkbox");
    inputElement.setAttribute("id", checkboxid);
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        statuschange(checkboxid, labelid);
    };
    liElement.appendChild(inputElement);
    let divElement = document.createElement("div");
    divElement.classList.add("d-flex", "flex-row", "label-container");
    liElement.appendChild(divElement);
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxid);
    labelElement.id = labelid;
    labelElement.classList.add("checkbox-label");
    labelElement.innerText = item.text;
    divElement.appendChild(labelElement);
    let deleteiconcontainer = document.createElement("div");
    deleteiconcontainer.classList.add("delete-icon-container");
    let deleteicon = document.createElement("i");
    deleteicon.classList.add("fa-solid", "fa-trash", "delete-icon");
    deleteicon.id = "deleteid";
    deleteiconcontainer.appendChild(deleteicon);
    divElement.appendChild(deleteiconcontainer);
    deleteicon.onclick = function() {
        deletelist(uElement, listid);
    };
}
for (let item of todoList) {
    createandappend(item);
}
let userInput = document.getElementById("todoUserInput");
let todoscount = 0;
userInput.placeholder = "what needs to be done ?"

function addnewtodoitem() {
    todoscount = todoscount + 1;
    if (userInput.value === "") {
        alert("Enter a valid text");
        return;
    }
    let newtodo = {
        text: userInput.value,
        uniqueno: todoscount + 1
    };
    todoList.push(newtodo);
    createandappend(newtodo);
    userInput.value = "";
    console.log(todoList);
}
addbutton.onclick = function() {
    addnewtodoitem();
}
let saveButton = document.getElementById("saveButton");
saveButton.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}
