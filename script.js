document.addEventListener("DOMContentLoaded", function() {

    // Function to open modal with full details
    function openModal(details) {
        const fullDetailsContent = document.querySelector(".modal-content");
        // Populate the modal with full details
        fullDetailsContent.innerHTML = details;
        modal.style.display = "block";

        // Add event listener to close modal when mouse leaves modal content
        fullDetailsContent.addEventListener("mouseleave", () => {
            modal.style.display = "none";
        });
    }

    // Open the modal when the "Learn more about me here" text is clicked or hovered over
    document.querySelector(".learn-more").addEventListener("mouseover", openIntroModal);
    document.querySelector(".learn-more").addEventListener("click", openIntroModal);

    function openIntroModal() {
        const details = `
            <h2>More about K</h2>
            <ul>
                <li>I'm a results-driven Security leader with a proven track record of success in multinational cybersecurity trust organisations.</li>
                <li>✅ Proven track record of elevating performance excellence</li>
                <li>✅ Delivering exceptional results</li>
                <li>✅ Fostering positive relationships</li>
                <li>✅ Adept in implementing cutting-edge solutions</li>
                <li>✅ Contributing to digital resiliency</li>
                <li>✅ Driving operational excellence in Security management</li>
            </ul>
        `;
        openModal(details);
    }

    // Get the modal and the close button
    const modal = document.getElementById("fullDetailsModal");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Add event listeners to each minimized card for hover and click
    const minimizedCards = document.querySelectorAll(".minimized-card");
    minimizedCards.forEach((card, index) => {
        card.addEventListener("mouseenter", () => {
            // Simulate getting full details data (replace with your data)
            const fullDetails = `
                <h2>Security Engineer</h2>
                <h4>Fortune 500 Global Engineering Provider</h4>
                <ul>
                    <li>Led and managed the application security program, utilizing tools such as Snyk (SAST), Rapid7 (DAST), and Contrast-Assess (IAST) to ensure comprehensive coverage.</li>
                    <li>Provided guidance and mentorship to the application security team, fostering their growth and supporting their day-to-day activities and project work.</li>
                    <!-- Add other details -->
                </ul>
            `;
            openModal(fullDetails);
        });

        card.addEventListener("click", () => {
            // Simulate getting full details data (replace with your data)
            const fullDetails = `
                <h2>Security Engineer</h2>
                <h4>Fortune 500 Global Engineering Provider</h4>
                <ul>
                    <li>Led and managed the application security program, utilizing tools such as Snyk (SAST), Rapid7 (DAST), and Contrast-Assess (IAST) to ensure comprehensive coverage.</li>
                    <li>Provided guidance and mentorship to the application security team, fostering their growth and supporting their day-to-day activities and project work.</li>
                    <!-- Add other details -->
                </ul>
            `;
            openModal(fullDetails);
        });
    });

    // Close the modal when the user clicks on the close button
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close the modal when the user clicks outside the modal
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Function to show content based on sectionId
    function showContent(sectionId) {
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(btn => btn.classList.remove('active'));
        document.getElementById(sectionId + '-btn').classList.add('active');

        const contents = document.querySelectorAll('.content');
        contents.forEach(content => content.classList.remove('active'));
        document.getElementById(sectionId + '-content').classList.add('active');

        // Show or hide the intro text and animated text based on which section is active
        if (sectionId === 'intro') {
            document.querySelector('.animated-text').classList.remove('text-hidden');
            document.querySelector('.finger').classList.remove('finger-hidden');
            document.querySelector('.intro-text').classList.remove('text-hidden');
            document.querySelector('.intro-header').classList.remove('text-hidden');   
            document.querySelector('.intro-subheader').classList.remove('text-hidden');   

            // Hide other sections
            document.querySelectorAll('.content').forEach(content => {
                if (content.id !== 'intro-content') {
                    content.classList.add('text-hidden');
                }
            });
        } else {
            document.querySelector('.animated-text').classList.add('text-hidden');
            document.querySelector('.finger').classList.add('finger-hidden');

            // Hide intro text and header
            document.querySelector('.intro-text').classList.add('text-hidden');
            document.querySelector('.intro-header').classList.add('text-hidden');   
            document.querySelector('.intro-subheader').classList.add('text-hidden');   

            // Show other sections
            document.getElementById(sectionId + '-content').classList.remove('text-hidden');
        }
    }

    // Add event listeners to navigation buttons
    const navButtons = document.querySelectorAll('.button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            showContent(sectionId);
        });
    });

    // When the page loads, initially show the intro content
    showContent('intro');

});
