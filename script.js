document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    add();
});

function add() {
    let input = document.getElementById("input");
    let todo = input.value.trim();
    if (todo !== "") {
        let list = document.getElementById("list");
        let item = document.createElement("li");
        item.innerHTML = `
            <section id="completed">
                <span>${todo}</span>
            </section>
            <div id="btn">
                <button onclick="edit(this)">Edit</button>
                <button onclick="cancel(this)">Cancel</button>
                <button onclick="complete(this)">Complete</button>
            </div>
        `;
        list.appendChild(item);
        input.value = "";
    }
}

function edit(button) {
    let item = button.parentElement.parentElement;
    let old = item.querySelector("span").innerText;
    let todo = prompt("Edit your task:", old);
    if (todo !== null && todo.trim() !== '') {
        item.querySelector("span").innerText = todo.trim();
    }
}

function cancel(button) {
    let item = button.parentElement.parentElement;
    item.remove();
}

function complete(button) {
    let item = button.parentElement.parentElement;
    let completed = document.createElement("p");
    completed.innerText = "Completed";
    item.querySelector("section").appendChild(completed);
    button.disabled = true;
}