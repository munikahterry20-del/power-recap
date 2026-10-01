// Step 1: Select elements by their IDs
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResult = document.getElementById("searchResult");

// Step 2: Add click event listener to the search button
searchButton.addEventListener("click", function () {
  // Retrieve the value from the input field
  const userInput = searchInput.value;

  // Step 3: Check if input is empty
  if (userInput.trim() === "") {
    searchResult.textContent = "Please enter a topic to search.";
    searchResult.style.color = "#d32f2f"; // Optional: Warning color
  } else {
    // Step 4: Display search result
    searchResult.textContent = `You searched for: ${userInput}`;
    searchResult.style.color = "#333";
  }
});
