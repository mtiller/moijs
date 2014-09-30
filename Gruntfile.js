'use strict';

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-jison');

	grunt.initConfig({
		jison: {
			tokenizer: {
				options: {
					moduleType: 'commonjs',
				},
				files: {
					'codemirror/mode/modelica/modelica.js': [
						'molexer.jison',
						'molexer.jisonlex'
					]
				}
			},
			parser: {
				options: {
					moduleType: 'commonjs',
					moduleParser: 'lr',
				},
				files: {
					'moparser.js': ['moparser.jison',  'molexer.jisonlex']
				}
			}
		}
	});

	grunt.registerTask('default', ['jison:parser', 'jison:tokenizer']);
}
