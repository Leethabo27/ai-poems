// Select DOM elements
const poemInput = document.getElementById('poemInput');
const generateButton = document.getElementById('generateButton');
const clearButton = document.getElementById('clearButton');
const loadingSpinner = document.getElementById('loadingSpinner');
const poemResult = document.getElementById('poemResult');

// API Key and Endpoint
const API_KEY = '2c95a04203o5bat4acd327d7c89f7e04'; // Replace with your valid key
const API_URL = 'https://api.shecodes.io/ai/v1/generate';

// Function to generate a poem
const generatePoem = async () => {
  const topic = poemInput.value.trim();

  // Validate input
  if (!topic) {
    alert('Please enter a theme or keyword!');
    return;
  }

  // Show loading spinner and clear previous result
  loadingSpinner.classList.remove('hidden');
  poemResult.innerHTML = '';

  try {
    // Send request to API
    const response = await fetch(`${API_URL}?prompt=Write a poem about ${encodeURIComponent(topic)}&key=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    // Parse and display the poem
    const data = await response.json();
    if (data.answer) {
      poemResult.innerHTML = `<h2>Your Poem:</h2><p>${data.answer}</p>`;
    } else {
      poemResult.innerHTML = '<p>Sorry, no poem was generated. Try again with a different topic!</p>';
    }
  } catch (error) {
    console.error('Error generating poem:', error);
    poemResult.innerHTML = '<p>Failed to generate a poem. Please try again later.</p>';
  } finally {
    // Hide loading spinner
    loadingSpinner.classList.add('hidden');
  }
};

// Function to clear input and result
const clearFields = () => {
  poemInput.value = '';
  poemResult.innerHTML = '';
};

// Event Listeners
generateButton.addEventListener('click', generatePoem);
clearButton.addEventListener('click', clearFields);


