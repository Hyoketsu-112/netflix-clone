        // Sample data for content cards
        const contentData = [
            {
                title: "Stranger Things",
                year: "2016",
                rating: "TV-14",
                duration: "5 Seasons",
                description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
                image: "https://i.pinimg.com/236x/11/ee/9c/11ee9ce236f8781d441082b4ed14308b.jpg"
            },
            {
                title: "The Crown",
                year: "2016",
                rating: "TV-MA",
                duration: "5 Seasons",
                description: "Follows the political rivalries and romance of Queen Elizabeth II's reign.",
                image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
            },
            {
                title: "Money Heist",
                year: "2017",
                rating: "TV-MA",
                duration: "5 Parts",
                description: "An unusual group of robbers attempt to carry out the most perfect robbery.",
                image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            },
            {
                title: "Breaking Bad",
                year: "2008",
                rating: "TV-MA",
                duration: "5 Seasons",
                description: "A chemistry teacher diagnosed with cancer turns to manufacturing drugs.",
                image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
                title: "The Queen's Gambit",
                year: "2020",
                rating: "TV-MA",
                duration: "1 Season",
                description: "Orphaned chess prodigy Beth Harmon struggles with addiction.",
                image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
                title: "Narcos",
                year: "2015",
                rating: "TV-MA",
                duration: "3 Seasons",
                description: "Chronicles the rise of the cocaine trade in Colombia.",
                image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
            },
            {
                title: "The Witcher",
                year: "2019",
                rating: "TV-MA",
                duration: "3 Seasons",
                description: "Geralt of Rivia, a mutated monster-hunter for hire.",
                image: "https://images.unsplash.com/photo-1595769812725-4c6564f7528b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
                title: "Black Mirror",
                year: "2011",
                rating: "TV-MA",
                duration: "5 Seasons",
                description: "An anthology series exploring a twisted, high-tech world.",
                image: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            }
        ];

        // Function to create a content card
        function createCard(data, index) {
            return `
                <div class="content-card" data-index="${index}">
                    <img src="${data.image}" alt="${data.title}">
                    <div class="card-overlay">
                        <h3 class="card-title">${data.title}</h3>
                        <div class="card-info">
                            <span>${data.year}</span>
                            <span>${data.rating}</span>
                            <span>${data.duration}</span>
                        </div>
                        <p class="card-description">${data.description}</p>
                        <div class="card-buttons">
                            <button class="card-btn play-btn" data-index="${index}">
                                <i class="fas fa-play"></i>
                            </button>
                            <button class="card-btn add-btn" data-index="${index}">
                                <i class="fas fa-plus"></i>
                            </button>
                            <button class="card-btn like-btn" data-index="${index}">
                                <i class="fas fa-thumbs-up"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // Function to populate content rows
        function populateRows() {
            const trendingRow = document.getElementById('trending-row');
            const popularRow = document.getElementById('popular-row');
            const mylistRow = document.getElementById('mylist-row');
            
            // Clear existing content
            trendingRow.innerHTML = '';
            popularRow.innerHTML = '';
            mylistRow.innerHTML = '';
            
            // Add cards to each row
            contentData.forEach((item, index) => {
                trendingRow.innerHTML += createCard(item, index);
                popularRow.innerHTML += createCard(contentData[(index + 2) % contentData.length], index);
                
                // Only add some items to "My List"
                if (index < 4) {
                    mylistRow.innerHTML += createCard(contentData[(index + 4) % contentData.length], index);
                }
            });
            
            // Add event listeners to cards and buttons
            addCardEventListeners();
        }

        // Function to add event listeners to cards
        function addCardEventListeners() {
            // Card hover effect
            const cards = document.querySelectorAll('.content-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.zIndex = '10';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.zIndex = '1';
                });
                
                // Click to open modal
                card.addEventListener('click', function(e) {
                    if (!e.target.classList.contains('card-btn')) {
                        const index = this.getAttribute('data-index');
                        openModal(index);
                    }
                });
            });
            
            // Play button
            document.querySelectorAll('.play-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const index = this.getAttribute('data-index');
                    openModal(index);
                });
            });
            
            // Add to list button
            document.querySelectorAll('.add-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const index = this.getAttribute('data-index');
                    const title = contentData[index].title;
                    
                    // Toggle button state
                    const icon = this.querySelector('i');
                    if (icon.classList.contains('fa-plus')) {
                        icon.classList.remove('fa-plus');
                        icon.classList.add('fa-check');
                        this.style.backgroundColor = 'var(--netflix-red)';
                        showNotification(`"${title}" added to My List`);
                    } else {
                        icon.classList.remove('fa-check');
                        icon.classList.add('fa-plus');
                        this.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                        showNotification(`"${title}" removed from My List`);
                    }
                });
            });
            
            // Like button
            document.querySelectorAll('.like-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const icon = this.querySelector('i');
                    if (icon.classList.contains('fa-thumbs-up')) {
                        icon.classList.remove('fa-thumbs-up');
                        icon.classList.add('fa-heart');
                        this.style.backgroundColor = 'var(--netflix-red)';
                    } else {
                        icon.classList.remove('fa-heart');
                        icon.classList.add('fa-thumbs-up');
                        this.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    }
                });
            });
        }

        // Modal functionality
        const modal = document.getElementById('video-modal');
        const modalVideo = document.getElementById('modal-video');
        const closeModal = document.getElementById('close-modal');

        function openModal(index) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Reset video to beginning
            modalVideo.currentTime = 0;
            modalVideo.play();
        }

        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            modalVideo.pause();
        });

        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                modalVideo.pause();
            }
        });

        // Header scroll effect
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Notification function
        function showNotification(message) {
            // Remove existing notification if present
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) {
                existingNotification.remove();
            }
            
            // Create new notification
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            notification.style.display = 'block';
            
            document.body.appendChild(notification);
            
            // Remove notification after animation
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 3000);
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            populateRows();
            
            // Add click event to hero buttons
            document.querySelector('.btn-primary').addEventListener('click', function() {
                openModal(0);
            });
            
            document.querySelector('.btn-secondary').addEventListener('click', function() {
                const card = document.querySelector('.content-card');
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Add a highlight effect to the first card
                card.style.boxShadow = '0 0 0 3px var(--netflix-red)';
                setTimeout(() => {
                    card.style.boxShadow = '';
                }, 2000);
            });
        });