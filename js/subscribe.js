document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzXJoX4-oW6yA44jdLhYRmQ9KY_n1SaIvKCboFCtk-gExHXVfTAdaBFchx8fo5BHbCG/exec'; // Replace with your actual URL
  
    fetch(scriptURL + '?email=' + encodeURIComponent(email), {
      method: 'POST'
    })
    .then(response => response.text())
    .then(data => {
      alert(data);
      document.getElementById('email').value = '';
    }).catch(error => {
        alert("Error: Please try again later.");
    });
  });