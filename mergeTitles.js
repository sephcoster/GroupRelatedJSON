#!/usr/bin/env node

var _ = require('lodash');

var fs = require('fs');
var data = JSON.parse(fs.readFileSync('layTitles.json', 'utf8'));

// Adjust this configuration to loop through your file properly
var config = {
  parentField: 'O*NET-SOC Title', // The field you want to group by
  otherParentFields: ['O*NET-SOC Code'], // Other fields you'd like to include in the new object
  relatedField: 'Lay Title' // The field you would like to push to a new, combined array
};

var combined = { };

_.forEach(data, function(n, key) {
  var parent = n[config.parentField];
  if( typeof combined[parent] === 'undefined' ){
    combined[title] = {};
    config.otherParentFields.reduce(function(prev,cur, n, array){
      combined[cur] = n[cur];
    });
    combined.related = [];
  }
  
  combined[title].related.push( n['Lay Title'] );
});

fs.writeFile("mergedCompleted.js", JSON.stringify(combined), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved as mergedCompleted.js");
});

