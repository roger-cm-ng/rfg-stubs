require('babel-register')();

module.exports = function(compTitle, fileName) {
  return `import './style.scss';
import gameData from './data.json';

export default function controller($scope, RequireImages) {
  'ngInject';

  parent.postMessage({
    evt: 'STANDALONE_CONTROLLER',
    obj: gameData.currentLevel
  }, '*');

  $scope.menu = gameData.game.menu;

  $scope.header = gameData.game.home.header;

  $scope.getScoreboard = function(scoreboard) {};

  $scope.next = function($event) {}

  $scope.onNumberClick = function ($event, num) {};

  // $scope.plus  = function($event) {};

  // $scope.minus = function($event) {};

}`;
}
