// Script to toggle content based on button clicks
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".buttons button");
    const contents = document.querySelectorAll(".content");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const targetId = this.id.replace("-btn", "-content");
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            contents.forEach(content => content.classList.remove("active"));
            document.getElementById(targetId).classList.add("active");
        });
    });
});
