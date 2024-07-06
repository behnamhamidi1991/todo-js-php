const itemForm = document.getElementById("form");
const itemInput = document.getElementById("formInput");
const itemList = document.getElementById("itemList");
const clearAll = document.getElementById("clearAll");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  if (newItem === "") {
    alert("You must add a task!");
    return;
  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  // Add button
  const button = createBtn("deleteBtn");
  li.appendChild(button);

  itemList.appendChild(li);
  itemInput.value = "";

  saveItemsToLocalStorage();
  checkUI();
}

// ADD ITEMS TO LOCALSTORAGE
function saveItemsToLocalStorage() {
  const items = Array.from(itemList.children).map((li) => li.textContent);
  localStorage.setItem("items", JSON.stringify(items));
}

function loadItemsFromLocalStorage() {
  const storedItems = JSON.parse(localStorage.getItem("items")) || [];
  storedItems.forEach((item) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    const button = createBtn("deleteBtn");
    li.appendChild(button);
    itemList.appendChild(li);
  });
}

loadItemsFromLocalStorage();

function createBtn(classes) {
  const button = document.createElement("button");
  button.className = classes;

  const icon = createBtnIcon("bx bxs-trash-alt");
  button.appendChild(icon);

  return button;
}

function createBtnIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;

  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains("deleteBtn")) {
    e.target.parentElement.parentElement.remove();
  }
  saveItemsToLocalStorage();
  checkUI();
}

function removeAllItems() {
  if (window.confirm("Are you sure you want to delete all items?")) {
    while (itemList.firstChild) {
      itemList.firstChild.remove();
    }
  }
  saveItemsToLocalStorage();
  checkUI();
}

function checkUI() {
  if (itemList.children.length === 0) {
    clearAll.style.display = "none";
  } else {
    clearAll.style.display = "block";
  }
}

checkUI();

// Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearAll.addEventListener("click", removeAllItems);
