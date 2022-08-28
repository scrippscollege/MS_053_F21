
(function (Paged) {

  function createToc (config) {
    const titleElements = config.titleElements;
    const content = config.content;
    const getTitleHierarchy = function (el) { return el.tagName.replace(/^\D+/g, '') }
        
    // create toc list
    let tocElements = content.querySelectorAll(titleElements.join(', '));
    let lastHierarcy = 1;
    let rootTocUl = document.createElement("ul"); 
    let tocUl = rootTocUl;

    for(var i = 0; i < tocElements.length; i++){
        let tocElement = tocElements[i];
        let titleHierarchy = getTitleHierarchy(tocElement);
        let tocNewLi;

        if (titleHierarchy > lastHierarcy) {
          while (titleHierarchy > lastHierarcy) {
            tocUl = tocUl.lastElementChild.appendChild(document.createElement("ul"));
            tocNewLi = tocUl.appendChild(document.createElement("li"));
            lastHierarcy += 1;
          }
        } else {
          if (titleHierarchy < lastHierarcy) {
            while (titleHierarchy < lastHierarcy) {
              // Navigate up in the tree
              tocUl = tocUl.parentElement.parentElement;
              lastHierarcy -= 1;
            }
          }
          
          tocNewLi = document.createElement("li");
          tocUl.appendChild(tocNewLi);
        }

        // Create the element
        tocNewLi.innerHTML = '<a href="#' + tocElement.id + '">' + tocElement.innerHTML + '</a>';
        tocUl.appendChild(tocNewLi);  
    }

    return rootTocUl;
  }


  class handlers extends Paged.Handler {
    constructor(chunker, polisher, caller) {
      super(chunker, polisher, caller);
    }

    beforeParsed(content) { 
      content.getElementById('mainToc')
        .appendChild(
          createToc({
            content: content,
            titleElements: [ 'h1', 'h2', 'h3', 'h4' ]
          }));
    }
    
  }

  Paged.registerHandlers(handlers);

})(Paged);