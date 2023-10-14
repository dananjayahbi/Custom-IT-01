document.addEventListener('DOMContentLoaded', function () {
    const feedbackCards = document.querySelector('.feedback-cards');
    const addFeedbackButton = document.getElementById('add-feedback-btn');
    const feedbackForm = document.getElementById('feedback-form');
    const submitFeedbackButton = document.getElementById('submit-feedback-btn');
    const cancelFeedbackButton = document.getElementById('cancel-feedback-btn');

    addFeedbackButton.addEventListener('click', () => {
        feedbackForm.classList.remove('hidden');
        resetForm(); // Clear form fields when showing the form
    });

    submitFeedbackButton.addEventListener('click', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('name').value;
        const reviewInput = document.getElementById('review').value;

        if (nameInput && reviewInput) {
            const editedCard = feedbackForm.getAttribute('data-edit-id');
            if (editedCard) {
                // If we are editing a card, update the existing card
                const card = document.getElementById(editedCard);
                card.querySelector('.feedback-card-name').textContent = nameInput;
                card.querySelector('.feedback-card-review').textContent = reviewInput;
            } else {
                // Otherwise, create a new card
                createFeedbackCard(nameInput, reviewInput);
            }

            feedbackForm.classList.add('hidden');
            resetForm(); // Clear form fields after submitting
        }
    });

    cancelFeedbackButton.addEventListener('click', () => {
        feedbackForm.classList.add('hidden');
        resetForm(); // Clear form fields when hiding the form
    });

    feedbackCards.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('edit-feedback-btn')) {
            // Populate the form with the card's values for editing
            const card = target.parentElement;
            const name = card.querySelector('.feedback-card-name').textContent;
            const review = card.querySelector('.feedback-card-review').textContent;

            document.getElementById('name').value = name;
            document.getElementById('review').value = review;

            feedbackForm.classList.remove('hidden');
            const cardId = card.getAttribute('id');
            feedbackForm.setAttribute('data-edit-id', cardId);
        } else if (target.classList.contains('delete-feedback-btn')) {
            if (confirm('Are you sure you want to delete this feedback?')) {
                // Delete the feedback card
                feedbackCards.removeChild(target.parentElement);
            }
        }
    });

    // Function to create a new feedback card
    function createFeedbackCard(name, review) {
        const card = document.createElement('div');
        card.className = 'feedback-card';
        const cardId = 'feedback-card-' + Date.now(); // Generate a unique ID for the card
        card.id = cardId;
        card.innerHTML = `
            <strong class="feedback-card-name">${name}</strong>
            <p class="feedback-card-review">${review}</p>
            <button class="edit-feedback-btn">Edit</button>
            <button class="delete-feedback-btn">Delete</button>
        `;

        const editButton = card.querySelector('.edit-feedback-btn');
        const deleteButton = card.querySelector('.delete-feedback-btn');
        editButton.style.backgroundColor = '#007BFF';
        editButton.style.color = '#fff';
        editButton.style.padding = '5px 10px';
        editButton.style.border = 'none';
        editButton.style.borderRadius = '5px';
        editButton.style.cursor = 'pointer';

        deleteButton.style.backgroundColor = '#dc3545';
        deleteButton.style.color = '#fff';
        deleteButton.style.padding = '5px 10px';
        deleteButton.style.border = 'none';
        deleteButton.style.borderRadius = '5px';
        deleteButton.style.cursor = 'pointer';

        feedbackCards.appendChild(card);
    }

    // Function to clear the form fields and reset data-edit-id attribute
    function resetForm() {
        document.getElementById('name').value = '';
        document.getElementById('review').value = '';
        feedbackForm.removeAttribute('data-edit-id');
    }
});
