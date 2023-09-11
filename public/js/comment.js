// Handle comment submission
document.getElementById('comment-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get the comment input and post_id from the button's data attribute
  const commentBody = document.querySelector('.commentInput').value;
  const post_id = document.querySelector('#comment-button').getAttribute('data-post-id');

  try {
    // Fetch the user_id from the HTML element
    const user_idElement = document.querySelector('#user-id');
    const user_id = user_idElement ? user_idElement.getAttribute('data-user-id') : null;

    if (!user_id) {
      // If user_id is not available, handle the error gracefully
      console.error('User ID not found.');
      return;
    }

    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ commentBody, post_id, user_id }), // Include user_id
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Comment successfully created, refresh the page or update the comments section
      location.reload();
    } else {
      // Handle error
      console.error('Comment submission failed');
    }
  } catch (error) {
    console.error('Comment submission failed', error);
  }
});
