//prefent flicker 
document.addEventListener('DOMContentLoaded', function () {
  var preferredTheme = localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : ''
  document.body.className = preferredTheme
})



