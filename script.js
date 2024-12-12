// Get references to the DOM elements
const generateButton = document.getElementById("generateButton");
const poemInput = document.getElementById("poemInput");
const poemResult = document.getElementById("poemResult");

// Your API key
const apiKey = "2c95a04203o5bat4acd327d7c89f7e04";

// Function to fetch a poem from the API
async function generatePoem() {
  const prompt = poemInput.value.trim();
  
  // Validate input
  if (!prompt) {
    poemResult.innerHTML = `<p class="error">Please enter a theme or word!</p>`;
    return;
  }

  // Show loading message
  poemResult.innerHTML = "<p>Generating your poem...</p>";

  // API URL
  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=poem&key=${apiKey}`;

  try {
    // Fetch the response from the API
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch poem. Please try again later.");
    }

    // Parse the response
    const data = await response.json();

    // Display the poem
    if (data && data.response) {
      poemResult.innerHTML = `<p>${data.response}</p>`;
    } else {
      throw new Error("Unexpected response from the API.");
    }
  } catch (error) {
    // Handle errors
    poemResult.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

// Add event listener to the button
generateButton.addEventListener("click", generatePoem);
