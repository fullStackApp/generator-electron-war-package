'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
//const dir = 'electron-war-package/';



let files = [
  'electron.app.config.json',
  'icon.png',
  'index.html',
  'main.js',
  'package.json',
  'README.md'
]




describe('generator-electron-war-package: ', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
  });

  it('create files', () => {
    assert.file(files);

  });

});

