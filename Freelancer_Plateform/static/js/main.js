// Main JavaScript for FreelanceHub

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('FreelanceHub loaded successfully!');
    
    // Initialize tooltips if Bootstrap is available
    if (typeof bootstrap !== 'undefined') {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add fade-in animation to cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
});

// Search functionality
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const searchTerm = searchInput.value.toLowerCase();
        console.log('Searching for:', searchTerm);
        // Add your search logic here
        // This would typically connect to your backend API
    }
}

// Filter jobs
function filterJobs() {
    console.log('Filtering jobs...');
    // Add filter logic here
    // This would filter based on selected checkboxes and options
}

// Load conversation in messages page
function loadConversation(userId) {
    console.log('Loading conversation with:', userId);
    // Add logic to load specific conversation
    // This would typically fetch messages from your backend
}

// Submit proposal form
const proposalForm = document.getElementById('proposalForm');
if (proposalForm) {
    proposalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Submitting proposal...');
        // Add proposal submission logic here
        // This would send data to your backend API
        alert('Proposal submitted successfully!');
    });
}

// Login form handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log('Login attempt:', email);
        // Add authentication logic here
        // This would connect to your Django backend
        // For demo purposes, redirect to dashboard
        window.location.href = 'dashboard.html';
    });
}

// Signup form handler
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        console.log('Signup attempt:', email);
        // Add registration logic here
        // This would create a new user in your Django backend
        // For demo purposes, redirect to dashboard
        window.location.href = 'dashboard.html';
    });
}

// Message form handler
const messageForm = document.getElementById('messageForm');
if (messageForm) {
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const messageInput = document.getElementById('messageInput');
        const messageText = messageInput.value.trim();
        
        if (messageText) {
            // Add message to chat
            addMessageToChat(messageText, true);
            messageInput.value = '';
            
            // Scroll to bottom
            const chatMessages = document.getElementById('chatMessages');
            if (chatMessages) {
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }
    });
}

// Add message to chat window
function addMessageToChat(message, isSent) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = isSent ? 'd-flex mb-3 justify-content-end' : 'd-flex mb-3';
    
    const currentTime = new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
    });
    
    if (isSent) {
        messageDiv.innerHTML = `
            <div class="text-end">
                <div class="bg-success text-white rounded p-3" style="max-width: 400px;">
                    <p class="mb-0">${message}</p>
                </div>
                <small class="text-muted">${currentTime}</small>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <img src="https://via.placeholder.com/40" class="rounded-circle me-2" width="40" height="40" alt="User">
            <div>
                <div class="bg-light rounded p-3" style="max-width: 400px;">
                    <p class="mb-0">${message}</p>
                </div>
                <small class="text-muted">${currentTime}</small>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
}

// Heart/Save job functionality
function toggleSaveJob(element) {
    const icon = element.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        icon.classList.add('text-danger');
        console.log('Job saved');
    } else {
        icon.classList.remove('fas', 'text-danger');
        icon.classList.add('far');
        console.log('Job unsaved');
    }
}

// Apply filters
function applyFilters() {
    console.log('Applying filters...');
    // Collect all checked filters
    const categories = [];
    const experienceLevels = [];
    
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        const id = checkbox.id;
        if (id.startsWith('cat')) {
            categories.push(checkbox.nextElementSibling.textContent);
        } else if (id.startsWith('exp')) {
            experienceLevels.push(checkbox.nextElementSibling.textContent);
        }
    });
    
    console.log('Categories:', categories);
    console.log('Experience Levels:', experienceLevels);
    
    // Add logic to filter jobs based on selections
    // This would typically reload the job list from your backend
}

// Clear all filters
function clearFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });
    console.log('Filters cleared');
    // Reload all jobs
}

// Sort jobs
function sortJobs(criteria) {
    console.log('Sorting by:', criteria);
    // Add sorting logic here
    // This would reorder the displayed jobs
}

// Update profile image
function updateProfileImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const profileImg = document.querySelector('.profile-image');
            if (profileImg) {
                profileImg.src = e.target.result;
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto dismiss after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Initialize star rating
function initStarRating() {
    const ratingContainers = document.querySelectorAll('.star-rating');
    ratingContainers.forEach(container => {
        const stars = container.querySelectorAll('.star');
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                const rating = index + 1;
                console.log('Rating:', rating);
                // Update visual state
                stars.forEach((s, i) => {
                    if (i < rating) {
                        s.classList.add('fas', 'text-warning');
                        s.classList.remove('far');
                    } else {
                        s.classList.add('far');
                        s.classList.remove('fas', 'text-warning');
                    }
                });
            });
        });
    });
}

// Export functions for use in HTML
window.handleSearch = handleSearch;
window.filterJobs = filterJobs;
window.loadConversation = loadConversation;
window.toggleSaveJob = toggleSaveJob;
window.applyFilters = applyFilters;
window.clearFilters = clearFilters;
window.sortJobs = sortJobs;
window.updateProfileImage = updateProfileImage;
window.showNotification = showNotification;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStarRating);
} else {
    initStarRating();
}

console.log('FreelanceHub JavaScript initialized');
