const addBtn = document.querySelector(".addBtn");
const tbody = document.querySelector("tbody");
let oldValues = [];
let allow = true;

const orderRow = () => {
  const rows = [...document.querySelectorAll("tbody tr")];
  rows.map((row, key) => {
    row.querySelector("td").textContent = key + 1;
  });
};

const saveData = (e) => {
  const inputs = [...document.querySelectorAll("input")];
  inputs.map((input) => {
    input.parentElement.textContent = input.value;
  });

  e.target.textContent = "Düzəliş et";
  e.target.classList.remove("saveBtn");
  e.target.classList.add("editBtn");
  e.target.removeEventListener("click", saveData);
  e.target.addEventListener("click", editData);

  e.target.nextElementSibling.textContent = "Sil";
  e.target.nextElementSibling.classList.remove("cancelBtn");
  e.target.nextElementSibling.classList.add("deleteBtn");
  e.target.nextElementSibling.removeEventListener("click", cancelData);
  e.target.nextElementSibling.addEventListener("click", removeData);
  allow = true;
};

const editData = (e) => {
  oldValues.length = 0;
  const cells = [...e.target.closest("tr").querySelectorAll("td")].slice(1, 4);
  cells.map((td) => {
    const input = document.createElement("input");
    input.value = td.textContent;
    oldValues.push(td.textContent);
    td.textContent = "";
    td.append(input);
  });

  e.target.textContent = "Yadda saxla";
  e.target.classList.remove("editBtn");
  e.target.classList.add("saveBtn");
  e.target.removeEventListener("click", editData);
  e.target.addEventListener("click", saveData);
  e.target.nextElementSibling.textContent = "Ləğv et";
  e.target.nextElementSibling.classList.remove("deleteBtn");
  e.target.nextElementSibling.classList.add("cancelBtn");
  e.target.nextElementSibling.removeEventListener("click", removeData);
  e.target.nextElementSibling.addEventListener("click", cancelData);
};

const cancelData = (e) => {
  console.log(oldValues);
  const inputs = [...document.querySelectorAll("input")];
  inputs.map((input, key) => {
    input.parentElement.textContent = oldValues[key];
  });

  e.target.textContent = "Sil";
  e.target.classList.remove("cancelBtn");
  e.target.classList.add("deleteBtn");
  e.target.removeEventListener("click", cancelData);
  e.target.addEventListener("click", removeData);
  e.target.previousElementSibling.textContent = "Düzəliş et";
  e.target.previousElementSibling.classList.remove("saveBtn");
  e.target.previousElementSibling.classList.add("editBtn");
  e.target.previousElementSibling.removeEventListener("click", saveData);
  e.target.previousElementSibling.addEventListener("click", editData);
};

const removeData = (e) => {
  e.target.closest("tr").remove();
  allow = true;
  orderRow();
};

addBtn.addEventListener("click", () => {
  if (!allow) {
    alert("Xaiş edirik boş xanaları doldurun...");
    return;
  }
  allow = false;
  const row = document.createElement("tr");
  const noTd = document.createElement("td");
  const nameTd = document.createElement("td");
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Ad");
  nameTd.append(nameInput);
  const surnameTd = document.createElement("td");
  const surnameInput = document.createElement("input");
  surnameInput.setAttribute("type", "text");
  surnameInput.setAttribute("placeholder", "Soyad");
  surnameTd.append(surnameInput);
  const ageTd = document.createElement("td");
  const ageInput = document.createElement("input");
  ageInput.setAttribute("type", "number");
  ageInput.setAttribute("placeholder", "Yaş");
  ageTd.append(ageInput);
  const optionsTd = document.createElement("td");
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Yadda saxla";
  saveBtn.classList.add("saveBtn");
  saveBtn.addEventListener("click", saveData);
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Sil";
  cancelBtn.classList.add("deleteBtn");
  cancelBtn.addEventListener("click", removeData);
  optionsTd.append(saveBtn, cancelBtn);
  row.append(noTd, nameTd, surnameTd, ageTd, optionsTd);
  tbody.append(row);
  orderRow();
});