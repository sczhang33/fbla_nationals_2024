function renderSubmittedMessage (){
  html = `
  <div class="signed-up-container">
    <div>Your account has been created!</div>
    <div>Check your email for a coupon for a dozen FREE DONUTS!</div>
    <div>Valid for 7 days.</div>
    <div class="gif-container">
      <img class="homer-donut-gif" src="FBLAImages/homer-donut-gif.gif"/>
    </div>
  </div>
  `
  document.querySelector('.js-signup-container').innerHTML = html;
}