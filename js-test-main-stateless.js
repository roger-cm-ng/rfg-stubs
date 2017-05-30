require('babel-register')();

module.exports = function(compTitle, fileName) {
  return `import expect from 'expect'
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import ${compTitle} from '../${fileName}';

function setup() {
  return shallow(<${compTitle} />);
}

describe('<${compTitle}>', () => {
  it('should have ', () => {

  });
});`
}
