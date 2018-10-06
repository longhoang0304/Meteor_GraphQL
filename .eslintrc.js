module.exports = {
	extends: [
		'airbnb',
		'plugin:meteor/recommended'
	],
	settings: {
    'import/resolver': 'meteor'
  },
	rules: {
		'linebreak-style': 0,
		'eol-last': 0,
		'arrow-parens': 0
	},
	globals: {
		_: true
	}
};