import convict from 'convict';
import yaml from 'js-yaml';

convict.addParser({ extension: ['yml', 'yaml'], parse: yaml.load });

export default convict;
