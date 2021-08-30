function activateInView(selector, scrollContainer, activateCallback, deactivateCallback) {
  var candidates = document.querySelectorAll(selector),
      lastActive;

  document.addEventListener('scroll', function () {
    var containerTop, threshold;
    if (! scrollContainer) {
      containerTop = 0;
      containerBottom = window.innerHeight;
    } else {
      var containerRect = container.getBoundingClientRect();
      
      containerTop = containerRect.top;
      containerBottom = containerRect.bottom;
    }
    
    threshold = (containerBottom - containerTop) * .6;

    // var visibleCandidates = [];

    var bestCandidate, bestCandidateTop;

    for (var i=0; i < candidates.length; i++) {
      elRect = candidates[i].getBoundingClientRect();
      if (elRect.top < threshold && elRect.bottom > containerTop) {
        if (!bestCandidate || elRect.top > bestCandidateTop) {
          bestCandidateTop = elRect.top;
          bestCandidate = candidates[i];
        }
      }
    }

    if (bestCandidate) {
      if (lastActive != bestCandidate) {
        if (lastActive) {
          (deactivateCallback.bind(lastActive))();
        }
        lastActive = bestCandidate;
        (activateCallback.bind(bestCandidate))();
      }
    } else if (lastActive) {
      (deactivateCallback.bind(lastActive))();
      lastActive = null;
    }

    // if (auto) {
    //   if (visible < minVisible) {
    //     player.getPaused().then(function (paused) {
    //       if (!paused) {
    //         player.off('pause');
    //         player.pause();
    //         player.on('play', disableAuto);
    //       }
    //     })
    //   } else {
    //     player.getPaused().then(function (paused) {
    //       if (paused) {
    //         player.off('play');
    //         player.play();
    //         player.on('pause', disableAuto);
    //       }
    //     })
    //   }
    // }

  }, true);
}

// activateInView('.highlighttable, .codefragment[data-executable="true"]', null, function () {
//   var activeSnippets = document.querySelectorAll('.highlighttable.active');
  
//   for (let i = 0; i < activeSnippets.length; i++) {
//     activeSnippets[i].classList.remove('active');
//   }

//   this.classList.add('active');
//   console.log(this);
// }, function () {
//   this.classList.remove('active');
// });

window.setActivateSketchListeners = function () {
  activateInView('[data-executable]', null, function () {
    this.classList.add('active');
    document.body.dataset.sketchActive = true;
    var script = document.createElement('script');

    script.setAttribute('type', 'text/p5');
    script.setAttribute('data-editor-layout', 'vertical');
    // Set default value, can be overwritten in the loope
    script.setAttribute('data-autoplay', 'on');
    sketch_attributes = [
      'src', 'data-base-url', 'data-download-link', 'data-requirements', 'data-p5-path',
      'data-max-runtime', 'data-continue-on-exception'
    ];
          
    for (var a = 0; a < sketch_attributes.length; a++) {
      let attrName = sketch_attributes[a];
      if (this.hasAttribute(attrName)) {
        script.setAttribute(attrName, this.getAttribute(attrName));
      }
    }

    if (this.hasAttribute('data-autoplay') && this.dataset.autoplay == 'false') {
      delete script.dataset.autoplay;
    }

    document.querySelector('#canvas').appendChild(script);
    // console.log(pre.innerText);
    
    window['p5Widget'].replaceScript(script);

  }, function () {
    // this is the .exex dic which is being deactivated
    this.classList.remove('active');
    delete document.body.dataset.sketchActive;
    delete document.body.dataset.sketchVisible;
    var canvas = document.querySelector('#canvas');

    // Clear all children from canvas
    while (canvas.lastChild) {
      canvas.removeChild(canvas.lastChild);
    }
  });
}