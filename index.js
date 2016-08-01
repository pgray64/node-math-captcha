/*
  bgFile - a relative path (from your server's entry point) with filename for desired background image
  fontFile - a relative path (from your server's entry point) with filename for desired font
  outputDir - a relative path (from your server's entry point)
  numOps - number of operations in the captcha challenge
  callback - is called as callback(err, imageName, answerStr)

  Requires gm, and GraphicsMagicks (OS package)
*/
var gm = require('gm');


exports.printMsg = function() {
  console.log("This is a message from the demo package");
};

exports.generate = function generate(req, bgFile, fontFile, fillColor, outputDir, numOps, callback) {


  var answer = randomInt(0, 9);
  var expressionStr = nums[answer];


  var imageName = Math.random().toString(36).slice(2) + '.png';
  var imagePath = outputDir + '/' + imageName;


  for (i = 0; i < numOps; ++i) {
    var op = randomInt(0, 3);
    expressionStr += ' ' + ops[op] + ' ';
    var num = randomInt(0, 10);
    expressionStr += nums[num];

    switch (op) {
      case 0:
        answer += num;
        break;
      case 1:
        answer -= num;
        break;
      case 2:
        answer *= num;
        break;
    }

  }
  expressionStr += ' = ?';

  gm(bgFile)
  .font(fontFile)
  .fill(fillColor)
  .pointSize(40)
  .rotate('#000000', randomInt(-5, 5))
  .drawText(50, 50, expressionStr)
  .swirl(randomInt(-30,30))
  .rotate('#000000', randomInt(-5, 5))
  .write(imagePath, function (err) {
    if (err) {
      return console.error(err);
    }
    callback(err, imageName, answer);

  });

};

var ops = ['+', '-', '*'];
var nums = ['zero', 'one', 'two', 'three', 'four', 'five',
            'six', 'seven', 'eight', 'nine'];
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
