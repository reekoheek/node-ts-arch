import assert from 'assert';
import { hello } from './hello';

describe('hello()', () => {
  it('return', () => {
    assert.strictEqual(hello('foo'), 'hello foo!');
    assert.strictEqual(hello('bar'), 'hello bar!');
    assert.strictEqual(hello('baz'), 'hello baz!');
  });
});
