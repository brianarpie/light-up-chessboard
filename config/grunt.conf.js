  module.exports = function(grunt) {

  grunt.file.setBase("../")

  grunt.initConfig({
    connect: {
      options: {
        port: 9001, // must match port in protractor.conf.js
        hostname: 'localhost'
      },
      test: {
      }
    },
    jshint: {
      files: [
        'Gruntfile.js',
        'app/*.js',
        'app/**/*.js'
      ],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    karma: {
      unit: {
        configFile: 'config/karma.conf.js'
      }
    },
    protractor: {
      options: {
        configFile: 'config/protractor.conf.js',
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
      },
      run: {}
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('test', ['karma', 'connect', 'protractor'])

};
