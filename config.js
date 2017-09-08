
'use strict';

var config = {
	timestamp: Date.now(),
	googleMapsKey: 'AIzaSyCRXrHeiZf654pjQGDSuKuWesgEMB73g3Q',

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