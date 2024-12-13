// Select DOM elements
const poemInput = document.getElementById('poemInput');
const generateButton = document.getElementById('generateButton');
const clearButton = document.getElementById('clearButton');
const loadingSpinner = document.getElementById('loadingSpinner');
const poemResult = document.getElementById('poemResult');

// Function to generate a random poem
const generatePoem = () => {
  const topic = poemInput.value.trim();

  // Validate input
  if (!topic) {
    alert('Please enter a theme or keyword!');
    return;
  }

  // Show loading spinner
  loadingSpinner.classList.remove('hidden');
  poemResult.innerHTML = '';

  // Simulate a delay for loading spinner
  setTimeout(() => {
    loadingSpinner.classList.add('hidden');
    
    // Generate a simple poem based on the topic
    const poemLines = [
      `Oh ${topic}, how you inspire,`,
      `A spark of thought, a burning fire.`,
      `With every word, you paint the skies,`,
      `A world of wonder before our eyes.`,
      '',
      `Through shadows dark and mornings bright,`,
      `You lead us gently toward the light.`,
      `Oh ${topic}, you're a work of art,`,
      `A beating rhythm within the heart.`
    ];

    // Display the poem
    poemResult.innerHTML = `<h2>Your Poem:</h2><p>${poemLines.join('<br>')}</p>`;
  }, 1000); // Simulates a 1-second "loading" delay
};

// Function to clear input and result
const clearFields = () => {
  poemInput.value = '';
  poemResult.innerHTML = '';
};

// Event Listeners
generateButton.addEventListener('click', generatePoem);
clearButton.addEventListener('click', clearFields);



