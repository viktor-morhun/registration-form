document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registration-form');
  const pass1 = document.getElementById('pass-1');
  const pass2 = document.getElementById('pass-2');

  form.addEventListener('submit', function(event) {
    if (pass1.value !== pass2.value) {
      alert("Паролі не співпадають. Будь ласка, введіть однакові паролі.");
      event.preventDefault();
    }
  });
});
