const feed = document.getElementById('exploreFeed');

// Dummy data for visual matching (Replace with API call later)
const requests = [
    {
        title: "Need help making my portfolio responsive before demo day",
        category: "Web Development",
        urgency: "High",
        status: "Solved",
        desc: "My HTML/CSS portfolio breaks on tablets and I need layout guidance before tomorrow evening.",
        skills: ["HTML/CSS", "Responsive", "Portfolio"],
        user: "Sara Noor",
        loc: "Karachi"
    },
    {
        title: "Looking for Figma feedback on a volunteer event poster",
        category: "Design",
        urgency: "Medium",
        status: "Open",
        desc: "I have a draft poster for a campus community event and want sharper hierarchy, spacing, and CTA copy.",
        skills: ["Figma", "Poster", "Design Review"],
        user: "Ayesha Khan",
        loc: "Lahore"
    }
];

function renderExplore() {
    feed.innerHTML = requests.map(item => `
        <div class="explore-card">
            <div class="card-tags">
                <span class="tag tag-web">${item.category}</span>
                <span class="tag tag-high">${item.urgency}</span>
                <span class="tag tag-solved">${item.status}</span>
            </div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-desc">${item.desc}</p>
            
            <div class="skill-pills">
                ${item.skills.map(s => `<span class="pill">${s}</span>`).join('')}
            </div>

            <div class="card-footer">
                <div>
                    <div class="author-name">${item.user}</div>
                    <div class="author-meta">${item.loc} • 1 helper interested</div>
                </div>
                <button class="btn-details">Open details</button>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderExplore);