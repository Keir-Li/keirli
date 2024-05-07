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
