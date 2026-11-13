alert("Welcome to my portfolio! Please note that this website is still under construction and may not be fully functional.");

window.onload = function() {
    const modeToggle = document.getElementById("mode-toggle");
    
    modeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            modeToggle.textContent = "Switch to Light Mode";
        } else {
            modeToggle.textContent = "Switch to Dark Mode";
        }
    });

    // Initialize Granim for the gradient bar (from Granim.js example website: https://sarcadass.github.io/granim.js/examples.html)
    var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'left-right',
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    [
                        { color: '#1b263b', pos: .2 },
                        { color: '#415a77', pos: .8 },
                        { color: '#f4c2c2', pos: 1 }
                    ], [
                        { color: '#778da9', pos: 0 },
                        { color: '#caf0f8', pos: .2 },
                        { color: '#f4c2c2', pos: .75 }
                    ],
                ]
            }
        }
    });
};