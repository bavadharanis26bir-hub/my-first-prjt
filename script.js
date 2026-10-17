
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const name = document.querySelector(
            'input[type="text"]'
        ).value.trim();

        const email = document.querySelector(
            'input[type="email"]'
        ).value.trim();

        const message = document.querySelector(
            "textarea"
        ).value.trim();

        const courses = document.querySelectorAll(
            'input[type="checkbox"]:checked'
        );

        const gender = document.querySelector(
            'input[name="gender"]:checked'
        );

        const country = document.querySelector(
            "select"
        ).value;

        // Validate the form
        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        if (courses.length === 0) {
            alert("Please select at least one course.");
            return;
        }

        if (!gender) {
            alert("Please select your gender.");
            return;
        }

        if (country === "" || country === "Select a country") {
            alert("Please select your country.");
            return;
        }

        // Display success message
        alert("Form submitted successfully!");

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        console.log(
            "Courses:",
            Array.from(courses).map(course => course.value)
        );
        console.log("Gender:", gender.value);
        console.log("Country:", country);

        form.reset();
    });

});
