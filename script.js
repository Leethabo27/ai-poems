// DOM elements
const generateButton = document.getElementById("generateButton");
const poemInput = document.getElementById("poemInput");
const poemResult = document.getElementById("poemResult");

// API key and URL
const apiKey = "2c95a04203o5bat4acd327d7c89f7e04";
const apiUrl = "https://api.shecodes.io/ai/v1/generate";

// Function to fetch a poem
async function fetchPoem(prompt) {
  try {
    // Show loading message
    poemResult.textContent = "Generating your poem...";

    // Fetch data from the API
    const response = await fetch(
      `${apiUrl}?prompt=${encodeURIComponent(prompt)}&context=poem&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch poem. Please try again.");
    }

    const data = await response.json();

    // Display the generated poem
    if (data.response) {
      poemResult.innerHTML = `<p>${data.response}</p>`;
    } else {
      poemResult.textContent = "No poem generated. Please try again.";
    }
  } catch (error) {
    // Handle errors
    poemResult.textContent = `Error: ${error.message}`;
  }
}

// Event listener for the button
generateButton.addEventListener("click", () => {
  const prompt = poemInput.value.trim();
  if (prompt) {
    fetchPoem(prompt);
  } else {
    poemResult.textContent = "Please enter a theme or keyword!";
  }
});

