import convict from 'convict';
import { load } from 'js-yaml';

// eslint-disable-next-line unicorn/no-top-level-side-effects
convict.addParser({ extension: ['yml', 'yaml'], parse: load });

export { default } from 'convict';
