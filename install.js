/**
 * GIT hooks for NPM and Bower packages
 * @link https://gist.github.com/betorobson/23e5914b51e844bac5eaa6032d6f3f88
 * @author Roberto Robson <betorobson@gmail.com> (https://github.com/betorobson)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

var exec = require('child_process').exec;
var cmd = 'cp ./hooks/* .git/hooks/ && chmod -R a+x .git/hooks/';

if(!process.env.DYNO){
	exec(cmd, function(error, stdout, stderr){
		if(error){
			console.error('NPM Install cannot copy GIT hooks files');
		}else{
			console.log('GIT hooks files successfully copied');
		}
	});
}

