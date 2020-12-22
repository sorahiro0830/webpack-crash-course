import _ from 'lodash';
import { NAME, Nijou } from './utilities';
import * as utilities from './utilities';
import { NAME3 as NAME_OF_SORAHIRO3 } from './utilities';
import Lion from './utilities';
import Lionnn from './utilities';

console.log(Nijou(3));
console.log(NAME);
console.log(utilities.Nijou2(10));
console.log(utilities.NAME2);
console.log(NAME_OF_SORAHIRO3);
console.log(Lion.say());
console.log(Lionnn.say());

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

document.body.appendChild(component());
