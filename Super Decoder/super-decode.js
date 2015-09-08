var decode = require('./decode.js')

function superDecode (sentence, direction) {
  var words = sentence.split(' ');

  if (direction !== undefined) {
    var options = direction.split('-');

    if (options[0] === 'even' || options[0] === 'odd') {
      var refinedWords = [];

      words.forEach(function (wrd, i) {
        if (options[0] === 'even' && i % 2 === 0) {
          refinedWords.push(wrd);
        } else if (options[0] === 'odd' && i % 2 === 1) {
          refinedWords.push(wrd);
        }
      });

      words = refinedWords;
    }

    if (options[0] === 'backwards' || options[1] === 'backwards') {
      words.reverse();
    }
  }

  return decode(words);
}

module.exports = superDecode;
