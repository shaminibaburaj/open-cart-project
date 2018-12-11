var gulp=require('gulp');
var cucumber=require('gulp-cucumber');
var reporter = require('cucumber-html-reporter');

var options ={

    theme:'bootstrap',
    jsonFile: './reports/cucumber-json-report.json',
    output: './reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,

    metadata: {
        "App version":"1.0.0",
        "Test Environment":"STAGING",
        "Browser":"Chrome 71.0.3578.80",
        "Platform":"Windows",
        "Parallel": "Scenarios",
        "Executed":"Local"
    }
}

gulp.task('cucumberReports',function(){
    reporter.generate(options);
});


gulp.task('cucumber',function(){
    return gulp.src('*features/*').pipe(cucumber({
        'steps': '*features/step_definitions/*.js',
        'support': '*features/support/*.js',
        'format': 'pretty'
    }));
});