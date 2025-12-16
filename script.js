
        // Theme Toggle Functionality
        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.querySelector('.theme-toggle');
            
            if (body.classList.contains('light-mode')) {
                body.classList.remove('light-mode');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                themeToggle.title = 'Switch to Light Mode';
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.add('light-mode');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                themeToggle.title = 'Switch to Dark Mode';
                localStorage.setItem('theme', 'light');
            }
        }

        // Load saved theme preference
        document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            const themeToggle = document.querySelector('.theme-toggle');
            
            if (savedTheme === 'light') {
                document.body.classList.add('light-mode');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                themeToggle.title = 'Switch to Dark Mode';
            } else {
                document.body.classList.remove('light-mode');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                themeToggle.title = 'Switch to Light Mode';
            }
        });

        // Smooth scroll for nav links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });

        // Scroll reveal animation
        const revealElements = document.querySelectorAll('.reveal');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        revealElements.forEach(element => observer.observe(element));

        // Update active nav link on scroll
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Project upload functionality
        function addProjectCard() {
            const title = prompt('Enter project title:');
            if (title) {
                const description = prompt('Enter project description:');
                const tech = prompt('Enter technologies (comma-separated):');
                
                const projectsGrid = document.querySelector('.projects-grid');
                const newCard = document.createElement('div');
                newCard.className = 'project-card reveal active';
                newCard.innerHTML = `
                    <h3 class="project-title"><i class="fas fa-cube"></i> ${title}</h3>
                    <p class="project-description">${description}</p>
                    <div class="project-tech">
                        ${tech.split(',').map(t => `<span class="tech-badge">${t.trim()}</span>`).join('')}
                    </div>
                    <p style="color: var(--text-gray); font-size: 0.9rem;">
                        ✓ Uploaded successfully
                    </p>
                `;
                projectsGrid.appendChild(newCard);
            }
        }

        // Add scroll animations to nav
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 5px 20px rgba(124, 58, 237, 0.2)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });

        // Resume Modal Functions
        function openResumeModal() {
            const modal = document.getElementById('resumeModal');
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        function closeResumeModal() {
            const modal = document.getElementById('resumeModal');
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }

        function downloadResume() {
            // Create a link to download the PDF
            const link = document.createElement('a');
            link.href = 'data:application/pdf;base64,JVBERi0xLjQKJeLjz9MNCjEgMCBvYmo8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PmVuZG9iagoyIDAgb2JqPDwvVHlwZS9QYWdlcwovS2lkc1szIDAgUl0vQ291bnQgMT4+ZW5kb2IKMyAwIG9iajw8L1R5cGUvUGFnZS9QYXJlbnQgMiAwIFIvUmVzb3VyY2VzPDwvRm9udDw8L0YxIDQgMCBSPj4+Pi9NZWRpYUJveFswIDAgNjEyIDc5Ml0vQ29udGVudHMgNSAwIFI+PmVuZG9iCjQgMCBvYmo8PC9UeXBlL0ZvbnQvU3VidHlwZS9UeXBlMS9CYXNlRm9udC9IZWx2ZXRpY2E+PmVuZG9iCjUgMCBvYmo8PC9MZW5ndGggOTAwPj5zdHJlYW0KQlQKL0YxIDEyIFRmCjUwIDcwMCBUZAooU0hVQkhSQU5TSFUgQUNIQVJZQSkgVGoKMCA1MCBURAooQnViaGFuZXN3YXIsIEluZGlhKSBUagowIDUwIFRECihzaHViaHJhbnNodWFjaGFyeWEyM0BnbWFpbC5jb20gfCArzKQ3MjA1MzEyMDIwKSBUagowIDUwIFRECihsaW5rZWRpbi5jb20vaW4vc2h1Ymhyyw6zdndTdsYWNoYXJ5YSB8IGdpdGh1Yi5jb20vU2h1YmhyYW5zaHVBY2hhcnlhKSBUagowIDEwMCBURAoKL0YxIDE0IFRmCigpIFRqCjAgNTAgVEQKCi9GMSA4IFRmCihQcm9maWxlIFN1bW1hcnkpIFRqCjAgMzAgVEQKClJlc3VsdC1kcml2ZW4gQ29tcHV0ZXIgU2NpZW5jZSBFbmdpbmVlcmluZyBzdHVkZW50IHBhc3Npb25hdGUgYWJvdXQgYnVpbGRpbmcgc2NhbGFibGUgYW5kIGRhdGEtZHJpdmVuIHN5c3RlbXMuCkVUCmVuZHN0cmVhbQplbmRvYgp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMDkgMDAwMDAgbiAKMDAwMDAwMDA1OCAwMDAwMCBuIAowMDAwMDAwMTE1IDAwMDAwIG4gCjAwMDAwMDAyMjcgMDAwMDAgbiAKMDAwMDAwMDMyNSAwMDAwMCBuIAp0cmFpbGVyPDwvU2l6ZSA2L1Jvb3QgMSAwIFI+PgpzdGFydHhyZWYKMTI2NQolJUVPRgo=';
            link.download = 'Shubhranshu_Acharya_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Close modal when clicking outside
        window.addEventListener('click', (event) => {
            const modal = document.getElementById('resumeModal');
            if (event.target === modal) {
                closeResumeModal();
            }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeResumeModal();
            }
        });

        // Detail Modal Functions
        function openDetailModal(type, title, subtitle, techs, details) {
            const modal = document.getElementById('detailModal');
            const detailContent = document.getElementById('detailContent');
            
            let htmlContent = `
                <div class="detail-header">
                    <h2>${title}</h2>
                    <button class="detail-close" onclick="closeDetailModal()">&times;</button>
                </div>
                <div class="detail-body">
            `;
            
            if (subtitle) {
                htmlContent += `
                    <div class="detail-section">
                        <div class="detail-section-header">
                            <div class="detail-section-icon"><i class="fas fa-info-circle"></i></div>
                            <div class="detail-section-title">Overview</div>
                        </div>
                        <p class="detail-subtitle">${subtitle}</p>
                    </div>
                `;
            }
            
            if (techs && techs.length > 0) {
                htmlContent += `
                    <div class="detail-section">
                        <div class="detail-section-header">
                            <div class="detail-section-icon"><i class="fas fa-code"></i></div>
                            <div class="detail-section-title">Technologies & Tools</div>
                        </div>
                        <div class="detail-techs">
                            ${techs.map(tech => `<span class="detail-tech-badge">${tech}</span>`).join('')}
                        </div>
                    </div>
                `;
            }
            
            if (details && details.length > 0) {
                // Organize details into sections based on keywords
                const topicDetails = [];
                const workDetails = [];
                const impactDetails = [];
                const resultDetails = [];
                
                details.forEach(detail => {
                    const lowerDetail = detail.toLowerCase();
                    if (lowerDetail.includes('develop') || lowerDetail.includes('built') || lowerDetail.includes('created') || lowerDetail.includes('implement')) {
                        workDetails.push(detail);
                    } else if (lowerDetail.includes('impact') || lowerDetail.includes('improve') || lowerDetail.includes('achiev') || lowerDetail.includes('received') || lowerDetail.includes('won') || lowerDetail.includes('earned')) {
                        impactDetails.push(detail);
                    } else if (lowerDetail.includes('result') || lowerDetail.includes('outcome') || lowerDetail.includes('accuracy') || lowerDetail.includes('recognition') || lowerDetail.includes('award')) {
                        resultDetails.push(detail);
                    } else {
                        topicDetails.push(detail);
                    }
                });
                
                // Topic Section
                if (topicDetails.length > 0) {
                    htmlContent += `
                        <div class="detail-section">
                            <div class="detail-section-header">
                                <div class="detail-section-icon"><i class="fas fa-lightbulb"></i></div>
                                <div class="detail-section-title">About</div>
                            </div>
                            <div class="detail-section-content">
                                ${topicDetails.map(detail => `<div class="detail-section-item">• ${detail}</div>`).join('')}
                            </div>
                        </div>
                    `;
                }
                
                // Work Section
                if (workDetails.length > 0) {
                    htmlContent += `
                        <div class="detail-section">
                            <div class="detail-section-header">
                                <div class="detail-section-icon"><i class="fas fa-wrench"></i></div>
                                <div class="detail-section-title">Work Done</div>
                            </div>
                            <div class="detail-section-content">
                                ${workDetails.map(detail => `<div class="detail-section-item">• ${detail}</div>`).join('')}
                            </div>
                        </div>
                    `;
                }
                
                // Impact Section
                if (impactDetails.length > 0) {
                    htmlContent += `
                        <div class="detail-section">
                            <div class="detail-section-header">
                                <div class="detail-section-icon"><i class="fas fa-star"></i></div>
                                <div class="detail-section-title">Impact & Achievements</div>
                            </div>
                            <div class="detail-section-content">
                                ${impactDetails.map(detail => `<div class="detail-section-item">• ${detail}</div>`).join('')}
                            </div>
                        </div>
                    `;
                }
                
                // Results Section
                if (resultDetails.length > 0) {
                    htmlContent += `
                        <div class="detail-section">
                            <div class="detail-section-header">
                                <div class="detail-section-icon"><i class="fas fa-trophy"></i></div>
                                <div class="detail-section-title">Results & Recognition</div>
                            </div>
                            <div class="detail-section-content">
                                ${resultDetails.map(detail => `<div class="detail-section-item">• ${detail}</div>`).join('')}
                            </div>
                        </div>
                    `;
                }
            }
            
            htmlContent += `</div>`;
            
            detailContent.innerHTML = htmlContent;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        function closeDetailModal() {
            const modal = document.getElementById('detailModal');
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }

        // Close detail modal when clicking outside
        window.addEventListener('click', (event) => {
            const modal = document.getElementById('detailModal');
            if (event.target === modal) {
                closeDetailModal();
            }
        });

        // Close detail modal on Escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeDetailModal();
            }
        });

        // Scroll animation observer
        const scrollAnimationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add scroll animation classes
                    entry.target.classList.add('in-view');
                    
                    // For section titles
                    if (entry.target.classList.contains('section-title')) {
                        entry.target.classList.add('scroll-in-view');
                    }
                    
                    // For grid items with staggered animation
                    if (entry.target.classList.contains('projects-grid') ||
                        entry.target.classList.contains('achievements-grid') ||
                        entry.target.classList.contains('certifications-grid')) {
                        const items = entry.target.querySelectorAll('.project-card, .achievement-card, .cert-card');
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('scroll-animate');
                                item.classList.add('in-view');
                            }, index * 100);
                        });
                    }
                    
                    // For skill tags
                    if (entry.target.classList.contains('skills-grid')) {
                        const skillItems = entry.target.querySelectorAll('.skill-tag');
                        skillItems.forEach((skill, index) => {
                            skill.classList.add('scroll-item');
                            setTimeout(() => {
                                skill.classList.add('in-view');
                            }, index * 80);
                        });
                    }
                    
                    // For about text
                    if (entry.target.classList.contains('about-text')) {
                        entry.target.classList.add('scroll-slide-left');
                        entry.target.classList.add('in-view');
                    }
                    
                    // For contact items
                    if (entry.target.classList.contains('contact-item')) {
                        entry.target.classList.add('scroll-slide-left');
                        entry.target.classList.add('in-view');
                    }
                    
                    // For experience items
                    if (entry.target.classList.contains('experience-item')) {
                        entry.target.classList.add('scroll-animate');
                        entry.target.classList.add('in-view');
                    }
                    
                    // Don't observe again
                    scrollAnimationObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        // Observe all elements with scroll animation potential
        document.addEventListener('DOMContentLoaded', () => {
            // Observe section titles
            document.querySelectorAll('.section-title').forEach(el => {
                scrollAnimationObserver.observe(el);
            });
            
            // Observe grid containers
            document.querySelectorAll('.projects-grid, .achievements-grid, .certifications-grid, .skills-grid').forEach(el => {
                scrollAnimationObserver.observe(el);
            });
            
            // Observe about text
            document.querySelectorAll('.about-text').forEach(el => {
                scrollAnimationObserver.observe(el);
            });
            
            // Observe experience items
            document.querySelectorAll('.experience-item').forEach(el => {
                scrollAnimationObserver.observe(el);
            });
            
            // Observe contact items
            document.querySelectorAll('.contact-item').forEach(el => {
                scrollAnimationObserver.observe(el);
            });
        });
