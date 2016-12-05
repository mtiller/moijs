'use strict';

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-jison');
	grunt.loadNpmTasks('grunt-contrib-clean');

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
		},
		clean: ["./moparser.js", "codemirror/mode/modelica/modelica.js"]
	});

	grunt.registerTask('default', ['jison:parser', 'jison:tokenizer']);
}
