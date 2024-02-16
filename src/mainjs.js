const text = "~ I Design Brand, Packaging, Label, Poster,   Cards & more..."; // Your typewriter text
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                document.getElementById("typewriter").innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 50); // Adjust typing speed (in milliseconds)
            }
        }

        // Start the typewriter effect when the page loads
        window.onload = typeWriter;