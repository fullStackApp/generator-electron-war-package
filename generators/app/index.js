const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const fs= require('fs');
const dir = 'electron-war-package';
const path = require('path');
let directory = '';


module.exports = class extends Generator {

  prompting() {

    this.log(yosay(
      'Welcome to ' + chalk.red('electron-war-package') + ' generator!'))


  }

  writing() {

    let files = [
      'electron.app.config.json',
      'icon.png',
      'index.html',
      'main.js',
      'package.json',
      'README.md'
    ]

    this.log(`Generating folder '${dir}'`);
    if (!fs.existsSync(dir)) {
      directory = path.join(process.cwd(), dir);
      fs.mkdirSync(directory);
    } else if(fs.existsSync(dir)) {
      throw new Error(`the folder: ${dir} already exists. Please delete before it!`);
    }

    directory = path.join(process.cwd(), dir);
    process.chdir(directory);

    for (let file of files) {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(directory + '/' + file), {
        })
    }

  }

  install() {
    this.npmInstall(('').split(' '), {
      'save': true
    });
    this.npmInstall().then(() => {
      this.log(`\nEnd of generation in ${chalk.yellow.bold(`${dir}`)} folder, now you can use this module after generating the target/*.war. View the following instructions, to execute in that folder, into the generated ${chalk.yellow.bold('README.md')} :`);
      this.log(`1. To run the app in a live electron process, run: ${chalk.yellow.bold(`npm start`)}`);
      this.log(`2. To package your app in an electron exe, run: ${chalk.yellow.bold(`npm run package`)}`);
      this.log(`For both, when you open the electron window, you can view the backend log typing ${chalk.yellow.bold('F1 keyword')}`);

    });

  }
}
