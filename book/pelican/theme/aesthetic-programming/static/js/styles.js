function loadEtherStyle(url, interval) {
  function load(url) {
    fetch(url, { mode: 'no-cors' })
      .then(function(r) {
        console.log(r); return r.text()
      })
      .then(function (styles) {
        var el = document.createElement('style');
        el.appendChild(document.createTextNode(styles));
        el.setAttribute('data-type', 'etherstyle');
        document.head.appendChild(el);
        window.requestAnimationFrame(function () {
          var styles = document.querySelectorAll('[data-type="etherstyle"]');
          for (var i=0;i<(styles.length-1);i++) {
            styles[i].remove();
          }
        });
      });
  }

  load(url);
  var urlParameters = new URLSearchParams(window.location.search),
      reload = urlParameters.get('reload');
  if (reload == 'reload') {
    window.setInterval(function () { load(url); }, interval);
  }
}

(function () {
  loadEtherStyle('https://semestriel.framapad.org/p/aesthetic-programmingcss/export/txt', 7500);
})(); 
