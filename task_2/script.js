document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const categorySelect = document.getElementById('category-select');
    const dueDateInput = document.getElementById('due-date');
    const prioritySelect = document.getElementById('priority-select');

    const taskText = taskInput.value.trim();
    const category = categorySelect.value;
    const dueDate = dueDateInput.value;
    const priority = prioritySelect.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <span>${taskText} (Category: ${category}, Due: ${dueDate}, Priority: ${priority})</span>
        <div>
            <button class="complete-button">✓</button>
            <button class="delete-button">✗</button>
        </div>
    `;

    document.getElementById('task-list').appendChild(taskItem);

    taskInput.value = '';
    categorySelect.value = 'work';
    dueDateInput.value = '';
    prioritySelect.value = 'low';

    taskItem.querySelector('.complete-button').addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskItem.querySelector('.delete-button').addEventListener('click', function() {
        taskItem.remove();
    });
});
