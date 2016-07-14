# node-math-captcha
A math captcha for node

## Usage

`generate(bgFile, fontFile, outputDir, numOps, callback)`

- bgFile - a relative path (from your server's entry point) with filename for desired background image
- fontFile - a relative path (from your server's entry point) with filename for desired font
- outputDir - a relative path (from your server's entry point)
- numOps - number of operations in the captcha challenge
- callback - is called as callback(err, imageName, answerStr)

## Sample Screenshot

![Screenshot](https://github.com/pgray64/node-math-captcha/blob/master/sample/screenshot.png)
