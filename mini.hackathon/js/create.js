// AI Simulation Logic (same as before)
function simulateAI() {
    const desc = document.getElementById('reqDesc').value.toLowerCase();
    const aiBox = document.getElementById('aiBox');
    const tagContainer = document.getElementById('tagContainer');

    const keywords = {
        'react': 'Frontend',
        'node': 'Backend',
        'mongodb': 'Database',
        'design': 'UI/UX',
        'css': 'Styling',
        'bug': 'Debugging',
        'python': 'Data Science'
    };

    let foundTags = [];
    for (let key in keywords) {
        if (desc.includes(key)) foundTags.push(keywords[key]);
    }

    if (foundTags.length > 0) {
        aiBox.style.display = 'block';
        tagContainer.innerHTML = foundTags.map(t => `<span class="tag-pill">${t}</span>`).join('');
    } else {
        aiBox.style.display = 'none';
    }
}

// Handle Form Submission (Frontend Only)
document.getElementById('requestForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('reqTitle').value;
    const description = document.getElementById('reqDesc').value;
    const category = document.getElementById('reqCategory').value;

    const payload = { 
        title, 
        description, 
        category, 
        urgency: "Low"
    };

    // Save in localStorage (acting like fake database)
    let requests = JSON.parse(localStorage.getItem('requests')) || [];
    requests.push(payload);
    localStorage.setItem('requests', JSON.stringify(requests));

    alert("Request posted successfully! (Saved locally)");

    // Redirect
    window.location.href = 'index.html';
});