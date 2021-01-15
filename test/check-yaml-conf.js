const path = require('path');
const test = require('ava');
const yac = require('..');

// The goal is not to test again all convict features but merely ensure
// that the YAML configuration files use case is well handled.

test('simple YAML configuration', t => {
  const config = yac({
    boolean: {
      format: 'Boolean',
      default: false
    },
    object: {
      first: {
        format: Number,
        default: 0
      },
      second: {
        format: Number,
        default: 1
      }
    },
    array: {
      format: Array,
      default: []
    }
  });
  config.loadFile(path.join(__dirname, 'fixtures', 'config-sample.yaml'));
  t.snapshot(config.get('boolean'));
  t.snapshot(config.get('object'));
  t.snapshot(config.get('array'));
});
