menuHTML = ''
function generatingMenu () {
  donutList.forEach(donut => {
    menuHTML += `
      <div class="regular-donut-container js-regular-donut-container">
        <img class="donut" src=${donut.image}>
        ${donut.name}
      </div>
    `
  });
}

