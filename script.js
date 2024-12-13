// Attach event listener to form submission
document.getElementById('poem-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get the user's input
  const topic = document.getElementById('topic').value.trim();

  // Display loading text
  const poemElement = document.getElementById('poem');
  poemElement.textContent = 'Generating poem...';
  document.getElementById('result').style.display = 'block';

  try {
    // Fetch data from the API
    const response = await fetch(
      `https://api.shecodes.io/ai/v1/generate?prompt=Write a beautiful poem about ${encodeURIComponent(
        topic
      )}&key=2c95a04203o5bat4acd327d7c89f7e04`
    );

    const data = await response.json();

    // Handle the response
    if (data.answer) {
      poemElement.textContent = data.answer.trim();
    } else {
      poemElement.textContent = 'Sorry, I could not generate a poem. Please try again.';
    }
  } catch (error) {
    poemElement.textContent = 'An error occurred. Please try again later.';
    console.error(error);
  }
});

// Attach event listener to clear button
document.getElementById('clearButton').addEventListener('click', () => {
  document.getElementById('topic').value = '';
  document.getElementById('result').style.display = 'none';
});
