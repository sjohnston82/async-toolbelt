// Async Utilities

function parallel(tasks, callback) {
  const results1 = [];
  var counter = 0;

  tasks.forEach(function (task, i) {
    task(function (err, results) {
      if (err) {
        callback(err);
      }
      results1[i] = results;
      counter++;
      // console.log(results1);
      if (counter === tasks.length) {
        callback(err, results1);
      }
    });
  });
}
// Try to define map using parallel
function map(collection, iteratee, callback) {}

function waterfall(tasks, callback) {}

export default {
  waterfall,
  parallel,
  map,
};
