// Initialize the application once the DOM content is fully loaded

document.addEventListener('DOMContentLoaded', () => {
	const newTodo = document.querySelector(`#new-todo`);
	const addTodo = document.querySelector(`#add-todo`);
	const todoList = document.querySelector(`#todo-list`);

	function addToItem(text) {
		const item = document.createElement('li');
		item.classList.add('todo-item');

		if (text.trim() === '') {
			return;
		}

		const label = document.createElement('span');
		label.textContent = text;
		item.append(label);
		todoList.append(item);

		const action = document.createElement('div');
		action.classList.add('todo-actions');
		item.append(action);

		const checkButton = document.createElement('button');
		checkButton.classList.add('action-check');
		checkButton.textContent = 'Terminée';
		action.append(checkButton);

		const deleteButton = document.createElement('button');
		deleteButton.classList.add('action-delete');
		deleteButton.textContent = 'Supprimer';
		action.append(deleteButton);

		newTodo.value = '';

		newTodo.addEventListener('keydown', (event) => {
			if (event.key === 'Enter') {
				addToItem(newTodo.value);
			}
		});
	}

	addTodo.addEventListener('click', () => {
		addToItem(newTodo.value);
	});
});
