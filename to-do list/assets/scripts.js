const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const taskText = document.getElementById('task-input');

    !taskText.value ? alert('Digite alguma task!') : adicionarTask(taskText.value);	
};

//função para acrescentar ao contador
function adicionarTask(textTask){
    const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(textTask);

    newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', textTask);
	newTask.setAttribute('id', textTask);

	taskLabel.setAttribute('for', textTask);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);

    form.reset();
}


