import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | show-me-conflict', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:show-me-conflict');
    assert.ok(route);
  });
});
