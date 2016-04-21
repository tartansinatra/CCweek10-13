var fs = require('fs');  // node's fileserver

fs.readFile('us-states.txt', 'utf-8', function(err, data){
  if(err){
    console.log('uh oh! error')
  }
  else{
    var bufferString = data;
    console.log(bufferString.split('\n').length);
  }
});

console.log('Oh, where has Oregon?');
console.log('Oh, where has Delaware?');
console.log('Oh, where has New Jersey?');

//  The above proves that the call stack gets processed IN FULL AND prior to the callback, where 'callback requests' are only executed once the call stack is empty.