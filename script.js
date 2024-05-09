// Typing animation function
function typeWriter(textElement, text, delay) {
    const textArray = text.split('');
    let index = 0;

    function typing() {
        if (index < textArray.length) {
            textElement.innerHTML += textArray[index];
            index++;
            setTimeout(typing, delay);
        }
    }

    typing();
}

// Get all elements with the class "typing-line" and apply typing animation
const typingLines = document.querySelectorAll('.typing-line');
typingLines.forEach((line, index) => {
    // Delay calculation to make each line start after the previous one finishes
    const delay = (index + 1) * 1000; // Adjust delay as needed
    typeWriter(line, line.innerHTML, 50); // Adjust delay between characters as needed
});


function showContent(sectionId) {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(sectionId + '-btn').classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(sectionId + '-content').classList.add('active');

    // Hide the animated text and finger when a button is clicked
    document.querySelector('.animated-text').classList.add('text-hidden');
    document.querySelector('.finger').classList.add('finger-hidden');
    document.querySelector('.intro-text').classList.add('text-hidden');
    document.querySelector('.intro-header').classList.add('text-hidden');   
    document.querySelector('.intro-subheader').classList.add('text-hidden');   

    // If the 'My Intro' button is clicked, reset the page to its initial state
    if (sectionId === 'intro') {
        document.querySelector('.animated-text').classList.remove('text-hidden');
        document.querySelector('.finger').classList.remove('finger-hidden');
        document.querySelector('.intro-text').classList.remove('text-hidden');
        document.querySelector('.intro-header').classList.remove('text-hidden');   
        document.querySelector('.intro-subheader').classList.remove('text-hidden');   
    }
}
