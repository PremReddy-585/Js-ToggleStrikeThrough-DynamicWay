let checkBoxWithLabelContainerEl = document.getElementById("checkBoxWithLabelContainer");

let checboxId = "checkbox";
let labelId = "Label";

function onCheckboxStatusChange(){
    checkBoxWithLabelEl.classList.add("strike-through");

}

let checkboxInputEl = document.createElement("input");
checkboxInputEl.type = "checkbox";
checkboxInputEl.id = checboxId;

checkboxInputEl = function(){
    onCheckboxStatusChange()
};

checkBoxWithLabelContainerEl.appendChild(checkboxInputEl);

let checkBoxWithLabelEl = document.createElement("label");
