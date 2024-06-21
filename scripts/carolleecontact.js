function renderSubmittedMessage() {
  html = `
  <div class="submit-form-container">
    <div>Thank you for submitting your message!</div>
    <div>We will get back to you within 24 hours.</div>
    <div>Call us at 540-552-6706 if you have any questions.</div>
    <img class="carollee-logo" src="FBLAImages/carollee-logo.jpeg" />
  </div>
`
  document.querySelector('.js-contact-us-box').innerHTML = html;
};

document.querySelector('.js-submit-button').addEventListener('click', (event) => {
  renderSubmittedMessage();
});



