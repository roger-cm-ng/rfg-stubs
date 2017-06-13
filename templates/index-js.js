require('babel-register')();

module.exports = function(compTitle, fileName) {
  return `import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import angularUIRouter from 'angular-ui-router';
import common from '../../../compositions/common.js';
import gameHeader from '../../game-header';
import gameFooter from '../../game-footer';
import gameSubMenu from '../../game-sub-menu/index';
import gameImages from '../../game-images';
import workArea from '../../work-area';
import leftPanel from '../../panel-left';
import rightPanel from '../../panel-right';
import bottomPanel from '../../panel-bottom';
import baseline from '../../baseline';
import numPad from '../../num-pad';
import sketchPad from '../../sketch-pad';
import infoPanel from '../../info-panel';
import scoreboard from '../../scoreboard';
import checkButton from '../../check-button';
import controller from './controller';

angular
  .module('ngOrderObjectBy', [])
  .filter('orderObjectBy', function() {
    return function (items, field, reverse) {

      function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }

      var filtered = [];

      angular.forEach(items, function(item, key) {
        item.key = key;
        filtered.push(item);
      });

      function index(obj, i) {
        return obj[i];
      }

      filtered.sort(function (a, b) {
        var comparator;
        var reducedA = field.split('.').reduce(index, a);
        var reducedB = field.split('.').reduce(index, b);

        if (isNumeric(reducedA) && isNumeric(reducedB)) {
          reducedA = Number(reducedA);
          reducedB = Number(reducedB);
        }

        if (reducedA === reducedB) {
          comparator = 0;
        } else {
          comparator = reducedA > reducedB ? 1 : -1;
        }

        return comparator;
      });

      if (reverse) {
        filtered.reverse();
      }

      return filtered;
    };
  });

angular
  .module('app', [
    ngSanitize,
    angularUIRouter,
    common
  ])
  .component('gameHeader', gameHeader)
  .component('gameFooter', gameFooter)
  .component('gameSubMenu', gameSubMenu)
  .component('leftPanel', leftPanel)
  .component('rightPanel', rightPanel)
  .component('bottomPanel', bottomPanel)
  .component('numPad', numPad)
  .component('workArea', workArea)
  .component('gameImages', gameImages)
  .component('baseline', baseline)
  .component('sketchPad', sketchPad)
  .component('infoPanel', infoPanel)
  .component('scoreboard', scoreboard)
  .component('checkButton', checkButton)
  .controller(
    'controller',
    controller
  )
  .run(function () {
    'ngInject';
  });
`;
}
