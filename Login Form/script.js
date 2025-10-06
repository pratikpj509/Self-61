$(document).ready(function () {
  // Clock using Date class and setInterval
  function updateClock() {
    const now = new Date();
    $('#clock').text(now.toLocaleString());
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Form validation and AJAX
  $('#loginForm').submit(function (e) {
    e.preventDefault();

    const username = $('#username').val().trim();
    const password = $('#password').val().trim();

    if (username === '' || password.length < 6) {
      $('#message').text('Invalid input: Username required, Password ≥ 6 characters');
      return;
    }

    // Simulate AJAX request
    $.getJSON('server.json', function (data) {
      if (username === data.username && password === data.password) {
        $('#message').css('color', 'green').text(`Welcome, ${username}!`);
        
        // Session timeout message after 10 seconds
        setTimeout(() => {
          alert('⚠️ Session will expire soon');
        }, 10000);
      } else {
        $('#message').css('color', 'red').text('Login failed!');
        $('#loginForm').effect('shake'); // jQuery UI effect (optional)
      }
    });
  });
});
