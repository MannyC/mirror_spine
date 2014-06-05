'use strict';

var fs = require('fs');
var _ = require('lodash');

if(process.argv.length < 2){
  console.error('USAGE: ' + process.argv[1] + ' <spine_json>');
}

var file = fs.readFileSync(process.argv[2]);

var spineObject = JSON.parse(file);

function mirror(object){
  _.forOwn(object, function(value, key, object) {
    if(key === 'x' || key === 'angle' || key === 'rotation'){
      if (value !== 0){
        object[key] = -value;
      }
    }
    else if(_.isObject(value)){
      mirror(value);
    }
  });
}

mirror(spineObject);

console.log(JSON.stringify(spineObject));
