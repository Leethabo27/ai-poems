// DOM elements
const generateButton = document.getElementById("generateButton");
const clearButton = document.getElementById("clearButton");
const poemInput = document.getElementById("poemInput");
const poemResult = document.getElementById("poemResult");
const loadingSpinner = document.getElementById("loadingSpinner");

// API key and URL
const apiKey = "2c95a04203o5bat4acd327d7c89f7e04";
const apiUrl = "https://api.shecodes.io/ai/v1/generate";

// Function to show the loading spinner
function showLoadingSpinner() {
  loadingSpinner.classList.remove("hidden");
}

// Function to hide the loading spinner
function hideLoadingSpinner() {
  loadingSpinner.classList.add("hidden");
}

// Function to fetch a poem
async function fetchPoem(prompt) {
  try {
    // Show loading spinner
    showLoadingSpinner();

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
  } finally {
    // Hide loading spinner
    hideLoadingSpinner();
  }
}

// Clear input and result
function clearFields() {
  poemInput.value = "";
  poemResult.textContent = "";
}

// Event listener for the generate button
generateButton.addEventListener("click", () => {
  const prompt = poemInput.value.trim();
  if (prompt) {
    fetchPoem(prompt);
  } else {
    poemResult.textContent = "Please enter a theme or keyword!";
  }
});

// Event listener for the clear button
clearButton.addEventListener("click", clearFields);

// Allow pressing Enter to generate the poem
poemInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    generateButton.click();
  }
});

