document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // Document Download Buttons
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would:
            // 1. Check if user needs to fill form first
            // 2. Track the download
            // 3. Then initiate download
            
            const docName = this.getAttribute('data-doc');
            // alert(`In a real implementation, this would download: ${docName}`);
            
            // Simulated download:
            const link = document.createElement('a');
            link.href = `docs/${docName}`;
            link.download = docName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });

    // Form Submission
    const downloadForm = document.getElementById('downloadForm');
    if (downloadForm) {
        downloadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Validate (simple validation)
            if (!name || !email) {
                alert('Please fill in all required fields');
                return;
            }
            
            // In a real implementation, you would:
            // 1. Send data to your server/email service
            // 2. Then trigger the download
            
            alert(`Thank you ${name}! Your download will begin shortly.`);
            
            // Simulated download of all documents:
            // This would be replaced with actual download logic
            // Could be a zip file or individual files
            
            // Reset form
            this.reset();
        });
    }

    // Parallax Effect Enhancement
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(function(element) {
            const speed = 0.5;
            const yPos = -(scrollPosition * speed);
            element.style.backgroundPosition = `center ${yPos}px`;
        });
        
        // Navbar scroll effect
        if (scrollPosition > 100) {
            document.querySelector('.navbar').style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            document.querySelector('.navbar').style.padding = '10px 0';
        } else {
            document.querySelector('.navbar').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            document.querySelector('.navbar').style.padding = '15px 0';
        }
    });

    // Initialize mobile menu display
    function handleResize() {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on load
});