const BACKEND_URL = "https://your-app.onrender.com";

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return await response.json();
}

function startLearning() {
    // Add your logic for smart UX Badges here
    // For example, check if the environment is noisy and no headphones are used, and filter out video types
}