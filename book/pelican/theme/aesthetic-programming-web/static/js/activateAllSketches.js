(function () {

  var sketches = document.querySelectorAll('[data-executable]'),
      toggleNavbar = document.querySelector('#sketch--toggle--navbar'),
      toggleTemplate = toggleNavbar.querySelector('template'),
      activeSketch = null;

  function deactivateSketch(toggle, sketchWrapper) {
    delete toggle.dataset.active;
    delete sketchWrapper.dataset.active;
    delete document.body.dataset.sketchVisible;
    // Send signal to sketch to stop
    activeSketch = null;
    sketchWrapper.querySelector('iframe').contentWindow.postMessage({
      'type': 'p5jsWidget::stopPlaying'
    });
  }

  function activateSketch (toggle, sketchWrapper) {
    if (activeSketch) {
      deactivateSketch(activeSketch[0], activeSketch[1]);
    }
    
    toggle.dataset.active = true
    sketchWrapper.dataset.active = true;
    document.body.dataset.sketchVisible = true;
    // Trigger autoplay?
    // Send signal to sketch to play.
    activeSketch = [toggle, sketchWrapper];
    
    if (sketchWrapper.hasAttribute('data-autoplay')) {
      let iframe = sketchWrapper.querySelector('iframe');
      if (iframe) {
        iframe.contentWindow.postMessage({
          'type': 'p5jsWidget::startPlaying'
        });
      }
    }
  }

  
  for (var i = 0; i < sketches.length; i++) {
    (function () {
      var sketch = document.createElement('script'),
          sketchWrapper = document.createElement('section'),
          toggle = toggleTemplate.content.cloneNode(true).querySelector('span');
  
      sketchWrapper.className = 'sketch--wrapper';
  
      if (sketches.length > 1) {
        toggle.innerText = toggle.innerText + ' ' + (i + 1).toString();
      }
  
      sketch.setAttribute('type', 'text/p5');
      sketch.setAttribute('data-editor-layout', 'vertical');
      // Set default value, can be overwritten in the loop
      sketch_attributes = [
        'src', 'data-base-url', 'data-download-link', 'data-requirements', 'data-p5-path',
        'data-max-run-time', 'data-continue-on-exception'
      ];
      
      for (var a = 0; a < sketch_attributes.length; a++) {
        let attrName = sketch_attributes[a];
        if (sketches[i].hasAttribute(attrName)) {
          sketch.setAttribute(attrName, sketches[i].getAttribute(attrName));
        }
      }
      
      sketchWrapper.append(sketch);
      sketchWrapper.setAttribute('data-autoplay', 'on');
      if (sketches[i].hasAttribute('data-autoplay') && sketches[i].dataset.autoplay == 'false') {
        delete sketchWrapper.dataset.autoplay;
      }
        
      toggle.addEventListener('click', function() {
        if (toggle.dataset.active) {
          deactivateSketch(toggle, sketchWrapper);
        }
        else {
          activateSketch(toggle, sketchWrapper);
        }
      });

      document.querySelector('#canvas').appendChild(sketchWrapper);
      toggleNavbar.prepend(toggle);
  
    })();
  }
  
  // window['p5Widget'].replaceAll();

})();