'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const dir = 'electron-war-package/';



let files = [
  dir + 'electron.app.config.json',
  dir + 'icon.png',
  dir + 'index.html',
  dir + 'main.js',
  dir + 'package.json',
  dir + 'README.md'
]




describe('generator-electron-war-package: ', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
  });

  it('create files', () => {
    assert.file(files);

  });

});

