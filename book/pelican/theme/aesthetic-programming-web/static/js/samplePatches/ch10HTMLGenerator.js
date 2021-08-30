const fragment = document.createElement('section');

fragment.innerHTML = `
  <style>
    body {background-color: white;font-family:"Lucida Console", Monaco,
    monospace;font-size:12;color:grey;overflow-y: auto!important; padding: 0 1em;}
    h1   {color: blue;}
    p    {color: black; font-size:14;}
  </style>
  <h1>Auto Chapter Generator</h1>
  <h2>This example uses a pre-trained model on the collection of all the
     chapters (in the form of markdown) of the book Aesthetic Programming:
      A Handbook of Software Studies</h2>
  <p>seed text:
    <input id="textInput" value="Afterword: Recurrent Imaginaries" size="30"/>
  </p>
  <p>length:
    <input id="lenSlider" type="range" min="100" max="2000" value="1000"/>
     <span id="length">1000</span></p>
  <p>temperature:
    <input id="tempSlider" type="range" min="0" max="1" step="0.01"/>
    <span id="temperature">0.5</span></p>
  <p id="status">Loading Model</p>
  <button id="generate">generate</button>
   <hr>
  <p id="result"></p>`;

document.body.appendChild(fragment);
