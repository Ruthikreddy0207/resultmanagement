document.getElementById('addCredentialsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const newRole = document.getElementById('newRole').value;
    
    // Here you would typically send this data to your server for processing
    // For demonstration, we'll just log it to the console
    console.log('New Credentials:');
    console.log('Username:', newUsername);
    console.log('Password:', newPassword);
    console.log('Role:', newRole);
    
    // Optionally reset the form after submission
    document.getElementById('addCredentialsForm').reset();
    
    // Show a confirmation message or redirect as needed
    alert('New credentials added successfully!');
});
