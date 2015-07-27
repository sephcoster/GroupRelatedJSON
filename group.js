#!/usr/bin/env node

var _ = require('lodash');

var fs = require('fs');
var data = JSON.parse(fs.readFileSync('layTitles.json', 'utf8'));

// Adjust this configuration to loop through your file properly
var config = {
  parentField: 'O*NET-SOC Title', // The field you are grouping by
  otherParentFields: ['O*NET-SOC Code'], // Other fields you'd like to include alongside the grouping
  relatedField: 'Lay Title', // The field you would like to combine based on parentField
  outputFileName:  process.argv[2] || 'groupCompleted.js' // Take an argument for Output File
};

var combined = { };

_.forEach(data, function(n, key) {
  var parent = n[config.parentField];
  if( typeof combined[parent] === 'undefined' ){
    combined[parent] = {};
    config.otherParentFields.forEach(function(el, index){
      combined[parent][el] = n[el];
    });
    combined[parent].related = [];
  }
  
  combined[parent].related.push( n[config.relatedField] );
});

fs.writeFile(config.outputFileName, JSON.stringify(combined), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log('The file was saved as ' + config.outputFileName);
});

