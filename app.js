/**
 * App.js
 */


(function() {
  var clickCount = 0;
  var countElement = document.getElementById('click-count');

  var catElement = document.getElementById('cat');
  catElement.addEventListener('click', function(event) {
    console.log('Cat Clicked');
    clickCount++;
    countElement.innerHTML = clickCount;
  }, false);
})();
