document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const table = document.getElementById('variablesTable');
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('header nav');

    // Load saved data
    const savedData = JSON.parse(localStorage.getItem('formData')) || [];
    renderTable(savedData);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(span => span.textContent = '');

        // Validation
        let isValid = true;

        const fullName = document.getElementById('fullName').value;
        const fatherName = document.getElementById('fatherName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const address = document.getElementById('address').value;
        const education = document.getElementById('education').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!fullName) {
            document.getElementById('fullNameError').textContent = 'Full Name is required';
            isValid = false;
        }

        if (!fatherName) {
            document.getElementById('fatherNameError').textContent = 'Father\'s Name is required';
            isValid = false;
        }

        if (!email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            document.getElementById('emailError').textContent = 'Valid Email is required';
            isValid = false;
        }

        if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
            document.getElementById('phoneNumberError').textContent = 'Valid Phone Number is required';
            isValid = false;
        }

        if (!address) {
            document.getElementById('addressError').textContent = 'Address is required';
            isValid = false;
        }

        if (!education) {
            document.getElementById('educationError').textContent = 'Education is required';
            isValid = false;
        }

        if (!password) {
            document.getElementById('passwordError').textContent = 'Password is required';
            isValid = false;
        }

        if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
            isValid = false;
        }

        if (isValid) {
            // Create data object
            const data = {
                fullName,
                fatherName,
                email,
                phoneNumber,
                address,
                education,
                password
            };

            // Retrieve and update local storage
            const savedData = JSON.parse(localStorage.getItem('formData')) || [];
            savedData.push(data);
            localStorage.setItem('formData', JSON.stringify(savedData));

            // Re-render table with all data
            renderTable(savedData);

            // Optionally, clear the form after submission
            form.reset();
        }
    });

    // Toggle navigation menu
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Function to render table
    function renderTable(data) {
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Father's Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Education</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
        `;

        data.forEach(row => {
            table.innerHTML += `
                <tr>
                    <td>${row.fullName}</td>
                    <td>${row.fatherName}</td>
                    <td>${row.email}</td>
                    <td>${row.phoneNumber}</td>
                    <td>${row.address}</td>
                    <td>${row.education}</td>
                    <td>${row.password}</td>
                </tr>
            `;
        });

        table.innerHTML += '</tbody>';
    }
});
toggleTableBtn.addEventListener('click', function() {
    if (variablesDisplay.style.display === 'none' || variablesDisplay.style.display === '') {
        variablesDisplay.style.display = 'block';
        toggleTableBtn.textContent = 'Hide Registration Details';
    } else {
        variablesDisplay.style.display = 'none';
        toggleTableBtn.textContent = 'Show Registration Details';
    }
    });
