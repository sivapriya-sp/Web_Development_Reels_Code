
function toggleBio() {
  const bio = document.getElementById('bio');
  if (bio.style.display === 'none' || bio.style.display === '') {
    bio.style.display = 'block';
  } else {
    bio.style.display = 'none';
  }
}
