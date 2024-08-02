document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (role === 'student') {
        window.location.href = 'student.html';
    } else if (role === 'staff') {
        window.location.href = 'staff.html';
    } else if (role === 'admin') {
        window.location.href = 'admin.html';
    }
});
