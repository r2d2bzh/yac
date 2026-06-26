import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'ava';
import yac from '../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// The goal is not to test again all convict features but merely ensure
// that the YAML configuration files use case is well handled.

test('simple YAML configuration', (t) => {
  const config = yac({
    boolean: {
      format: 'Boolean',
      default: false,
    },
    object: {
      first: {
        format: Number,
        default: 0,
      },
      second: {
        format: Number,
        default: 1,
      },
    },
    array: {
      format: Array,
      default: [],
    },
  });
  config.loadFile(path.join(__dirname, 'fixtures', 'config-sample.yaml'));
  t.snapshot(config.get('boolean'), 'boolean');
  t.snapshot(config.get('object'), 'object');
  t.snapshot(config.get('array'), 'array');
});
