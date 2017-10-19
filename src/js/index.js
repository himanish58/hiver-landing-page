var email = document.getElementById('enterEmail');
var phone = document.getElementById('enterPhone');
var enter = document.getElementById('enter');

enter.addEventListener('click', validation);

function validation(e) {
  e.preventDefault();

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) === false)
  {
    alert('Please enter a valid email address!');
    return false;
  }

  if (/^\d{10}$/.test(phone.value) === false) {
    alert('Please enter a valid Phone number!');
    return false;
  }

  return true;

}
