
'use strict';

var config = {
	timestamp: Date.now(),

	dev: true,

	// production version destination folder
	dirBuild: 'build',

	// developer version destination folder
	dirDebug: 'debug',

	// return export files destination folder
	getDirDest: function(){
		if(this.dev)
			return this.dirDebug;
		else
			return this.dirBuild;
	}

};

module.exports = config;