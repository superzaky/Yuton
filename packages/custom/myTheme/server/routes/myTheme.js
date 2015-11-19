'use strict';

var config = require('meanio').loadConfig();
/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(MyTheme, app, auth, database) {
	// User routes use users controller
	var users = require('../controllers/users')(MyTheme);
	if(config.strategies.local.enabled)
	{
		// Setting up the users api
		app.route('/api/myTheme/register')
			.post(users.create);
	}
};
