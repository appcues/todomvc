define('todomvc/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('todomvc/tests/components/todo-item.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/todo-item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/todo-item.js should pass jshint.');
  });
});
define('todomvc/tests/components/todo-list.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/todo-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/todo-list.js should pass jshint.');
  });
});
define('todomvc/tests/controllers/active.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/active.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/active.js should pass jshint.');
  });
});
define('todomvc/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('todomvc/tests/controllers/completed.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/completed.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/completed.js should pass jshint.');
  });
});
define('todomvc/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = destroyApp;

	function destroyApp(application) {
		_ember['default'].run(application, 'destroy');
	}
});
define('todomvc/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('todomvc/tests/helpers/gt.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/gt.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/gt.js should pass jshint.');
  });
});
define('todomvc/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'todomvc/tests/helpers/start-app', 'todomvc/tests/helpers/destroy-app'], function (exports, _qunit, _todomvcTestsHelpersStartApp, _todomvcTestsHelpersDestroyApp) {
	exports['default'] = function (name) {
		var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		(0, _qunit.module)(name, {
			beforeEach: function beforeEach() {
				this.application = (0, _todomvcTestsHelpersStartApp['default'])();

				if (options.beforeEach) {
					options.beforeEach.apply(this, arguments);
				}
			},

			afterEach: function afterEach() {
				if (options.afterEach) {
					options.afterEach.apply(this, arguments);
				}
				(0, _todomvcTestsHelpersDestroyApp['default'])(this.application);
			}
		});
	};
});
define('todomvc/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('todomvc/tests/helpers/pluralize.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/pluralize.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/pluralize.js should pass jshint.');
  });
});
define('todomvc/tests/helpers/resolver', ['exports', 'todomvc/resolver', 'todomvc/config/environment'], function (exports, _todomvcResolver, _todomvcConfigEnvironment) {

	var resolver = _todomvcResolver['default'].create();

	resolver.namespace = {
		modulePrefix: _todomvcConfigEnvironment['default'].modulePrefix,
		podModulePrefix: _todomvcConfigEnvironment['default'].podModulePrefix
	};

	exports['default'] = resolver;
});
define('todomvc/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('todomvc/tests/helpers/start-app', ['exports', 'ember', 'todomvc/app', 'todomvc/config/environment'], function (exports, _ember, _todomvcApp, _todomvcConfigEnvironment) {
	exports['default'] = startApp;

	function startApp(attrs) {
		var application = undefined;

		var attributes = _ember['default'].merge({}, _todomvcConfigEnvironment['default'].APP);
		attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

		_ember['default'].run(function () {
			application = _todomvcApp['default'].create(attributes);
			application.setupForTesting();
			application.injectTestHelpers();
		});

		return application;
	}
});
define('todomvc/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('todomvc/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('todomvc/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('todomvc/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('todomvc/tests/services/repo.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/repo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/repo.js should pass jshint.');
  });
});
define('todomvc/tests/test-helper', ['exports', 'todomvc/tests/helpers/resolver', 'ember-qunit'], function (exports, _todomvcTestsHelpersResolver, _emberQunit) {

	(0, _emberQunit.setResolver)(_todomvcTestsHelpersResolver['default']);
});
define('todomvc/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('todomvc/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map