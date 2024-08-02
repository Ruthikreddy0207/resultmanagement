document.getElementById('individualMarksForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const subject = document.getElementById('subject').value;
    const marks = document.getElementById('marks').value;
    
    console.log('Individual Marks:');
    console.log('Username:', username);
    console.log('Subject:', subject);
    console.log('Marks:', marks);
    
    document.getElementById('individualMarksForm').reset();
    
    alert('Marks submitted successfully!');
});

document.getElementById('fileUploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const marksFile = document.getElementById('marksFile').files[0];
    
    console.log('File Uploaded:', marksFile.name);
    
    document.getElementById('fileUploadForm').reset();
    
    alert('File uploaded successfully!');
});
