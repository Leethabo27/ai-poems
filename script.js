document.getElementById('poem-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const topic = document.getElementById('topic').value;

  // Display loading
  const poemElement = document.getElementById('poem');
  poemElement.textContent = 'Generating poem...';
  document.getElementById('result').style.display = 'block';

  // Fetch poem from SheCodes AI API
  try {
    const response = await fetch(`https://api.shecodes.io/ai/v1/generate?prompt=Write a beautiful poem about ${topic}&key=2c95a04203o5bat4acd327d7c89f7e04`);
    const data = await response.json();

    if (data.answer) {
      poemElement.textContent = data.answer.trim();
    } else {
      poemElement.textContent = 'Sorry, I could not generate a poem. Please try again.';
    }
  } catch (error) {
    poemElement.textContent = 'Sorry, something went wrong. Please try again later.';
    console.error(error);
  }
});




