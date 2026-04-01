// Define an async function
async function fetchData() {
  try {
    // Await pauses until fetch resolves
    const response = await fetch('https://api.example.com/data');
    
    // Await pauses until response.json() resolves
    const data = await response.json();
    
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the async function
fetchData();
