// Function to perform the search
function search() {
  var input, filter, textElements, i, txtValue, searchResults;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  textElements = document.querySelectorAll('body *:not(script)');
  searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';

  // Loop through all text elements and display those that match the search query
  for (i = 0; i < textElements.length; i++) {
    txtValue = textElements[i].textContent || textElements[i].innerText;
    if (txtValue.toUpperCase().includes(filter)) {
      var resultItem = document.createElement('p');
      resultItem.innerHTML = highlightMatches(txtValue, filter);
      searchResults.appendChild(resultItem);
    }
  }

  if (searchResults.childElementCount === 0) {
    var noResultsItem = document.createElement('p');
    noResultsItem.textContent = 'No results found.';
    searchResults.appendChild(noResultsItem);
  }
}

// Function to highlight matches in the text
function highlightMatches(text, query) {
  var regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<span class="highlighted">$1</span>');
}

// Attach an event listener to the search button
document.getElementById('searchButton').addEventListener('click', search);
