document.addEventListener('DOMContentLoaded', () => {
    // 1. Check if token exists
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'auth.html';
        return;
    }

    // 2. Load dummy requests (no backend)
    loadRequests();
});

// Dummy data (frontend only)
const requests = [
    {
        title: "Fix responsive navbar issue",
        category: "Web Dev",
        tags: ["HTML", "CSS", "Responsive"]
    },
    {
        title: "Need help with MongoDB connection",
        category: "Backend",
        tags: ["Node.js", "MongoDB"]
    },
    {
        title: "UI feedback for mobile app design",
        category: "Design",
        tags: ["Figma", "UI/UX"]
    }
];

function loadRequests() {
    renderCards(requests);
}

function renderCards(requests) {
    const feed = document.getElementById('requestFeed');
    if (!feed) return;

    feed.innerHTML = '';

    requests.forEach(req => {
        const card = `
            <div class="request-card">
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <span class="status-badge">${req.category}</span>
                    <span style="font-size: 12px; color: #999;">Just now</span>
                </div>
                <h3 style="margin: 0 0 10px 0;">${req.title}</h3>
                <div style="margin-bottom: 20px;">
                    ${req.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
                <button class="btn-primary" style="width: 100%; padding: 10px; font-size: 14px; background: #f3f4f6; color: var(--text-dark);">
                    View Details
                </button>
            </div>
        `;
        feed.innerHTML += card;
    });
}

function logout() {
    localStorage.clear();
    window.location.href = 'auth.html';
}