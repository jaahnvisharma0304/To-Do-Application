const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");

function addTask() {
    if (inputBox.value === '') {
        alert("No task to add!");
    } else {
        let li = document.createElement("li");
        let taskId = `item${list.children.length + 1}`;

        li.innerHTML = `
            <input type="checkbox" id="${taskId}" />
            <label for="${taskId}"></label>
            ${inputBox.value}
        `;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '<ion-icon name="close-outline"></ion-icon>'
        li.appendChild(span);

        span.addEventListener('click', function() {
            list.removeChild(li);
        });
        
        inputBox.value = '';
    }
}
