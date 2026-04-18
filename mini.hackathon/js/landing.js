// landing.js (Frontend Only Version)

// No API URL needed anymore

function initLandingPage() {
    console.log("Helplytics Landing Page Initialized...");

    // Direct dummy data load (no backend)
    loadFeaturedRequests();

    // Setup buttons
    setupEventListeners();
}

function loadFeaturedRequests() {
    const feedContainer = document.getElementById('requestFeed');

    // Directly render dummy data
    renderDummyCards(feedContainer);
}

function renderCards(requests, container) {
    container.innerHTML = requests.map(req => `
        <div class="req-card">
            <div style="display: flex; gap: 8px; margin-bottom: 20px;">
                <span style="background: #e0f2f1; color: #00897b; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 700;">${req.category || 'Web Dev'}</span>
                <span style="background: #fee2e2; color: #ef4444; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 700;">${req.urgency || 'High'}</span>
                <span style="background: #f3f4f6; color: #374151; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 700;">Open</span>
            </div>
            
            <h3 style="font-size: 18px; font-weight: 800; margin-bottom: 12px; color: #111;">${req.title}</h3>
            <p style="color: #666; font-size: 14px; margin-bottom: 25px;">
                ${req.description}
            </p>
            
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f0f0f0; padding-top: 15px;">
                <div>
                    <div style="font-weight: 800; font-size: 14px;">${req.user || 'Anonymous'}</div>
                    <div style="color: #999; font-size: 11px;">Karachi • 1 helper</div>
                </div>
                <button onclick="window.location.href='auth.html'" class="btn-post" style="padding: 10px 18px; font-size: 12px;">
                    Open details
                </button>
            </div>
        </div>
    `).join('');
}

function renderDummyCards(container) {
    const dummyData = [
        { title: "Need help making my portfolio responsive", category: "Web Development", urgency: "High", description: "My HTML/CSS portfolio breaks on tablets and I need layout guidance before demo day.", user: "Ayesha Khan" },
        { title: "Looking for Figma feedback on a poster", category: "Design", urgency: "Medium", description: "I have a draft poster for a campus community event and want sharper hierarchy.", user: "Ali Raza" },
        { title: "Node.js MongoDB Auth troubleshooting", category: "Backend", urgency: "High", description: "Struggling with JWT token verification in my Todo application.", user: "Usman Tariq" }
    ];

    renderCards(dummyData, container);
}

function setupEventListeners() {
    const joinBtn = document.querySelector('.btn-join');
    if (joinBtn) {
        joinBtn.addEventListener('click', () => {
            window.location.href = 'auth.html';
        });
    }

    const demoBtn = document.querySelector('.btn-demo');
    if (demoBtn) {
        demoBtn.addEventListener('click', () => {
            // Optional: remove alert too if you want pure UI
            console.log("Demo started");
        });
    }
}

// Init
document.addEventListener('DOMContentLoaded', initLandingPage);