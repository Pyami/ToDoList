var removeAllBtn = document.getElementById('clearAll');
const saveBtn = document.getElementById('save');
const taskCont = document.getElementById('tasks');

saveBtn.addEventListener('click', create);
document.addEventListener('keypress', e => {
    if (e.keyCode == 13) {
        create()
    }
})

function elementCreation() {
    // creating elements
    var input = document.getElementById('input');

    var task = document.createElement('div')
    task.classList.add('task');

    var item = document.createElement('div')
    item.classList.add('item');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        name.style.textDecoration = 'line-through'
        checkbox.setAttribute('disabled', true)
    })

    var name = document.createElement('p')
    name.classList.add('task-name');
    name.value = input.value;
    name.innerHTML = name.value;

    var btnCont = document.createElement('div');
    btnCont.classList.add('btn-cont');

    var editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'btn edit')

    var pencil = document.createElement('i');
    pencil.setAttribute('class', 'fa fa-pencil text-success')

    var deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'btn delete')

    var trash = document.createElement('i');
    trash.setAttribute('class', 'fa fa-trash text-danger')

    // appending

    editBtn.appendChild(pencil);
    deleteBtn.appendChild(trash);
    btnCont.appendChild(editBtn);
    btnCont.appendChild(deleteBtn);
    item.appendChild(checkbox);
    item.appendChild(name);
    task.appendChild(item);
    task.appendChild(btnCont);
    taskCont.appendChild(task);

    // editing
    editBtn.addEventListener('click', () => {
        input.value = name.value;
    })

    // deleteing
    deleteBtn.addEventListener('click', () => {
        editBtn.removeChild(pencil);
        deleteBtn.removeChild(trash);
        btnCont.removeChild(editBtn);
        btnCont.removeChild(deleteBtn);
        item.removeChild(checkbox);
        item.removeChild(name);
        task.removeChild(item);
        task.removeChild(btnCont);
        taskCont.removeChild(task);
    })


    removeAllBtn.addEventListener('click', () => {
        taskCont.removeChild(task)
    })
}

function create() {
    if (input.value != "") {
        elementCreation()
    }
    input.focus()
    input.value = ""
}