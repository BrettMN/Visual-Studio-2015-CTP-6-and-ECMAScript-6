"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

(function () {
	"use strict";

	// less typing super feature
	function l(obj) {
		console.log(obj);
	}
	// Arrow Functions
	var evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
	    evenSquared = evens.map(function (n) {
		return n * n;
	});

	l("arrow function");
	l("evens:");
	l(evens);
	l("evensSquared");
	l(evenSquared);

	// Classes

	var MyClassOfAwesome = (function () {
		function MyClassOfAwesome() {
			_classCallCheck(this, MyClassOfAwesome);

			this.time = new Date();
		}

		_prototypeProperties(MyClassOfAwesome, null, {
			timeSinceInstantiated: {
				get: function () {
					return new Date() - this.time;
				},
				configurable: true
			}
		});

		return MyClassOfAwesome;
	})();

	var instanceOfClassOfAwesome = new MyClassOfAwesome();
	l("classes");
	l("time");
	l(instanceOfClassOfAwesome.time);
	l("time since instantiated");
	l(instanceOfClassOfAwesome.timeSinceInstantiated);

	// Default template string

	var name = "Brett",
	    where = "Minnesota";
	var a = "" + name + " is bloggin from " + where;
	l("Default template string");
	l(a);

	// Default Params

	function defaultParam() {
		var param = arguments[0] === undefined ? "no param sent" : arguments[0];

		l(param);
	}

	l("default params");
	defaultParam();
	defaultParam("param sent");
})();