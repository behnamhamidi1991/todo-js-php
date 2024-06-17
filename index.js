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
}

// Event Listeners
itemForm.addEventListener("submit", addItem);
