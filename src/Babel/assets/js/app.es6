(() => {
	'use strict';

	// less typing super feature
	function l(obj) {
		console.log(obj);
	}
	// Arrow Functions
	var evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        evenSquared = evens.map(n => n * n);

	l('arrow function');
	l('evens:');
	l(evens);
	l('evensSquared');
	l(evenSquared);

	// Classes 
	class MyClassOfAwesome {
		constructor() {
			this.time = new Date();
		}

		get timeSinceInstantiated() {
			return new Date() - this.time;
		}
	}

	var instanceOfClassOfAwesome = new MyClassOfAwesome();
	l('classes');
	l('time');
	l(instanceOfClassOfAwesome.time);
	l('time since instantiated');
	l(instanceOfClassOfAwesome.timeSinceInstantiated);

	// Default template string

	var name = 'Brett', where = 'Minnesota';
	var a = `${name} is bloggin from ${where}`;
	l('Default template string');
	l(a);


	// Default Params

	function defaultParam(param = 'no param sent'){
		l(param);
	}
	
	l('default params');
	defaultParam();
	defaultParam('param sent');

	// other
	var wordSpliter = (word)=>{return word.split('')}
	var letters = wordSpliter('wipdeveloper');
	for(let letter of letters){
	  console.log(letter);
	}

})();