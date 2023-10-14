document.addEventListener('DOMContentLoaded', function () {
    const eventForm = document.getElementById('event-form');
    const eventList = document.getElementById('event-list');
    let isEditing = false; // Track if we're in edit mode
    let eventToEdit = null; // Store the event being edited

    eventForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (isEditing) {
            // Handle saving changes when in edit mode
            const eventName = document.getElementById('event-name').value;
            const startDate = document.getElementById('start-date').value;
            const endDate = document.getElementById('end-date').value;
            const description = document.getElementById('description').value;

            // Update the event card with edited information
            eventToEdit.querySelector('h3').textContent = eventName;
            eventToEdit.querySelector('.start-date').textContent = `Start Date: ${startDate}`;
            eventToEdit.querySelector('.end-date').textContent = `End Date: ${endDate}`;
            eventToEdit.querySelector('.description').textContent = `Description: ${description}`;

            // Reset the form and exit edit mode
            eventForm.reset();
            isEditing = false;
            document.querySelector('button[type="submit"]').textContent = 'Add Event';
        } else {
            // Create a new event card
            const eventName = document.getElementById('event-name').value;
            const startDate = document.getElementById('start-date').value;
            const endDate = document.getElementById('end-date').value;
            const description = document.getElementById('description').value;

            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');
            eventCard.innerHTML = `
                <h3>${eventName}</h3>
                <p class="start-date"><strong>Start Date:</strong> ${startDate}</p>
                <p class="end-date"><strong>End Date:</strong> ${endDate}</p>
                <p class="description"><strong>Description:</strong> ${description}</p>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;

            // Handle the edit button click
            const editButton = eventCard.querySelector('.edit-button');
            editButton.addEventListener('click', function () {
                isEditing = true;
                eventToEdit = eventCard;
                document.getElementById('event-name').value = eventName;
                document.getElementById('start-date').value = startDate;
                document.getElementById('end-date').value = endDate;
                document.getElementById('description').value = description;
                document.querySelector('button[type="submit"]').textContent = 'Save';
            });

            // Handle the delete button click
            const deleteButton = eventCard.querySelector('.delete-button');
            deleteButton.addEventListener('click', function () {
                const confirmDelete = confirm('Are you sure?');
                if (confirmDelete) {
                    eventCard.remove();
                }
            });

            eventList.appendChild(eventCard);
            eventForm.reset();
        }
    });
});
