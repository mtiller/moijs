'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		jison: {
			target : {
				options: { moduleType: 'amd' },
				files: {
					'molexer-amd.js': ['molexer.jison',  'molexer.jisonlex'}
				}
			}
		}
	});
}

