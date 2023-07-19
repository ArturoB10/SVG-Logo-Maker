const { prompt } = require('inquirer');
const { questions,genSvg } = require('./lib');

prompt(questions).then(genSvg);