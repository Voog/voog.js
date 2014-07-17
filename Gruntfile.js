module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        simplemocha: {
            options: {
                timeout: 3000,
                ignoreLeaks: false,
                reporter: 'spec'
            },
            all: { src: ['test/**/*.js'] }
        }
    });
    grunt.loadNpmTasks('grunt-simple-mocha');
 
    grunt.registerTask('default', ['simplemocha']);
};
