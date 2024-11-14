function setGender(value) {
    document.getElementById('genderInput').value = value;
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profileImage').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function triggerFileInput() {
    document.getElementById('fileInput').click();
}