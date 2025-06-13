let inputBox = document.querySelector("#input-box");
let listContainer = document.querySelector("#list-container");
let addBtn = document.querySelector(".add");
let clearBtn = document.querySelector(".clear");

addBtn.addEventListener("click", () => {
    if (inputBox.value === '')
        alert("You must write something.")
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
});

function hideClear() {
    if(listContainer.children.length === 0){
        clearBtn.style.display = 'none';
    }else{
        clearBtn.style.display = 'block';
    }
}


listContainer.addEventListener("click", (e) => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle("checked");
        saveData()
    } else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    hideClear();
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
    hideClear();
}


clearBtn.addEventListener("click", () => {
    listContainer.innerHTML = "";
    localStorage.removeItem("data");
    hideClear();
});

showData();