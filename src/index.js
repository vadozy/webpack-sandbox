import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

function lodashVersion() {
  const element = document.createElement('div');
  element.innerHTML = _.VERSION;

  return element;
}

document.body.appendChild(component());
document.body.appendChild(lodashVersion());
