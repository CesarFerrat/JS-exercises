function decode (words) {
  var message = '';
  var characterIndex = 0;

  words.forEach(function (wrd) {
    message += wrd.charAt(characterIndex);

    characterIndex += 1;

    if (characterIndex > 4) {
      characterIndex = 0;
    }
  });

  return message;
}

module.exports = decode;
