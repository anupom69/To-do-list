const input = document.getElementById("inputBox")
const listContainer = document.querySelector(".list-container")

function addToList() {
    if (input.value != "") {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "❌";
        li.appendChild(span);
    }
    input.value = ''
    saveData()
}

listContainer.addEventListener("click", (elm)=>{
    if (elm.target.tagName == "LI") {
        elm.target.classList.toggle("checked");
    }
    else if (elm.target.tagName == "SPAN") {
        elm.target.parentElement.remove()
    }
    saveData()
})


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData() {
    listContainer.innerHTML = localStorage.getItem('data')
}

showData();
