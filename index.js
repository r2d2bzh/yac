const convict = require('convict');
const yaml = require('js-yaml');

convict.addParser({ extension: ['yml', 'yaml'], parse: yaml.load });

module.exports = convict;
