/**
 * App.js
 */


(function() {
  var cats = [
    {title: 'Meow-1', id: 'meow-1', count: 0},
    {title: 'Meow-2', id: 'meow-2', count: 0}
  ];

  for(var i = 0, len = cats.length; i < len; i++) {
    var cat = cats[i];
    var catElement = document.getElementById(cat.id);
    var titleElement = document.getElementById(cat.id + '-title');
    titleElement.innerHTML = cat.title;
    catElement.addEventListener('click', updateCount(cat.id), false);
  }

  function updateCount(id) {
    var count = 0;
    return function(event) {
      event.preventDefault();
      var countElement = document.getElementById(id + '-count');
      count++;
      countElement.innerHTML = 'Click Count: ' + count;
    };
  }
})();
