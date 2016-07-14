# node-math-captcha
A math captcha for node

## Install
- GraphicsMagicks (OS package) is needed
- `npm install node-math-captcha` 

## Usage

`require('node-math-captcha').generate(bgFile, fontFile, outputDir, numOps, callback)`

- bgFile - a relative path (from your app's point) with filename for desired background image
- fontFile - a relative path (from your app's entry point) with filename for desired font
- outputDir - a relative path (from your app's entry point)
- numOps - number of operations in the captcha challenge
- callback - is called as callback(err, imageName, answerStr)

An easy method is to use express sessions to store the captcha answer. Have your frontend signup page request a captcha via a route that calls the generate function. Then your backend signup script can compare user input to the captcha answer stored in the express session. Of course, on failed attempts (and successes) you want to invalidate the captcha (e.g. set answer to equal null).

## Sample Screenshot

![Screenshot](https://github.com/pgray64/node-math-captcha/raw/master/sample/screenshot.png)
