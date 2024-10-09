const scriptURL = 'https://script.google.com/macros/s/AKfycbxZgu2nhbQBtb5q38h00sh1e74wCWbFrioWJChCHrBzAtnZm-mUehe5dZGFSr6X__4/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})