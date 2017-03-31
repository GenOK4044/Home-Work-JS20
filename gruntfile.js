module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

  
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['src/script/*.js'],
      dest: 'prod/script/script.main.js',
    },
  },


  uglify: {
      dist: {
        src: ['src/script/*.js'],
        dest: 'prod/script/script.main.min.js'
      },
    },


  cssmin: {
    dist: {
      src: ["src/style/*.css"],
      dest: "prod/style/style.main.min.css"
    },
  },


    sass: {
    dist: {
      files: {
        'src/style/style.css':'src/style/style.scss'
      }
    }
  },


   watch: {
    sass: {
      files: ['src/style/*.scss'],
      tasks: ['sass', 'cssmin'],
    },
  },


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'sass', 'watch']);


};