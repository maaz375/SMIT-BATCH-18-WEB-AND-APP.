document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .nav-pill');

    // 1. Navbar Active State Management
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            document.querySelector('.nav-pill.active')?.classList.remove('active', 'nav-pill');
            link.classList.add('nav-pill', 'active');
        }
    });

    // 2. Create Request Form Handling (frontend only)
    const publishBtn = document.querySelector('.btn-primary');
    if (publishBtn && publishBtn.innerText === 'Publish request') {
        publishBtn.addEventListener('click', function(e) {
            e.preventDefault();

            const requestData = {
                title: document.querySelector('input[placeholder*="Need review"]').value,
                description: document.querySelector('textarea').value,
                tags: document.querySelector('input[placeholder*="JavaScript"]').value,
                category: document.querySelector('select').value,
                urgency: document.querySelectorAll('select')[1].value
            };

            // Ab yahan sirf data collect ho raha hai (no backend)
        });
    }

    // 3. Messaging System Logic (frontend only)
    const sendMsgBtn = document.querySelector('.send-btn');
    if (sendMsgBtn) {
        sendMsgBtn.addEventListener('click', function() {
            const recipient = document.querySelector('select').value;
            const messageBody = document.querySelector('textarea').value;

            if (!messageBody.trim()) return;

            const messageData = {
                to: recipient,
                text: messageBody,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            document.querySelector('textarea').value = ""; // Clear box
        });
    }

    // 4. Profile Update Logic (frontend only)
    const saveProfileBtn = document.querySelector('.save-btn');
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', function() {
            const profileData = {
                name: document.querySelectorAll('input')[0].value,
                location: document.querySelectorAll('input')[1].value,
                skills: document.querySelectorAll('input')[2].value,
                interests: document.querySelectorAll('input')[3].value
            };

            // Sirf data collect ho raha hai
        });
    }

    // 5. AI Suggestions Simulation (still frontend feature)
    const aiBtn = document.querySelector('.btn-secondary');
    if (aiBtn && aiBtn.innerText === 'Apply AI suggestions') {
        aiBtn.addEventListener('click', function() {
            const desc = document.querySelector('textarea');
            if (desc.value.length > 5) {
                desc.value = "REWRITTEN BY AI: " + desc.value + " (Optimized for clarity and technical accuracy).";
            }
        });
    }
});