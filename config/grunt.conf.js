  module.exports = function(grunt) {

  grunt.file.setBase("../")

  grunt.initConfig({
    connect: {
      options: {
        port: 9001,
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
    less: {
      development: {
        options: {
          paths: ["app"]
        },
        files: {
          "app/main.css": "app/main.less"
        }
      }
    },
    watch: {
      development: {
        files: [
          'index.html',
          '<%= jshint.files %>',
          'app/*.less',
          'app/**/*.less'
        ],
        tasks: ['less', 'jshint'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },
    karma: {
      unit: {
        configFile: 'config/karma.conf.js'
      }
    },
    protractor: {
      options: {
        configFile: 'config/protractor.conf.js',
        framework: 'jasmine2',
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
      },
      run: {},
      saucelabs: {
        options: {
          args: {
            sauceUser: process.env.SAUCE_USERNAME,
            sauceKey: process.env.SAUCE_ACCESS_KEY,
            tunnel-identifier: process.env.TRAVIS_JOB_NUMBER
          },
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('serve', ['connect', 'watch', 'less']);
  grunt.registerTask('test', ['karma', 'connect', 'protractor:run']);
  grunt.registerTask('travis', ['karma', 'connect', 'protractor:saucelabs']);

};
