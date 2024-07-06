const itemForm = document.getElementById("form");
const itemInput = document.getElementById("formInput");
const itemList = document.getElementById("itemList");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  if (newItem === "" || newItem === null) {
    alert("You must add a task!");
    return;
  }

  const li = document.createElement("li");
  const taskText = document.createTextNode(newItem);
  const p = document.createElement("p");

  p.appendChild(taskText);

  const buttonsContainer = createButtonContainer("button-container");

  li.appendChild(p);
  li.appendChild(buttonsContainer);

  itemList.appendChild(li);
  itemInput = "";
}

// BUTTONS

function createButtonContainer(classes) {
  const div = document.createElement("div");
  div.className = classes;

  const done = createDoneButton("doneBtn");
  const edit = createEditButton("editBtn");
  const del = createDeleteButton("deleteBtn");

  div.appendChild(done);
  div.appendChild(edit);
  div.appendChild(del);

  return div;
}

// DONE
function createDoneButton(classes) {
  const button = document.createElement("button");

  button.className = classes;

  const icon = createDoneIcon("bx bx-circle");
  button.appendChild(icon);
  return button;
}

function createDoneIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;

  return icon;
}

// EDIT
function createEditButton(classes) {
  const button = document.createElement("button");
  button.className = classes;

  const icon = createEditIcon("bx bx-edit");

  button.appendChild(icon);

  return button;
}

function createEditIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;

  return icon;
}

// DELETE
function createDeleteButton(classes) {
  const button = document.createElement("button");
  button.className = classes;

  const icon = createDeleteIcon("bx bx-message-square-x");
  button.appendChild(icon);
  return button;
}

function createDeleteIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;

  return icon;
}

// Event Listeners
itemForm.addEventListener("submit", addItem);
