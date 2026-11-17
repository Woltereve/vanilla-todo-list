// Initialize the application once the DOM content is fully loaded


document.addEventListener('DOMContentLoaded', () => {
	const newTodo = document.querySelector(`#new-todo`);
	const addTodo = document.querySelector(`#add-todo`);
	const todoList = document.querySelector(`#todo-list`);
	

	const item = document.createElement('li');
	item.classList.add ('todo-item');

	const label =document.createElement('span');
	label.textContent = 'Ma première tâche';
	item.append(label);
	todoList.append(item);

	const action = document.createElement('div');
	action.classList.add('todo-actions');
	item.append(action);

});


