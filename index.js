const itemForm = document.getElementById("form");
const itemInput = document.getElementById("formInput");
const itemList = document.getElementById("itemList");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  if (newItem === "") {
    alert("You must add a task!");
    return;
  }

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  // Add button
  const button = createBtn('deleteBtn');
  li.appendChild(button);

  itemList.appendChild(li);
  itemInput.value = '';
}

function createBtn (classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createBtnIcon('bx bxs-trash-alt')
  button.appendChild(icon);

  return button;
}

function createBtnIcon (classes) {
  const icon = document.createElement('i');
  icon.className = classes;

  return icon;
}

// Event Listeners
itemForm.addEventListener("submit", addItem);

