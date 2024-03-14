const changeMode = (size, weight, transform, background, color) => {
  return function () {
      document.body.style.fontSize = size;
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
  }
}

const main = () => {

  let spooky = changeMode('9px', 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode('12px', 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode('12px', 'normal', 'lowercase', 'white', 'black');

  let paragraph = document.createElement('p');
  let text = document.createTextNode('Welcome Holberton!');
  paragraph.appendChild(text);

  let buttonSpooky = document.createElement('button');
  let textSpooky = document.createTextNode('Spooky');
  buttonSpooky.appendChild(textSpooky);
  buttonSpooky.addEventListener('click', spooky);

  let buttonDark = document.createElement('button');
  let textDark = document.createTextNode('Dark mode');
  buttonDark.appendChild(textDark);
  buttonDark.addEventListener('click', darkMode);

  let buttonScream = document.createElement('button');
  let textScream = document.createTextNode('Scream mode');
  buttonScream.appendChild(textScream);
  buttonScream.addEventListener('click', screamMode);

  document.body.insertBefore(buttonScream, document.body.firstChild);
  document.body.insertBefore(buttonDark, document.body.firstChild);
  document.body.insertBefore(buttonSpooky, document.body.firstChild);
  document.body.insertBefore(paragraph, document.body.firstChild);
}
  

main();