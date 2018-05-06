require('babel-register')();

module.exports = function(compTitle, fileName) {
  return `import './style.scss';
import gameData from './data.json';

export default function controller($scope, RequireImages) {
  'ngInject';

  var url = urlParse($location.absUrl(), true);
  $scope.auth = true;

  if ('|ENV|' !== 'local') {
    console.log('Environment: |ENV|');
    validateAuth(
      $http,
      url.query.authUrl,
      url.query.authToken,
      function(data) {
        if (data.yearGroup <= 6) {
          console.log('Auth: k-6');
          $scope.auth = true;
        } else {
          console.log('Auth: not k-6');
          $scope.auth = false;
        }
      },
      function(data, status) {
        console.log('Auth: network error');
        $scope.auth = false;
      }
    );
  }

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
