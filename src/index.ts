import './style.scss';
function component() {
  const element = document.createElement('span');
  element.textContent = 'Hello, World & Webpack';
  return element;
}
document.body.appendChild(component());
