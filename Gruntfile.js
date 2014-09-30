'use strict';

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-jison');

	grunt.initConfig({
		jison: {
			target : {
				options: { moduleType: 'amd' },
				files: {
					'molexer-amd.js': ['molexer.jison',  'molexer.jisonlex']
				}
			}
		}
	});

	grunt.registerTask('default', ['jison']);
}
