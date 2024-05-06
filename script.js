// Script to dynamically add content over the top of the jumbotron
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const targetId = this.id.replace("-btn", "-content");
            const content = document.getElementById(targetId).innerHTML;
            document.getElementById("jumbotron-content").innerHTML = content;
        });
    });
});
