function validation(e){return e.preventDefault(),!1===/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)?(alert("Please enter a valid email address!"),!1):!1!==/^\d{10}$/.test(phone.value)||(alert("Please enter a valid Phone number!"),!1)}var email=document.getElementById("enterEmail"),phone=document.getElementById("enterPhone"),enter=document.getElementById("enter");enter.addEventListener("click",validation);