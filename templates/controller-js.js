require('babel-register')();

module.exports = function(compTitle, fileName) {
  return `import './style.scss';
import data from './data.json';

export default function controller($scope) {
  'ngInject';

}`;
}
