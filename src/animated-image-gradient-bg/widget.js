window.addEventListener('onWidgetLoad', function (obj) {
  const fieldData = obj.detail.fieldData;
  const img = document.getElementById('image');
  window.setTimeout(() => {
    img.addEventListener(
      'animationend',
      (evt) => {
        img.classList.remove(fieldData.animation);
        window.setTimeout(() => {
          img.classList.add(fieldData.animation);
        }, fieldData.delayBetween * 1000);
      },
      false
    );
    img.classList.add(fieldData.animation);
  }, fieldData.delayStart * 1000);
});
