import './main.scss'
import _ from 'lodash';

function componenet () {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

const component2 = () => {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Goodbye', 'webpack'], ' ');
  return element;
}

document.body.appendChild(componenet());
document.body.appendChild(component2());