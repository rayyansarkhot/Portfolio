document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;
  
      if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
      }
  
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/send_email", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          console.log(xhr.responseText);
          // You can perform additional actions here after the email is sent
        }
      };
  
      var data = JSON.stringify({ name: name, email: email, message: message });
      xhr.send(data);
    });
  });
  