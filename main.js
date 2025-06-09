
    const buttons = document.querySelectorAll(".keys button");
    const box = document.querySelector(".box"); // just one input

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "AC") {
                box.value = ""; // Clear
            } else if (value === "=") {
                try {
                    box.value = eval(box.value); // Evaluate expression
                } catch {
                    box.value = "Error";
                }
            } else {
                box.value += value;
            }
        });
    });

